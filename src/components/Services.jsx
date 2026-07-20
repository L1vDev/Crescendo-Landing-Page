import { useLanguage } from '../LanguageContext'
import translations from '../translations'

export default function Services() {
  const { lang } = useLanguage()
  const t = translations[lang].services

  return (
    <section id="servicios" className="py-[100px] px-5 bg-light w-full overflow-hidden">
      <div className="container">
        <div className="section-header">
          <h2 className="text-[clamp(1.8rem,3.5vw,2.75rem)]">
            {t.title}
          </h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {t.items.map((service) => (
            <div
              key={service.title}
              className={`card-hover-border bg-white rounded-lg p-10 shadow-card transition-all duration-[420ms] ease-out border border-border relative ${
                service.badge
                  ? 'border-primary/50 shadow-[0_8px_40px_rgba(245,184,42,0.2)]'
                  : ''
              } hover:-translate-y-2.5 hover:shadow-card-hover hover:border-primary/20`}
            >
              {service.badge && (
                <span className="absolute top-3.5 right-3.5 inline-block px-2.5 py-1.5 rounded-pill text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-[#f9ce4f] to-primary text-secondary shadow-[0_10px_18px_rgba(245,184,42,0.25)]">
                  <i className="fas fa-star mr-1"></i>
                  {service.badge}
                </span>
              )}

              <div
                className="w-16 h-16 rounded-md flex items-center justify-center text-white text-2xl mb-5 shadow-lg transition-all duration-[400ms] ease-out"
                style={{ background: service.gradient }}
              >
                <i className={`fas ${service.icon}`}></i>
              </div>

              <h3 className="mb-4 text-xl">{service.title}</h3>
              <p className="mb-6 text-gray text-sm leading-relaxed">{service.description}</p>

              <ul className="list-none mb-6">
                {service.features.map((feature) => (
                  <li
                    key={feature}
                    className="py-2 text-gray text-sm flex items-center gap-2.5 transition-all duration-300 cursor-pointer hover:text-secondary hover:translate-x-1"
                  >
                    <i className="fas fa-check text-success font-bold transition-all duration-300"></i>
                    {feature}
                  </li>
                ))}
              </ul>

              <a
                href={service.link}
                className="inline-flex items-center gap-2 text-primary font-semibold text-sm transition-all duration-300 hover:gap-3"
              >
                {service.linkText} <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
