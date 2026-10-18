const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

// =====================
// THEME
// =====================
// Initial theme is applied by the inline script in <head> to avoid a flash.
const html = document.documentElement
const themeBtn = document.getElementById('theme-toggle')
const themeColorMeta = document.querySelector('meta[name="theme-color"]')

function syncThemeUI() {
  const isDark = html.classList.contains('dark')
  themeBtn?.setAttribute('aria-label', isDark ? 'Switch to light theme' : 'Switch to dark theme')
  themeColorMeta?.setAttribute('content', isDark ? '#0a0a0f' : '#f8fafc')
}
syncThemeUI()

themeBtn?.addEventListener('click', () => {
  const next = html.classList.contains('dark') ? 'light' : 'dark'
  html.classList.remove('dark', 'light')
  html.classList.add(next)
  try { localStorage.setItem('theme', next) } catch (e) {}
  syncThemeUI()
})

// =====================
// NAV
// =====================
const nav = document.getElementById('nav')
const hamburger = document.getElementById('nav-hamburger')
const mobileMenu = document.getElementById('nav-mobile')
const iconMenu = hamburger?.querySelector('.icon-menu')
const iconX = hamburger?.querySelector('.icon-x')

window.addEventListener('scroll', () => {
  nav?.classList.toggle('scrolled', window.scrollY > 20)
  updateActiveNav()
}, { passive: true })

function setMenu(open) {
  mobileMenu?.classList.toggle('open', open)
  hamburger?.setAttribute('aria-expanded', String(open))
  hamburger?.setAttribute('aria-label', open ? 'Close menu' : 'Open menu')
  if (iconMenu) iconMenu.style.display = open ? 'none' : 'block'
  if (iconX)    iconX.style.display    = open ? 'block' : 'none'
}

hamburger?.addEventListener('click', () => setMenu(!mobileMenu?.classList.contains('open')))
mobileMenu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setMenu(false)))
document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && mobileMenu?.classList.contains('open')) {
    setMenu(false)
    hamburger?.focus()
  }
})

const navLinkEls = document.querySelectorAll('.nav-links .nav-link')
function updateActiveNav() {
  const ids = ['about', 'experience', 'projects', 'skills', 'contact']
  let active = ''
  for (const id of [...ids].reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 120) { active = id; break }
  }
  navLinkEls.forEach(link => {
    const isActive = link.getAttribute('href') === `#${active}`
    link.classList.toggle('active', isActive)
    if (isActive) link.setAttribute('aria-current', 'true')
    else link.removeAttribute('aria-current')
  })
}

// =====================
// TYPING ANIMATION
// =====================
const titles = [
  'Senior Software Engineer',
  'Cloud Software Engineer',
  'Platform & Infrastructure Engineer',
  'Kubernetes & Go Developer',
  'AI Platform Engineer',
]
let titleIdx = 0, charIdx = titles[0].length, isTyping = false
const typingEl = document.getElementById('hero-typing')

function tick() {
  if (!typingEl) return
  const target = titles[titleIdx]
  if (isTyping) {
    if (charIdx < target.length) {
      typingEl.textContent = target.slice(0, ++charIdx)
      setTimeout(tick, 60)
    } else {
      setTimeout(() => { isTyping = false; tick() }, 2000)
    }
  } else {
    if (charIdx > 0) {
      typingEl.textContent = target.slice(0, --charIdx)
      setTimeout(tick, 35)
    } else {
      titleIdx = (titleIdx + 1) % titles.length
      isTyping = true
      setTimeout(tick, 200)
    }
  }
}
// The first title is already rendered in the HTML; start cycling after a pause.
if (!reduceMotion) setTimeout(tick, 2400)

// =====================
// SCROLL REVEAL
// =====================
const revealEls = document.querySelectorAll('.reveal')
if (reduceMotion || !('IntersectionObserver' in window)) {
  revealEls.forEach(el => el.classList.add('visible'))
} else {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        revealObserver.unobserve(entry.target)
      }
    })
  }, { threshold: 0.08 })
  revealEls.forEach(el => revealObserver.observe(el))
}

// =====================
// EMAIL + COPY BUTTON
// =====================
;(function () {
  const addr = 'benjamin.pasternak' + '@' + 'rutgers.edu'

  const display = document.getElementById('email-display')
  if (display) {
    display.textContent = addr
    display.setAttribute('href', 'mailto:' + addr)
  }

  const copyBtn = document.getElementById('copy-btn')
  const tooltip = document.getElementById('copy-tooltip')
  const iconCopy  = copyBtn?.querySelector('.icon-copy')
  const iconCheck = copyBtn?.querySelector('.icon-check')
  let resetTimer

  function flash(message, ok) {
    if (tooltip) tooltip.textContent = message
    tooltip?.classList.add('show')
    if (ok) {
      if (iconCopy)  iconCopy.style.display  = 'none'
      if (iconCheck) iconCheck.style.display = 'block'
    }
    clearTimeout(resetTimer)
    resetTimer = setTimeout(() => {
      if (iconCopy)  iconCopy.style.display  = 'block'
      if (iconCheck) iconCheck.style.display = 'none'
      tooltip?.classList.remove('show')
    }, 2000)
  }

  copyBtn?.addEventListener('click', () => {
    if (!navigator.clipboard) return flash('Select the address to copy', false)
    navigator.clipboard.writeText(addr).then(
      () => flash('Copied!', true),
      () => flash('Select the address to copy', false)
    )
  })
})()
