import About from "../components/About";
import Experience from "../components/Experience";
import GoBackButton from "../components/GoBackButton";
import ScrollToTop from "../components/ScrollToTop";

const Cv = () => {
  return (
    <div>
      <GoBackButton />
      <ScrollToTop />
      <About />
      <Experience />
    </div>
  );
};

export default Cv;
