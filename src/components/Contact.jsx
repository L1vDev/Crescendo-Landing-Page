import { useLanguage } from '../LanguageContext'
import translations from '../translations'

export default function Contact() {
  const { lang } = useLanguage()
  const t = translations[lang].contact

  return (
    <section id="contacto" className="contacto">
      <div className="container">
        <div className="contacto-wrapper">
          <div className="contacto-info">
            <h2>{t.title}</h2>

            {t.items.map((item) => (
              <div key={item.label} className="info-item">
                <div className="info-icon">
                  <i className={`fas ${item.icon}`}></i>
                </div>
                <div>
                  <h4>{item.label}</h4>
                  {item.isLink ? (
                    <a href={item.href}>{item.value}</a>
                  ) : (
                    <p>{item.value}</p>
                  )}
                </div>
              </div>
            ))}

            <div className="social-links">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                title="Facebook"
                aria-label="Visit our Facebook page"
              >
                <i className="fab fa-facebook"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener"
                title="Instagram"
                aria-label="Visit our Instagram profile"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener"
                title="Google"
                aria-label="See our Google reviews"
              >
                <i className="fab fa-google"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener"
                title="WhatsApp"
                aria-label="Contact us on WhatsApp"
              >
                <i className="fab fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
