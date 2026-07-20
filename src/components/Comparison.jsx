import { useLanguage } from '../LanguageContext'
import translations from '../translations'

export default function Comparison() {
  const { lang } = useLanguage()
  const t = translations[lang].comparison

  return (
    <section className="comparativa">
      <div className="container">
        <div className="section-header">
          <h2>{t.title}</h2>
          <p>{t.subtitle}</p>
        </div>

        <div className="comparison-commitment">
          <h3>{t.commitment.title}</h3>
          <p>{t.commitment.text}</p>
          <ul className="comparison-pillars">
            {t.commitment.pillars.map((pillar) => (
              <li key={pillar.text}>
                <i className={`fas ${pillar.icon}`}></i> {pillar.text}
              </li>
            ))}
          </ul>
        </div>

        <div className="comparison-table">
          <table className="comparison-simple">
            <thead>
              <tr>
                <th>{t.table.headers[0]}</th>
                <th>{t.table.headers[1]}</th>
              </tr>
            </thead>
            <tbody>
              {t.table.rows.map((row, i) => (
                <tr key={i}>
                  <td>{row.feature}</td>
                  <td>{row.detail}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
