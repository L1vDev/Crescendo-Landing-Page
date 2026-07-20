import { useLanguage } from '../LanguageContext'
import translations from '../translations'

export default function FloatingButtons() {
  const { lang } = useLanguage()
  const t = translations[lang].floatingButtons

  const buttons = [
    { icon: 'fa-google', href: '#', className: 'google', label: t.google },
    { icon: 'fa-instagram', href: '#', className: 'instagram', label: t.instagram },
    { icon: 'fa-facebook-f', href: '#', className: 'facebook', label: t.facebook },
    { icon: 'fa-whatsapp', href: '#', className: 'whatsapp', label: t.whatsapp },
  ]

  return (
    <div className="floating-buttons">
      {buttons.map((btn) => (
        <a
          key={btn.className}
          href={btn.href}
          target="_blank"
          rel="noopener"
          className={`floating-btn ${btn.className}`}
          title={btn.label}
          aria-label={btn.label}
        >
          <i className={`fab ${btn.icon}`}></i>
        </a>
      ))}
    </div>
  )
}
