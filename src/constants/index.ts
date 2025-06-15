import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  // figma,
  // docker,
  meta,
  starbucks,
  // tesla,
  // shopify,
  carrent,
  jobit,
  tripguide,
  // threejs,
} from "../assets";

export const navLinks: TNavLink[] = [
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

const services: TService[] = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Web Developer",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
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
    name: "Angular",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  // {
  //   name: "Three JS",
  //   icon: threejs,
  // },
  {
    name: "git",
    icon: git,
  },
  // {
  //   name: "figma",
  //   icon: figma,
  // },
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences: TExperience[] = [
{
  title: "Software Developer Intern",
  companyName: "Proser Digital Solutions",
  icon: starbucks,
  iconBg: "#383E56",
  date: "December 2024 – Present",
  points: [
    "Developed and optimized backend systems using Node.js, Express.js, and MongoDB for efficient API integration and data handling.",
    "Built responsive frontend modules using Angular.js and React.js, enhancing user experience and UI performance.",
    "Managed AWS infrastructure including EC2, S3, and Lambda for scalable cloud deployment.",
    "Collaborated in Agile teams using tools like Jira, Bitbucket, and Postman to deliver high-quality software solutions."
  ],
},

  // {
  //   title: "React Native Developer",
  //   companyName: "Tesla",
  //   icon: tesla,
  //   iconBg: "#E6DEDD",
  //   date: "Jan 2021 - Feb 2022",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  // {
  //   title: "Web Developer",
  //   companyName: "Shopify",
  //   icon: shopify,
  //   iconBg: "#383E56",
  //   date: "Jan 2022 - Jan 2023",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
{
  title: "Full Stack Developer",
  companyName: "Freelancer",
  icon: meta, // Replace with the actual icon reference if available
  iconBg: "#E6DEDD",
  date: "April 2023 – Present",
  points: [
    "Designed and developed full-stack web applications using Node.js, Express.js, React.js, and Angular.js.",
    "Completed dynamic freelance projects such as Paintlib, Edict App, NeaLife, MyVisCards, and Wanderlog.",
    "Built PHP-based platforms like Vrukshathon (with admin), Vkasa, and Cotation Manager, optimizing backend workflows.",
    "Developed static websites using HTML, CSS, and JavaScript including Construction and Buidling Wesbites.",
    "Delivered customized WordPress sites such as Borcells Solar and Ecommerce, focusing on SEO and responsiveness.",
    "Integrated RESTful APIs, managed databases using MongoDB and MySQL, and deployed projects to AWS and other cloud platforms.",
  ],
}
];

const testimonials: TTestimonial[] = [
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

const projects: TProject[] = [
  {
    name: "Nealife",
    description:
      "A feature-rich Angular web app for healthcare solutions with dynamic API rendering, responsive layout, and scalable component architecture.",
    tags: [
      {
        name: "Angular",
        color: "blue-text-gradient",
      },
      {
        name: "CSS 3",
        color: "green-text-gradient",
      },
      {
        name: "Bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    sourceCodeLink: "", 
    websiteLink: "https://nealife.in/" ,
  },
  {
    name: "Edict",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "Node",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Postman",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    sourceCodeLink: "https://github.com/",
    websiteLink: "",
  },
  {
    name: "Paintlib",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Node",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
      {
        name: "Postman",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "https://github.com/",
    websiteLink: "",
  },
    {
    name: "Vrukshathon",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Html+CSS+PHP",
        color: "blue-text-gradient",
      },
      {
        name: "SQL+PhpMyAdmin",
        color: "green-text-gradient",
      },
      {
        name: "Hostinger",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "",
    websiteLink: "https://www.vrukshathon.com/",
  },
    {
    name: "Ishika Farms",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "Wordpress",
        color: "blue-text-gradient",
      },
      {
        name: "EcommerceWebsite",
        color: "green-text-gradient",
      },
      {
        name: "Hostinger",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "",
    websiteLink: "https://ishkafarms.com/",
  },
      {
    name: "Diya Fresh",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "PHP",
        color: "blue-text-gradient",
      },
      {
        name: "Admin-Panel",
        color: "green-text-gradient",
      },
      {
        name: "Hostinger",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    sourceCodeLink: "",
    websiteLink: "https://diyaafresh.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
