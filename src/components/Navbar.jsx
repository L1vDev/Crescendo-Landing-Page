import { useState, useRef } from 'react'
import { useLanguage } from '../LanguageContext'
import translations from '../translations'

const SERVICESDropdown = [
  { labelEn: 'Local SEO', labelEs: 'SEO Local', href: '#' },
  { labelEn: 'Google Ads & Meta Ads', labelEs: 'Google Ads y Meta Ads', href: '#' },
  { labelEn: 'Web Design', labelEs: 'Diseno Web', href: '#' },
  { labelEn: 'AI Chat 24/7', labelEs: 'Chat IA 24/7', href: '#' },
  { labelEn: 'Social Media', labelEs: 'Social Media', href: '#' },
  { labelEn: 'Online Reputation', labelEs: 'Reputacion Online', href: '#' },
]

export default function Navbar() {
  const { lang, toggleLang } = useLanguage()
  const t = translations[lang].nav

  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const navRef = useRef(null)

  const handleSmoothScroll = (e, href) => {
    e.preventDefault()
    if (href === '/' || href === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else if (href.startsWith('#')) {
      const target = document.querySelector(href)
      if (target) {
        window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' })
      }
    }
    setMobileOpen(false)
    setDropdownOpen(false)
  }

  return (
    <nav
      ref={navRef}
      className="navbar"
    >
      <div className="container">
        <div className="nav-wrapper">
          <a
            className="logo"
            href="/"
            aria-label={lang === 'es' ? t.ariaCrescendoHome : 'Crescendo home'}
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMobileOpen(false); }}
          >
            <img
              src={ import.meta.env.BASE_URL + "/img/logodorado.png"}
              alt="Crescendo Logo"
              className="logo-img"
              width="180"
              height="60"
              loading="eager"
              decoding="async"
            />
          </a>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-menu ${mobileOpen ? 'active' : ''}`} id="navMenu">
            <li>
              <a href="/" onClick={(e) => handleSmoothScroll(e, '/')}>
                {t.home}
              </a>
            </li>
            <li
              className="nav-dropdown"
              onMouseEnter={() => !mobileOpen && setDropdownOpen(true)}
              onMouseLeave={() => !mobileOpen && setDropdownOpen(false)}
            >
              <a
                href="#servicios"
                className="dropdown-toggle"
                onClick={(e) => {
                  e.preventDefault()
                  if (mobileOpen) {
                    setDropdownOpen(!dropdownOpen)
                  } else {
                    const target = document.querySelector('#servicios')
                    if (target) window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' })
                  }
                }}
              >
                <span>{t.services}</span>
                <i className="fas fa-chevron-down"></i>
              </a>
              <ul className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}>
                {SERVICESDropdown.map((item) => (
                  <li key={item.href}>
                    <a href={item.href}>{lang === 'es' ? item.labelEs : item.labelEn}</a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <a href="#">{t.successStories}</a>
            </li>
            <li>
              <a href="#">{t.testimonials}</a>
            </li>
            <li>
              <a href="#">{t.blog}</a>
            </li>
            <li>
              <a href="#">{t.aboutUs}</a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="btn btn-primary nav-cta"
              >
                {t.contact}
              </a>
            </li>
            <li className="lang-switch" aria-label="Language selector">
              <button
                className={`lang-btn ${lang === 'es' ? 'active' : ''}`}
                onClick={() => toggleLang('es')}
                aria-label="Switch to Spanish"
              >
                <span aria-hidden="true">ES</span>
              </button>
              <button
                className={`lang-btn ${lang === 'en' ? 'active' : ''}`}
                onClick={() => toggleLang('en')}
                aria-label="Switch to English"
              >
                <span aria-hidden="true">EN</span>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
