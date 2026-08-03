import Header from "./components/Header"
import Hero from "./components/Hero"
import LogoBar from "./components/LogoBar"
import Stats from "./components/Stats"
import AgentDemo from "./components/AgentDemo"
import HowItWorks from "./components/HowItWorks"
import Services from "./components/Services"
import UseCases from "./components/UseCases"
import ROICalculator from "./components/ROICalculator"
import WhyChooseUs from "./components/WhyChooseUs"
import Process from "./components/Process"
import Testimonials from "./components/Testimonials"
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
        <LogoBar />
        <Stats />
        <AgentDemo />
        <HowItWorks />
        <Services />
        <UseCases />
        <ROICalculator />
        <WhyChooseUs />
        <Process />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
