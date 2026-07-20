import { useLanguage } from '../LanguageContext'
import translations from '../translations'

const mockReviews = [
  {
    name: 'Maria P.',
    business: 'Miami Dental Clinic',
    stars: 5,
    text: {
      en: 'Crescendo transformed our online presence. Our patient calls went from 15 to 45 per month after their local SEO strategy. Google Business Profile optimization was key to dominating search results in Miami.',
      es: 'Crescendo transformo nuestra presencia online. Nuestras llamadas de pacientes pasaron de 15 a 45 al mes despues de su estrategia SEO local. La optimizacion de Google Business Profile fue clave para dominar los resultados en Miami.',
    },
    time: '2 months ago',
  },
  {
    name: 'Robert D.',
    business: 'Downtown Law Firm',
    stars: 5,
    text: {
      en: 'They reduced our cost per qualified lead from $85 to $28 while maintaining case quality. Their Google Ads optimization and landing page strategy transformed our acquisition costs.',
      es: 'Redujeron nuestro costo por lead calificado de $85 a $28 manteniendo la calidad de casos. Su optimizacion de Google Ads y estrategia de landing pages transformo nuestros costos de adquisicion.',
    },
    time: '3 weeks ago',
  },
  {
    name: 'Carlos M.',
    business: 'Tech E-commerce',
    stars: 5,
    text: {
      en: 'Crescendo increased our organic traffic by 180% in 6 months. Their content strategy and link building positioned us as industry leaders.',
      es: 'Crescendo aumento nuestro trafico organico en un 180% en 6 meses. Su estrategia de contenido y link building nos posiciono como lideres del sector.',
    },
    time: '1 month ago',
  },
  {
    name: 'Ana L.',
    business: 'Restaurant Group',
    stars: 5,
    text: {
      en: 'Professional team that truly cares about results. Our reservations increased 3x since working with them. Highly recommended.',
      es: 'Equipo profesional que realmente se preocupa por los resultados. Nuestras reservas se triplicaron desde que trabajamos con ellos. Altamente recomendados.',
    },
    time: '6 weeks ago',
  },
]

export default function Reviews() {
  const { lang } = useLanguage()
  const t = translations[lang].reviews

  return (
    <section className="faq" aria-labelledby="reviews-title">
      <div className="container">
        <div className="section-header">
          <h2 id="reviews-title">{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[1000px] mx-auto">
          {mockReviews.map((review, i) => (
            <div
              key={i}
              className="bg-white border border-border rounded-md p-6 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-[0_6px_24px_rgba(245,184,42,0.1)]"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-white font-bold text-sm">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold text-dark text-sm">{review.name}</div>
                  <div className="text-gray text-xs">{review.business}</div>
                </div>
              </div>
              <div className="flex gap-0.5 mb-2">
                {Array.from({ length: review.stars }).map((_, j) => (
                  <i key={j} className="fas fa-star text-primary text-xs"></i>
                ))}
              </div>
              <p className="text-gray text-sm leading-relaxed mb-2">
                {review.text[lang]}
              </p>
              <div className="text-gray-light text-xs">{review.time}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
