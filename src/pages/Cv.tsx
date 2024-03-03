import About from "../components/About";
import Experience from "../components/Experience";
import GoHomeButton from "../components/GoHomeButton";
import ScrollToTop from "../components/ScrollToTop";
import Skill from "../components/Skil";

const Cv = () => {
  return (
    <div>
      <GoHomeButton />
      <ScrollToTop />
      <About />
      <Experience />
      <Skill />
    </div>
  );
};

export default Cv;
