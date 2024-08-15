import "./app.scss";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";

function App() {

  return (
    <>
      <div>
        <section id="HomePage">
          <Navbar />
          <Hero />
        </section>
        <section id="Services">Services</section>
        <section id="Portfolio">Portfolio</section>
        <section id="Contact">Portfolio1</section>
        <section id="About">Portfolio2</section>
      </div>
    </>
  )
}

export default App
