import shopify from "../assets/company/shopify.png";
import tesla from "../assets/company/tesla.png";
import starbucks from "../assets/company/starbucks.png";
import { t } from "i18next";

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
    title: `Full-Stack ${t("Developer")}`,
    company_name: "DocDoku",
    icon: starbucks,
    iconBg: "#EEEEEE",
    date: `${t("Month.March")} 2021 - ${t("Month.October")} 2022`,
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: `Front-End ${t("Developer")}`,
    company_name: "Sogeti",
    icon: tesla,
    iconBg: "#EEEEEE",
    date: `${t("Month.January")} 2023 - ${t("Month.November")} 2023`,
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: `Full-Stack ${t("Developer")}`,
    company_name: "Sogeti",
    icon: shopify,
    iconBg: "#EEEEEE",
    date: `${t("Month.November")} 2023 - ${t("Month.March")} 2024`,
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];
