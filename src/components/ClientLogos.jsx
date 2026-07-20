import { useLanguage } from '../LanguageContext'
import translations from '../translations'

const icons = ['fa-building', 'fa-hospital', 'fa-utensils', 'fa-car', 'fa-hammer', 'fa-briefcase']

export default function ClientLogos() {
  const { lang } = useLanguage()
  const t = translations[lang].clientLogos

  return (
    <section className="clientes-logos-section">
      <div className="container">
        <div className="clientes-logos">
          <p>{t.title}</p>
          <div className="logos-grid">
            {icons.map((icon, i) => (
              <div key={i} className="logo-item">
                <i className={`fas ${icon}`}></i>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
