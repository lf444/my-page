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
    title: `Full-Stack React/Java Dev`,
    company_name: "DocDoku - Popafood",
    icon: docdoku,
    iconBg: "#EEEEEE",
    date: `Mar 2021 - Oct 2022`,
    points: [
      "Développement d’un front-end en React / Redux tableau de bord from scratch.",
      "Évolution de L’IHM à l’aide de Figma et amélioration de l’expérience utilisateur.",
      "Mise en place d’une stratégie de test unitaire sur les différentes fonctions et de test d’interface sur les formulaires.",
      "Développement d’un back-end J2EE dédié à la livraison de commande.",
      "Développement d’une application React Native à destination d’un kiosque .",
      "Mise en place d’un déploiement continue à l’aide de GitLab CI/CD pour la mise en place de Bêta et de la production .",
    ],
  },
  {
    title: `Front-End React Dev`,
    company_name: "Sogeti - CCAS",
    icon: sogeti,
    iconBg: "#EEEEEE",
    date: `Jan 2023 - Nov 2023`,
    points: [
      "Développement d’un front React / Redux from scratch.",
      "Mise en place bonne pratique Front.",
      "Encadrer et aider les développeurs plus juniors à monter en compétence sur React.",
      "Mise en place d’une stratégie de test Front.",
      "Évolution d’application d’une solution existante.",
    ],
  },
  {
    title: `Full-Stack React/Node.js Dev`,
    company_name: "SogetiLabs - Toulouse Metropole",
    icon: sogeti,
    iconBg: "#EEEEEE",
    date: `Nov 2023 - Mar 2024`,
    points: [
      "Développement d’un Front React / Redux.",
      "Développement d'un Back-end Node en Nestjs.",
      "Écriture test unitaire Front-end/ Back-End.",
      "Accompagnement de développeurs juniors.",
    ],
  },
];

export const services = [
  {
    title: "FullStack Developer",
    /*     icon: web, */
  },
  {
    title: "Backend Develope",
    /*     icon: mobile, */
  },
  {
    title: "Cloud Architect",
    /*     icon: backend, */
  },
  {
    title: "DevOps",
    /*     icon: creator, */
  },
];
