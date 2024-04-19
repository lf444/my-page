import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { fadeIn } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div>
        <p
          className={
            "sm:text-[18px] text-[14px] text-black uppercase tracking-wider pt-8"
          }
        >
          Introduction
        </p>
        <h2
          className={`text-black font-black md:text-[38px] sm:text-[38px] xs:text-[40px] text-[30px]`}
        >
          Aperçu.
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-black text-[17px] max-w-3xl leading-[30px]"
      >
        Je suis un développeur compétent avec de l'expérience en TypeScript et
        JavaScript, et une expertise dans des frameworks tels que
        React.J'apprends rapidement et je collabore étroitement avec les clients
        pour créer des solutions efficaces, évolutives et conviviales qui
        résolvent des problèmes concrets.
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
