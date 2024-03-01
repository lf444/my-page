import sogeti from "../assets/company/sogeti.png";
import docdoku from "../assets/company/docdoku.png";

export type ExperienceType = {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
};

export const experiences: ExperienceType[] = [
  {
    title: `Full-Stack React/ReactNative/Java Dev`,
    company_name: "DocDoku",
    icon: docdoku,
    iconBg: "#EEEEEE",
    date: `Mars 2021 - Octo 2022`,
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: `Front-End React.js Dev`,
    company_name: "Sogeti",
    icon: sogeti,
    iconBg: "#EEEEEE",
    date: `Jan 2023 - Nov 2023`,
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: `Full-Stack React/Node.js Dev`,
    company_name: "Sogeti",
    icon: sogeti,
    iconBg: "#EEEEEE",
    date: `Nov 2023 - Mar 2024`,
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
