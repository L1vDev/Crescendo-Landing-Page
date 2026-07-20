import { useLanguage } from '../LanguageContext'
import translations from '../translations'

export default function Footer() {
  const { lang } = useLanguage()
  const t = translations[lang].footer
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-map-reviews">
          <div className="footer-map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3589.898209878467!2d-80.28175932304966!3d25.87282737728236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa5c53e4ed82b7e89%3A0xdc07092a2c951f28!2sCrescendo%20Digital%20Marketing%20Agency!5e0!3m2!1ses-419!2suk!4v1777396792241!5m2!1ses-419!2suk"
              width="600"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t.mapTitle}
            ></iframe>
          </div>
          <div className="footer-reviews-container">
            <iframe
              className="lc_reviews_widget"
              src="https://reputationhub.site/reputation/widgets/review_widget/sPv1iOp0xhXgwRcQ8cQq"
              frameBorder="0"
              scrolling="no"
              style={{ minWidth: '100%', width: '100%' }}
              title="Client reviews"
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <div className="footer-content">
          <div className="footer-column">
            <h4>{t.servicesTitle}</h4>
            <ul>
              <li><a href="#">{t.servicesNav[0]}</a></li>
              <li><a href="#">{t.servicesNav[1]}</a></li>
              <li><a href="#">{t.servicesNav[2]}</a></li>
              <li><a href="#">{t.servicesNav[3]}</a></li>
              <li><a href="#">{t.servicesNav[4]}</a></li>
              <li><a href="#">{t.servicesNav[5]}</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>{t.companyTitle}</h4>
            <ul>
              <li><a href="#">{t.company[0]}</a></li>
              <li><a href="#">{t.company[1]}</a></li>
              <li><a href="#">{t.company[2]}</a></li>
              <li><a href="#">{t.company[3]}</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>{t.legalTitle}</h4>
            <ul>
              <li><a href="#">{t.legal[0]}</a></li>
              <li><a href="#">{t.legal[1]}</a></li>
              <li><a href="#">{t.legal[2]}</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>{t.contactTitle}</h4>
            <ul>
              <li><a href="tel:+17867556238">(786) 755-6238</a></li>
              <li><a href="mailto:crescendomarketingdigital@gmail.com">crescendomarketingdigital@gmail.com</a></li>
              <li>{t.location}</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; {currentYear} Crescendo Digital Marketing. {t.rights}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
