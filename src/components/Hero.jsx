import { useLanguage } from '../LanguageContext'
import translations from '../translations'

export default function Hero() {
  const { lang } = useLanguage()
  const t = translations[lang].hero

  const handleSmoothScroll = (e, href) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative bg-[#080f1e] overflow-hidden isolate">
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60 pointer-events-none"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={import.meta.env.BASE_URL + "img/hero.png"}
        aria-hidden="true"
      >
        <source src={import.meta.env.BASE_URL + "videos/hero.mp4"} type="video/mp4" />
      </video>
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background: `
            radial-gradient(ellipse at 15% 25%, rgba(245, 184, 42, 0.2), transparent 42%),
            radial-gradient(ellipse at 88% 72%, rgba(27, 138, 138, 0.25), transparent 44%),
            radial-gradient(ellipse at 55% 0%, rgba(26, 47, 94, 0.55), transparent 55%),
            linear-gradient(160deg, rgba(8, 15, 30, 0.72) 0%, rgba(16, 29, 59, 0.7) 45%, rgba(14, 42, 69, 0.72) 100%)
          `
        }}
      ></div>

      <div className="relative z-[2] text-white text-center px-5 py-[100px] md:py-[120px]">
        <div className="max-w-[900px] mx-auto">
          <span className="inline-flex items-center gap-2 px-3.5 py-2 rounded-pill border border-white/35 bg-white/10 text-white/90 text-xs font-semibold tracking-wider uppercase mb-[18px] backdrop-blur-sm">
            {t.eyebrow}
          </span>

          <h1 className="text-white mb-6 leading-tight font-extrabold bg-gradient-to-r from-white via-[#f9ce4f] to-[#fde68a] bg-clip-text text-transparent text-[clamp(2.4rem,5.5vw,4rem)]">
            {t.title}
          </h1>

          <p className="text-white/85 text-lg md:text-xl max-w-[580px] mx-auto mb-11 leading-relaxed font-normal">
            {t.subtitle}
          </p>

          <div className="flex gap-5 justify-center mb-7 flex-wrap">
            <a
              href="#contacto"
              onClick={(e) => handleSmoothScroll(e, '#contacto')}
              className="btn btn-lg bg-gradient-to-r from-[#fcd96a] via-primary to-primary-dark text-secondary font-bold shadow-[0_8px_32px_rgba(245,184,42,0.5)] hover:shadow-[0_12px_48px_rgba(245,184,42,0.65)] hover:-translate-y-1"
            >
              {t.ctaPrimary}
            </a>
            <a
              href="#servicios"
              onClick={(e) => handleSmoothScroll(e, '#servicios')}
              className="btn btn-lg bg-white/20 text-white border-white backdrop-blur-sm hover:bg-white hover:text-secondary"
            >
              {t.ctaSecondary}
            </a>
          </div>

          <div className="flex justify-center items-center flex-wrap gap-[18px] mb-7">
            {t.proof.map((item) => (
              <span
                key={item.text}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-pill border border-white/25 bg-white/8 text-white/90 text-sm font-medium"
              >
                <i className={`fas ${item.icon} text-[#fbd160]`}></i>
                {item.text}
              </span>
            ))}
          </div>
        </div>

        <div className="max-w-[900px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-4">
            {t.media.map((item) => (
              <figure
                key={item.caption}
                className="m-0 rounded-[16px] overflow-hidden border border-white/20 bg-white/8 shadow-xl"
              >
                <img
                  src={import.meta.env.BASE_URL + item.img}
                  alt={item.caption}
                  className="block w-full h-[130px] object-cover"
                  loading="eager"
                  decoding="async"
                />
                <figcaption className="text-white/90 text-sm font-semibold px-3 py-2.5 text-left">
                  {item.caption}
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-[1.7fr_1fr] gap-6 mt-8 items-stretch">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
              {t.stats.map((stat, i) => (
                <div
                  key={i}
                  className="relative bg-gradient-to-br from-white/12 to-white/4 border border-white/20 rounded-lg p-6 md:p-7 backdrop-blur-md shadow-[0_8px_32px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] overflow-hidden"
                >
                  <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/95 to-primary-light/25"></div>
                  <div
                    className="w-16 h-16 rounded-[16px] inline-flex items-center justify-center mx-auto mb-3.5 text-white text-2xl border shadow-[0_10px_24px_rgba(245,184,42,0.22)] transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${i === 0 ? 'rgba(245,184,42,0.32)' : i === 1 ? 'rgba(27,138,138,0.3)' : 'rgba(255,255,255,0.28)'}, ${i === 0 ? 'rgba(245,184,42,0.16)' : i === 1 ? 'rgba(27,138,138,0.14)' : 'rgba(255,255,255,0.1)'})`,
                      borderColor: i === 0 ? 'rgba(245,184,42,0.45)' : i === 1 ? 'rgba(27,138,138,0.5)' : 'rgba(255,255,255,0.55)',
                    }}
                  >
                    <i className={`fas ${stat.icon}`}></i>
                  </div>
                  <p className="text-white text-[0.96rem] font-semibold normal-case tracking-[0.01em] leading-normal m-0">
                    {stat.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="relative text-left bg-gradient-to-br from-white/14 to-white/5 border border-white/25 rounded-lg p-6 md:p-7 backdrop-blur-md shadow-[0_14px_36px_rgba(0,0,0,0.22)] overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary to-[#fcd96a]"></div>
              <h3 className="text-white text-lg mb-3.5 leading-snug">
                {t.auditCard.title}
              </h3>
              <ul className="list-none m-0 mb-4 p-0">
                {t.auditCard.items.map((text, i) => (
                  <li key={i} className="text-white/90 text-sm mb-2.5 leading-relaxed flex items-start gap-2.5">
                    <i className="fas fa-check text-[#fcd96a] mt-1"></i>
                    {text}
                  </li>
                ))}
              </ul>
              <a
                href="#contacto"
                onClick={(e) => handleSmoothScroll(e, '#contacto')}
                className="inline-flex items-center gap-2 text-white font-bold text-sm tracking-wide hover:text-[#fcd96a]"
              >
                {t.auditCard.link} <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-5">
            {t.results.map((result, i) => (
              <div
                key={i}
                className="flex items-center gap-3 bg-gradient-to-br from-white/14 to-white/5 border border-white/20 rounded-xl p-2.5 backdrop-blur-sm"
              >
                <img
                  src={import.meta.env.BASE_URL + result.img}
                  alt={result.strong}
                  className="w-[84px] h-[62px] rounded-xl object-cover border border-white/30"
                  loading="lazy"
                />
                <div>
                  <strong className="block text-white text-sm leading-tight">{result.strong}</strong>
                  <p className="m-0 text-white/80 text-xs leading-tight mt-1">{result.p}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
