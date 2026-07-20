import { useLanguage } from '../LanguageContext'
import translations from '../translations'

export default function WhyUs() {
  const { lang } = useLanguage()
  const t = translations[lang].whyUs

  return (
    <section id="por-que" className="por-que">
      <div className="container">
        <div className="por-que-content">
          <div className="por-que-text">
            <h2>{t.title}</h2>
            <p>{t.subtitle}</p>

            <div className="por-que-items">
              {t.items.map((item) => (
                <div key={item.title} className="por-que-item">
                  <div className="item-icon">
                    <i className={`fas ${item.icon}`}></i>
                  </div>
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="por-que-image">
            <picture>
              <img
                src="/img/teamwork-1200.jpg"
                alt={t.imgAlt}
                className="por-que-img"
                width="600"
                height="400"
                loading="lazy"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  )
}
