import { useLanguage } from '../LanguageContext'
import translations from '../translations'

export default function Process() {
  const { lang } = useLanguage()
  const t = translations[lang].process

  const handleSmoothScroll = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contacto')
    if (target) {
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' })
    }
  }

  return (
    <section className="proceso">
      <div className="container">
        <div className="section-header">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="proceso-mascot-orbit" aria-hidden="true">
          <div className="proceso-mascot" role="presentation">
            <img
              src="/img/favicon.png"
              alt=""
              width="44"
              height="44"
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        <div className="proceso-steps">
          {t.steps.map((step, i) => (
            <div key={i} className="paso">
              <div className="paso-numero">
                <span>{step.number}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
              {step.link && (
                <a href="#contacto" onClick={handleSmoothScroll}>
                  {t.scheduleText} <i className="fas fa-phone"></i>
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
