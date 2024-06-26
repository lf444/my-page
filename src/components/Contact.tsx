import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

import { fadeIn } from "../utils/motion";

const Contact = () => {
  return (
    <>
      <motion.div>
        <p
          className={
            "sm:text-[18px] text-[14px] text-black uppercase tracking-wider pt-8"
          }
        >
          CONTACTEZ-MOI
        </p>

        <h2
          className={`text-black font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]`}
        >
          Contact
        </h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 ml-5 mb-8 text-black text-[17px] max-w-3xl leading-[30px]"
      >
        <ul className="list-disc underline pb-8">
          <li>
            <a href="https://twitter.com/wolfmefive" target="_blank">
              x, anciennement twitter
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
        </ul>
      </motion.p>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
