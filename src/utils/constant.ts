import sogeti from "../assets/company/sogeti.png";
import docdoku from "../assets/company/docdoku.png";

import backend from "../assets/back-end.png";
import cloudcomputing from "../assets/cloud-computing.png";
import contenuweb from "../assets/contenu-web.png";
import mobile from "../assets/developpement-dapplications.png";

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
      "Migration d’une application React 15 à 16 permettant une évolution plus rapide du développement.",
      "Réduction de la latence d’une application  via Redux  sur un front-end React.",
      "Augmentation de la couverture de test de 50% ( unit / e2e ) produisant une réduction de la régression par 2.",
      "Développer et déployer un tableau de bord en ReactJs from scratch pour permettre le suivis de différentes metric.",
      "Développer un micro-service critique en JavaEE/Quarkus pour permettre à Popafood d’avoir sa propre pipeline de livraison via Stuart avec une intégration Kafka.",
      "Mise en place d’une CI/CD Gitlab pour permettre la livraison continue d’une application React Native sur les stores permettent une intégration 100% fiable et automatisé.",
      "Mise en place d’un système de gestion d’une flotte d’appareille Android propriétaire via Google Cloud platform.",
      "Création d'un front-end Reactjs pour configurer plus facilement une flotte d'appareils.",
      "Intégration d'une solution de paiement avec une application React Native.",
    ],
  },
  {
    title: `Front-End React Dev`,
    company_name: "Sogeti - CCAS",
    icon: sogeti,
    iconBg: "#EEEEEE",
    date: `Jan 2023 - Nov 2023`,
    points: [
      "Développer un front React / Redux from scratch pour permettre une transition vers une nouvelle version.",
      "Définition d’une stratégie de test contre la régression.",
      "Encadrer et aider les développeurs plus juniors à monter en compétence sur la partie Front-end.",
      "Comprendre, restituer & améliorer un besoin existant vers une nouvelle solution.",
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
      "Création d’un back-end Node en Nestjs pour permettre la collection de métriques.",
      "Écriture test unitaire Front-end/ Back-End.",
      "Accompagnement de développeurs juniors sur la montée en compétence.",
    ],
  },
];

export const services = [
  {
    title: "Front end Developer",
    icon: contenuweb,
    content: ["React", "Typescript", "JavaScript", "Remix", "Nextjs"],
  },
  {
    title: "Back end Developer",
    icon: mobile,
    content: ["Nestjs", "Java", "Kafka", "PostgreSQL", "MongoDB"],
  },
  {
    title: "Mobile Developer",
    icon: backend,
    content: ["React Native", "Expo", "Kotlin", "Xcode", "Android Studio"],
  },
  {
    title: "DevOps Cloud",
    content: ["AWS", "GCP", "Azure", "Docker", "Jenkins", "GitLab CI/CD"],
    icon: cloudcomputing,
  },
];

export const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.imgur.com/1O7h3dV.png",
    source_code_link: "https://github.com/",
  },
];
export const navLinks = [
  {
    id: "about",
    title: "Introduction",
  },
  { id: "skill", title: "Compétences" },
  /*   {
    id: "work",
    title: "Projets",
  }, */
  {
    id: "contact",
    title: "Contact",
  },
];
