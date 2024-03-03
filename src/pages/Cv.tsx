import About from "../components/About";
import Experience from "../components/Experience";
import GoBackButton from "../components/GoBackButton";
import ScrollToTop from "../components/ScrollToTop";
import Skill from "../components/Skil";

const Cv = () => {
  return (
    <div>
      <GoBackButton />
      <ScrollToTop />
      <About />
      <Experience />
      <Skill />
    </div>
  );
};

export default Cv;
