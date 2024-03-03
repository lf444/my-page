import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const Skill = () => {
  return (
    <div className="sm:pb-16 pb-10">
      <motion.div>
        <h2
          className={`font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
        >
          Compétences
        </h2>
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Skill, "skill");
