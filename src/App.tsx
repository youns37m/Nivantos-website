import Header from "./components/Header"
import Hero from "./components/Hero"
import LogoBar from "./components/LogoBar"
import Stats from "./components/Stats"
import Services from "./components/Services"
import Demonstrations from "./components/Demonstrations"
import AgentDemo from "./components/AgentDemo"
import Pricing from "./components/Pricing"
import ROICalculator from "./components/ROICalculator"
import Testimonials from "./components/Testimonials"
import WhyChooseUs from "./components/WhyChooseUs"
import Process from "./components/Process"
import AutomationExamples from "./components/AutomationExamples"
import Founder from "./components/Founder"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import LoadingScreen from "./components/ui/LoadingScreen"

export default function App() {
  return (
    <div className="noise min-h-screen bg-nivantos-black font-sans text-white antialiased">
      <LoadingScreen />
      <Header />
      <main>
        <Hero />
        <Stats />
        <LogoBar />
        <Services />
        <Demonstrations />
        <AgentDemo />
        <Pricing />
        <ROICalculator />
        <Testimonials />
        <WhyChooseUs />
        <Process />
        <AutomationExamples />
        <Founder />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
