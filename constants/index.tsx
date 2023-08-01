import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  nextjs,
  graphql,
  storybook,
  crossover,
  bxld,
  gamcap,
  twitterClone,
  sts,
} from "@/public/assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
  {
    title: "NextJS Developer",
    icon: mobile,
  },
  {
    title: "Full Stack Engineer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Storybook",
    icon: storybook,
  },
  {
    name: "GraphQL",
    icon: graphql,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Crossover",
    icon: crossover,
    iconBg: "#383E56",
    date: "July 2021 - September 2021",
    points: [
      "Integral member of a dynamic software engineering team, adhering to agile development practices.",
      "Troubleshot and fixed bugs across multiple platforms, enhancing user experience on mobile apps and websites.",
    ],
  },
  {
    title: "Lead Developer",
    company_name: "Bxld Space",
    icon: bxld,
    iconBg: "#ff054c",
    date: "May 2022 - September 2022",
    points: [
      "Led the Unity game development process, ensuring all aspects were reviewed and refined.",
      "Pioneered the integration of Unity game with Blockchain technology, enabling advanced functionalities.",
      "Developed the company's landing page, ensuring intuitive navigation and user-friendly design.",
    ],
  },
  {
    title: "Lead Frontend Developer",
    company_name: "GamCap Labs",
    icon: gamcap,
    iconBg: "#000",
    date: "Jan 2023 - Present",
    points: [
      "Pioneer of frontend development for Polya, leading the creation of a user-friendly, AI-assisted crypto terminal for data analytics, on-chain transactions, and understanding Web3.",
      "Crafted an interactive dashboard providing users with numerous data visualization options, and integrated features such as wallet connection using wagmi, query builder, and token analyzer.",
      "Worked closely with the backend team to ensure the flawless integration of all functionalities.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Twitter Clone",
    description:
      "Web application developed with NextJs and TailwindCSS. Utilizes NextAuth for authentication, and Firebase for providers and database.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "violet-text-gradient",
      },
      {
        name: "firebase",
        color: "orange-text-gradient",
      },
    ],
    image: twitterClone,
    source_code_link: "https://github.com/hberkaykuran/twitter-clone",
  },
  {
    name: "StS Tier List",
    description:
      "Card tierlist of the popular rogue-like deck-building game Slay the Spire. Uses the StS-API I developed to get cards and results, and submit votes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "violet-text-gradient",
      },
      {
        name: "prisma",
        color: "orange-text-gradient",
      },
      {
        name: "planetscale",
        color: "pink-text-gradient",
      },
    ],
    image: sts,
    source_code_link: "https://github.com/hberkaykuran/sts-tierlist",
  },
];

export { services, technologies, experiences, testimonials, projects };
