import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { services } from "../utils/constant";
import { fadeIn } from "../utils/motion";
import { Tilt } from "react-tilt";
import ReactCardFlip from "react-card-flip";
import { useState } from "react";
import RadarChart from "./RadarChart";

const defaultOptions = {
  reverse: false, // reverse the tilt direction
  max: 35, // max tilt rotation (degrees)
  perspective: 1000, // Transform perspective, the lower the more extreme the tilt gets.
  scale: 1.1, // 2 = 200%, 1.5 = 150%, etc..
  speed: 1000, // Speed of the enter/exit transition
  transition: true, // Set a transition on enter/exit.
  axis: null, // What axis should be disabled. Can be X or Y.
  reset: true, // If the tilt effect has to be reset on exit.
  easing: "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const ServiceCard = ({
  index,
  title,
  icon,
  content,
}: {
  index: number;
  title: string;
  icon: string;
  content: string[];
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Tilt options={defaultOptions} className="w-5/12">
      <ReactCardFlip isFlipped={isFlipped}>
        <motion.div
          variants={fadeIn("right", "spring", index * 0.5, 0.75)}
          className="green-pink-gradient p-[1px] rounded-[20px] shadow-card white"
        >
          <div
            // @ts-expect-error wsh
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
            style={{ outline: "1px solid #000" }}
            onClick={() => {
              setIsFlipped((prev) => !prev);
            }}
          >
            <img
              src={icon}
              alt="web-development"
              className="w-16 h-16 object-contain color-white "
            />

            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
        <motion.div className="green-pink-gradient p-[1px] rounded-[20px] shadow-card  white">
          <div
            // @ts-expect-error wsh
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
            style={{ outline: "1px solid #000" }}
            onClick={() => {
              setIsFlipped((prev) => !prev);
            }}
          >
            <p className="text-white"> Technologie : </p>
            <h3 className="text-white text-[20px] font-bold text-center">
              {content.join(" ")}
            </h3>
          </div>
        </motion.div>
      </ReactCardFlip>
    </Tilt>
  );
};

const Skill = () => {
  return (
    <div className="sm:pb-16 pb-10">
      <motion.div>
        <p
          className={
            "sm:text-[18px] text-[14px] text-black uppercase tracking-wider pt-8 text-center"
          }
        >
          CE QUE JE SAIS FAIRE
        </p>
        <h2
          className={`font-black md:text-[50px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
        >
          Compétences
        </h2>
      </motion.div>
      <div className="mt-20 flex flex-wrap">
        <div className="flex w-3/6 row flex-row	gap-10 flex-wrap">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
        <div className="w-3/6">
          <RadarChart />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Skill, "skill");
