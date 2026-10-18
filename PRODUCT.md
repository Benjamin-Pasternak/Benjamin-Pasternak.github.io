# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring managers screening Benjamin Pasternak for senior backend and platform engineering roles. They usually arrive from a resume, LinkedIn or an application, often skim on a phone or between other candidates, and need to judge level and fit quickly. Success is that they reach out or move him forward to an interview.

## Product Purpose

A personal career site for Benjamin Pasternak, Senior Application Software Engineer at Oracle (promoted Oct 2026; Cloud Software Engineer Sep 2024 – Oct 2026; Application Developer Jan 2022 – Sep 2024; AllSource consultant at Merck Sep 2021 – Jan 2022). It presents his experience, the systems he has built, and how to contact him.

## Positioning

Senior backend and platform engineer: owns production services end to end on OCI and Kubernetes, including authentication and authorization, gateways, asynchronous processing, CI/CD, and observability. AI platform work (RAG tracing, agent tooling, GenAI services) is one area of that experience, not the headline.

## Operating Context

- Visitors come from the resume, LinkedIn, or a job application, and read the site alongside the resume.
- The resume (latest in `~/Desktop/Resume`, named `Pasternak_Benjamin_Resume_YYYY-MM-DD`) is the source of truth for titles, dates, projects and metrics. The site should stay consistent with it.

## Capabilities and Constraints

- Static HTML, CSS and JavaScript served by GitHub Pages from the `master` branch (`.nojekyll` present). No build step.
- The repo also hosts files that must keep working at their current URLs and are out of scope for any portfolio design work. Never edit, move, restyle or delete them:
  - `/sproutmark-privacy.html` and `/lamplistener-privacy.html` (iOS app privacy policies; self-contained with inline styles, sharing no CSS or JS with the portfolio)
  - `/.well-known/apple-app-site-association` (Sproutmark universal links: NFC tag URLs under `/v1/*` open the iOS app)
  - `.nojekyll` (required so GitHub Pages serves the `.well-known` folder)
- Do not create anything under `/v1/`; that path belongs to the Sproutmark NFC links.
- Portfolio design work is limited to `index.html`, `styles.css`, `main.js` and portfolio assets such as `profile.jpeg`.
- Scope is a career portfolio only. The personal iOS apps are not featured; Lamplight remains the open-source project.
- Single light theme (the theme toggle was removed in the Oct 2026 redesign). Contact is by email (mailto plus copy button), LinkedIn and GitHub.
- GitHub profile link: `github.com/Benjamin-Pasternak` (matches the resume). The Lamplight repo lives at `github.com/intransigent-iconoclast/lamplight-cli`.

## Evidence on Hand

- Profile photo: original `profile.jpeg` (about 2.3 MB); the page serves resized copies `profile-400.webp` and `profile-720.webp`.
- Public code: Lamplight, an open-source Go CLI (`github.com/intransigent-iconoclast/lamplight-cli`).
- LinkedIn: `linkedin.com/in/benjamin-pasternak`.
- Oracle work has no public repos, demos or screenshots. Do not invent links, screenshots, architecture diagrams presented as real, testimonials, employer logos, or metrics beyond those on the resume.

## Product Principles

1. Seniority and fit should be clear within seconds of landing, on a phone as well as a desktop.
2. Every claim matches the resume; nothing is invented or inflated.
3. Show real systems and outcomes (what was built, at what scale, with what result) over lists of tools.
4. Contacting him is always one step away.

## Accessibility & Inclusion

Meet WCAG 2.1 AA: text contrast, keyboard navigation with visible focus, and reduced-motion support.
