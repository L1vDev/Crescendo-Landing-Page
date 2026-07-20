import { LanguageProvider } from './LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import ClientLogos from './components/ClientLogos'
import Reviews from './components/Reviews'
import Comparison from './components/Comparison'
import Process from './components/Process'
import FAQ from './components/FAQ'
import CTAFinal from './components/CTAFinal'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AccessibilityWidget from './components/AccessibilityWidget'
import FloatingButtons from './components/FloatingButtons'
import ChatWidget from './components/ChatWidget'

export default function App() {
  return (
    <LanguageProvider>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyUs />
        <ClientLogos />
        <Reviews />
        <Comparison />
        <Process />
        <FAQ />
        <CTAFinal />
        <Contact />
      </main>
      <Footer />
      <AccessibilityWidget />
      <FloatingButtons />
      <ChatWidget />
    </LanguageProvider>
  )
}
