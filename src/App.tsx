import { BrowserRouter } from "react-router-dom";
import About from "./components/About";
import Experience from "./components/Experience";
import Navbar from "./components/Navbar";

import Skill from "./components/Skil";
import Works from "./components/Works";
function App() {
  return (
    <BrowserRouter>
      <div className="pl-10 pt-5">
        {/*
 
        <li>
          <a href="https://twitter.com/wolfmefive" target="_blank">
            {t("Twitter")}
          </a>
        </li>
      
        <li>
          <a href="https://github.com/lf444" target="_blank">
            github
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/fabien-lartin" target="_blank">
            linkedin
          </a>
        </li>
    
        <li>lartin.fabien@gmail.com</li>
      */}
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
        </div>
        <About />
        <Experience />
        <Skill />
        <Works />
      </div>
    </BrowserRouter>
  );
}

export default App;
