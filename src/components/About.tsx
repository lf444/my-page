import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { fadeIn } from "../utils/motion";

const About = () => {
  return (
    <>
      <motion.div>
        <p
          className={
            "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider"
          }
        >
          Introduction
        </p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in TypeScript and
        JavaScript, and expertise in frameworks like React, Node.js, and
        Three.js. I'm a quick learner and collaborate closely with clients to
        create efficient, scalable, and user-friendly solutions that solve
        real-world problems. Let's work together to bring your ideas to life!
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, "about");
