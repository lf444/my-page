import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
/* import { motion } from "framer-motion"; */
import "react-vertical-timeline-component/style.min.css";

import { experiences, ExperienceType } from "../utils/constant";
import SectionWrapper from "./SectionWrapper";
import { motion } from "framer-motion";

const ExperienceCard = ({ experience }: { experience: ExperienceType }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#EEEEEE",
        color: "#2D3142",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #798478" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg, color: "red" }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-[24px] font-bold">{experience.title}</h3>
        <p className="text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <div className="sm:pb-16 pb-10">
      <motion.div>
        <h2
          className={`font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center`}
        >
          Experience pro
        </h2>
      </motion.div>

      <div className="mt-4 flex flex-col">
        <VerticalTimeline lineColor="#86BBD8">
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "experience");
