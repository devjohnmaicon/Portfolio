import GlobalStyle from "./GlobalStyle";
import { ScrollingTopButton } from "./components/Buttons/ScrollingTopButton";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Home } from "./pages/home";
import Portfolio from "./pages/portfolio";
import { useState } from "react";

function App() {
  const [scroll, setScroll] = useState(null);

  window.addEventListener("scroll", () => setScroll(window.scrollY));

  return (
    <div className="App">
      <GlobalStyle />

      {/* ================= Header */}
      <Header scroll={scroll} />

      {/* <!-- ============ Home --> */}
      <Home />

      {/* <!-- =========== Sobre --> */}
      <About />

      {/* <!-- ===== Conhecimentos --> */}
      <Portfolio />

      {/* <!-- =============== Contato --> */}
      <Contact />

      {/* <!-- =============== TopButton --> */}
      {scroll > 560 && <ScrollingTopButton />}

      {/* <!-- =============== Footer --> */}
      <Footer />
    </div>
  );
}

export default App;
