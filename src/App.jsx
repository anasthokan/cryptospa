import { HashRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cursor from "./components/Cursor";

import Home from "./pages/Home";
import About from "./pages/About";
import Tokenomics from "./pages/Tokenomics";
import Roadmap from "./pages/Roadmap";
import FAQ from "./pages/FAQ";
import Footer from "./components/Footer";

export default function App() {
  return (
    <HashRouter>
      <Cursor />
      <Navbar />

      {/* CONTINUOUS CANVAS */}
      <main
        id="scroll-container"
        className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      >
        <section id="home" className="snap-start min-h-screen">
          <Home />
        </section>

        <section id="about" className="snap-start min-h-screen">
          <About />
        </section>

        <section id="tokenomics" className="snap-start min-h-screen">
          <Tokenomics />
        </section>

        <section id="roadmap" className="snap-start min-h-screen">
          <Roadmap />
        </section>

        <section id="faq" className="snap-start min-h-screen">
          <FAQ />
        </section>

        {/* ✅ FOOTER AS LAST SECTION */}
        <section id="footer" className="snap-start">
          <Footer />
        </section>
      </main>
    </HashRouter>
  );
}
