import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";

import Skill from "./components/Skil";
/* import Works from "./components/Works"; */
import Contact from "./components/Contact";

function App() {
  return (
    <BrowserRouter>
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
      </div>
      <div className="pl-10 pt-10">
        <About />
        <Experience />
        <Skill />
        {/*      <Works /> */}
        <Contact />
      </div>
    </BrowserRouter>
  );
}

export default App;
