// =====================
// EMAIL: assembled at runtime to keep it out of simple scrapers
// =====================
;(function () {
  const addr = 'benjamin.pasternak' + '@' + 'rutgers.edu'
  const mailto = 'mailto:' + addr

  const link = document.getElementById('email-link')
  if (link) {
    link.textContent = addr
    link.setAttribute('href', mailto)
  }
  document.querySelectorAll('[data-mailto]').forEach(el => el.setAttribute('href', mailto))
  document.querySelectorAll('[data-email]').forEach(el => {
    el.textContent = addr
    el.setAttribute('href', mailto)
  })

  const copyBtn = document.getElementById('copy-btn')
  const status = document.getElementById('copy-status')
  let resetTimer

  function say(message) {
    if (!status) return
    status.textContent = message
    clearTimeout(resetTimer)
    resetTimer = setTimeout(() => { status.textContent = '' }, 2400)
  }

  copyBtn?.addEventListener('click', () => {
    if (!navigator.clipboard) return say('Select the address to copy it')
    navigator.clipboard.writeText(addr).then(
      () => say('Copied'),
      () => say('Select the address to copy it')
    )
  })
})()
