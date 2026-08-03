import Header from "./components/Header"
import Hero from "./components/Hero"
import LogoBar from "./components/LogoBar"
import Stats from "./components/Stats"
import Services from "./components/Services"
import WhyChooseUs from "./components/WhyChooseUs"
import Process from "./components/Process"
import Testimonials from "./components/Testimonials"
import FAQ from "./components/FAQ"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="noise min-h-screen bg-nivantos-black font-sans text-white antialiased">
      <Header />
      <main>
        <Hero />
        <LogoBar />
        <Stats />
        <Services />
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
