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
  tripguide,
  edict,
  vrukshthon,
  diya,
  // threejs,
  ishka,
  pal,

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
      "Building ‘Paintlib’ taught me how important seamless UI/UX and backend integration are for real-world e-commerce platforms. From user login to final checkout, each step matters.",
    name: "Lokesh Khankari",
    designation: "Intern",
    company: "Proser Digital Solutions",
  },
  {
    testimonial:
      "Handling multiple freelance clients helped me master time management, communication, and scalable coding practices. Here's how I keep all my projects in sync.",
    name: "Lokesh Khankari",
    designation: "Freelance Developer",
    company: "Freelancer"
  },
  {
    testimonial:
      "While working on Edict, I discovered how automating document flows can dramatically improve efficiency for professionals like CAs and consultants. Automation is the future",
    name: "Lokesh Khankari",
    designation: "Ass. Software Developer",
    company: "Proser Digital Solutions",
  },
  {
    testimonial:
      "Building Nealife was a unique experience where psychology met technology, project taught me the value of user-centered design and performance optimization.",
    name: "Lokesh Khankari",
    designation: "Ass. Software Developer",
    company: "Proser Digital Solutions",
  },
];

const projects: TProject[] = [
  {
    name: "Nealife",
    description:
      "A scalable Angular app offering psychometric and career assessments with API integration, multilingual support, and a responsive layout tailored for a broad and diverse user base.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "CSS 3", color: "green-text-gradient" },
      { name: "Bootstrap", color: "pink-text-gradient" },
    ],
    image: carrent,
    sourceCodeLink: "https://nealife.in/",
    websiteLink: "https://nealife.in/",
  },
  {
    name: "Pal Property",
    description:
      "An Angular-based real estate platform with dynamic listings, backend API integration, and responsive UI, enabling users to browse, list, and manage properties effortlessly and efficiently.",
    tags: [
      { name: "Angular", color: "blue-text-gradient" },
      { name: "NodeJs", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
    ],
    image: pal,
    sourceCodeLink: "",
    websiteLink: "https://nealife.in/",
  },
  {
    name: "Edict",
    description:
      "A document management tool for professionals like CAs, enabling easy document collection, automated reminders, deadline tracking, and seamless client communication for improved productivity.",
    tags: [
      { name: "Node", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Postman", color: "pink-text-gradient" },
    ],
    image: edict,
    sourceCodeLink: "https://edictapp.com/",
    websiteLink: "https://edictapp.com/",
  },
  {
    name: "Paintlib",
    description:
      "A Node-based e-commerce platform for buying and renting paint, offering user-friendly navigation, secure orders, and diverse product categories for residential and commercial use.",
    tags: [
      { name: "Node", color: "blue-text-gradient" },
      { name: "MongoDB", color: "green-text-gradient" },
      { name: "Postman", color: "pink-text-gradient" },
    ],
    image: tripguide,
    sourceCodeLink: "https://paintlib.in/",
    websiteLink: "https://paintlib.in/",
  },
  {
    name: "Vrukshathon",
    description:
      "A PHP-powered event site promoting eco-conscious marathons and green drives, encouraging fitness, sustainability, and community awareness through partnerships with local organizations in Pune.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "PhpMyAdmin", color: "green-text-gradient" },
      { name: "Hostinger", color: "pink-text-gradient" },
    ],
    image: vrukshthon,
    sourceCodeLink: "https://www.vrukshathon.com/",
    websiteLink: "https://www.vrukshathon.com/",
  },
  {
    name: "Ishka Farms",
    description:
      "A e-commerce site featuring caper-based organic products, combining traditional practices with artisanal quality across categories like caperberries, spice mixes, and salt-preserved flowers.",
    tags: [
      { name: "Wordpress", color: "blue-text-gradient" },
      { name: "EcommerceWebsite", color: "green-text-gradient" },
      { name: "Hostinger", color: "pink-text-gradient" },
    ],
    image: ishka,
    sourceCodeLink: "https://ishkafarms.com/",
    websiteLink: "https://ishkafarms.com/",
  },
  {
    name: "Diya Fresh (Admin Panel)",
    description:
      "An admin dashboard for Diya Fresh that streamlines inventory, user management, and order tracking for a farm-to-home grocery delivery service of fresh and organic produce.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "AdminPanel", color: "green-text-gradient" },
      { name: "Hostinger", color: "pink-text-gradient" },
    ],
    image: diya,
    sourceCodeLink: "https://admin.diyaafresh.com/",
    websiteLink: "https://admin.diyaafresh.com/",
  },
];


export { services, technologies, experiences, testimonials, projects };
