import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";

function App() {

  return (
    <>
      <div>
        <section id="HomePage">
          <Navbar />
          <Hero />
        </section>
        <section id="Parallax1">
          <Parallax type="services" />
        </section>
        <section id="Services">
          Services
        </section>
        <section id="Parallax2">
          <Parallax type="portfolio" />
        </section>
        <section id="portfolio">
          Portfolio
        </section>
        <section id="Contact">Portfolio1</section>
        <section id="About">Portfolio2</section>
      </div>
    </>
  )
}

export default App
