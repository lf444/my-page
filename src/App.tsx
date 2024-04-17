import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";

import Skill from "./components/Skil";
import Works from "./components/Works";
import Contact from "./components/Contact";
import ScrollToTop from "./components/ScrollToTop";
function App() {
  return (
    <BrowserRouter>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <div className="pl-10 pt-10">
        <ScrollToTop />
        <About />
        <Experience />
        <Skill />
        <Works />
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
