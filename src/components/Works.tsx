import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { fadeIn } from "../utils/motion";
import Tabs from "./Tabs";

const tabArray: { title: string; content: JSX.Element }[] = [
  { title: "Where2Eat", content: <>test 1 </> },
  { title: "PetClinic", content: <>test 2 </> },
  { title: "LifePlanner", content: <>test 3</> },
];

const Works = () => {
  return (
    <>
      <motion.div>
        <p
          className={`sm:text-[18px] text-[14px] text-black uppercase tracking-wider pt-6`}
        >
          Mes Projets
        </p>
        <h2
          className={`text-black font-black md:text-[50px] sm:text-[50px] xs:text-[40px] text-[30px]`}
        >
          Projets
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-black text-[17px] max-w-3xl leading-[30px]"
        >
          Les projets suivants mettent en valeur mes compétences et mon
          expérience au travers d'exemples concrets de mon travail.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap ">
        <Tabs tabs={tabArray} />
      </div>
    </>
  );
};

export default SectionWrapper(Works, "work");
