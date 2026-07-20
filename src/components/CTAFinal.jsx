import { useLanguage } from '../LanguageContext'
import translations from '../translations'

export default function CTAFinal() {
  const { lang } = useLanguage()
  const t = translations[lang].cta

  const handleSmoothScroll = (e) => {
    e.preventDefault()
    const target = document.querySelector('#contacto')
    if (target) {
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' })
    }
  }

  return (
    <section className="cta-final">
      <video
        className="cta-video-bg"
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        poster={import.meta.env.BASE_URL + "img/hero.png"}
        aria-hidden="true"
      >
        <source src="https://www.pexels.com/download/video/3141208/" type="video/mp4" />
      </video>
      <div className="container">
        <h2>{t.title}</h2>
        <p>{t.subtitle}</p>
        <div className="cta-buttons">
          <a href="#contacto" onClick={handleSmoothScroll} className="btn btn-lg btn-primary">
            {t.ctaPrimary}
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener"
            className="btn btn-lg btn-secondary"
          >
            {t.ctaSecondary} <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </section>
  )
}
