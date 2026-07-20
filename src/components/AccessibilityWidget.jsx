import { useState, useCallback } from 'react'
import { useLanguage } from '../LanguageContext'
import translations from '../translations'

export default function AccessibilityWidget() {
  const { lang } = useLanguage()
  const t = translations[lang].accessibility
  const [panelOpen, setPanelOpen] = useState(false)

  const applyOption = useCallback((id) => {
    const body = document.body
    const html = document.documentElement

    switch (id) {
      case 'increaseFontSize':
        if (html.classList.contains('font-size-largest')) {
          html.classList.remove('font-size-large', 'font-size-larger', 'font-size-largest')
        } else if (html.classList.contains('font-size-larger')) {
          html.classList.remove('font-size-larger')
          html.classList.add('font-size-largest')
        } else if (html.classList.contains('font-size-large')) {
          html.classList.remove('font-size-large')
          html.classList.add('font-size-larger')
        } else {
          html.classList.add('font-size-large')
        }
        break
      case 'decreaseFontSize':
        if (html.classList.contains('font-size-largest')) {
          html.classList.remove('font-size-largest')
          html.classList.add('font-size-larger')
        } else if (html.classList.contains('font-size-larger')) {
          html.classList.remove('font-size-larger')
          html.classList.add('font-size-large')
        } else if (html.classList.contains('font-size-large')) {
          html.classList.remove('font-size-large')
        }
        break
      case 'highContrast':
        body.classList.toggle('high-contrast')
        break
      case 'grayscale':
        body.classList.toggle('grayscale')
        break
      case 'negativeContrast':
        body.classList.toggle('negative-contrast')
        break
      case 'underlineLinks':
        body.classList.toggle('underline-links')
        break
      case 'readableFont':
        body.classList.toggle('readable-font')
        break
      case 'resetAccessibility':
        body.classList.remove('high-contrast', 'grayscale', 'negative-contrast', 'underline-links', 'readable-font')
        html.classList.remove('font-size-large', 'font-size-larger', 'font-size-largest')
        break
      default:
        break
    }
  }, [])

  const options = [
    { id: 'increaseFontSize', icon: 'fa-plus-circle', label: t.increaseText },
    { id: 'decreaseFontSize', icon: 'fa-minus-circle', label: t.decreaseText },
    { id: 'highContrast', icon: 'fa-adjust', label: t.highContrast },
    { id: 'grayscale', icon: 'fa-palette', label: t.grayscale },
    { id: 'negativeContrast', icon: 'fa-moon', label: t.negativeContrast },
    { id: 'underlineLinks', icon: 'fa-link', label: t.underlineLinks },
    { id: 'readableFont', icon: 'fa-font', label: t.readableFont },
    { id: 'resetAccessibility', icon: 'fa-redo', label: t.resetAll },
  ]

  return (
    <div className="accessibility-widget">
      <button
        className="accessibility-btn"
        onClick={() => setPanelOpen(!panelOpen)}
        aria-label={t.ariaLabel}
      >
        <i className="fas fa-universal-access"></i>
      </button>
      <div className={`accessibility-panel ${panelOpen ? 'active' : ''}`}>
        <div className="accessibility-header">
          <h3>{t.title}</h3>
          <button
            className="close-panel"
            onClick={() => setPanelOpen(false)}
            aria-label={t.closePanel}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
        <div className="accessibility-options">
          {options.map((opt) => (
            <button
              key={opt.id}
              className="accessibility-option"
              onClick={() => applyOption(opt.id)}
              aria-label={opt.label}
            >
              <i className={`fas ${opt.icon}`}></i>
              <span>{opt.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
