import { useState } from 'react'
import { useLanguage } from '../LanguageContext'
import translations from '../translations'

export default function FAQ() {
  const { lang } = useLanguage()
  const t = translations[lang].faq
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="faq">
      <div className="container">
        <div className="section-header">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="faq-items">
          {t.items.map((faq, i) => (
            <div
              key={i}
              className={`faq-item ${openIndex === i ? 'active' : ''}`}
            >
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span>{faq.q}</span>
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <p>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
