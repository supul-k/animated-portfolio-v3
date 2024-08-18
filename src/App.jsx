import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";

function App() {

  return (
    <>
      <div>
        <Cursor />
        <section id="HomePage">
          <Navbar />
          <Hero />
        </section>
        <section id="Parallax1">
          <Parallax type="services" />
        </section>
        <section id="Services">
          <Services />
        </section>
        <section id="Parallax2">
          <Parallax type="portfolio" />
        </section>
        {/* <Portfolio /> */}
        {/* <section id="Contact">
          <Contact />
        </section> */}
        {/* <section id="About">Portfolio2</section> */}
      </div>
    </>
  )
}

export default App
