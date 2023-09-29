
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  git,
  brandeis,
  carrent,
  jobit,
  tripguide,
  tamid,
  nltk,
  matplotlib,
  numpy,
  pandas,
  java,
  python,
  junit,
} from "../assets";

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
  {
    id: "resume",
    title: "Resume",
  },
];

const services = [
  {
    title: "Head Teaching Assistant",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
  {
    title: "Director of Tech Consulting",
    icon: backend,
  },
  {
    title: "Data Science Intern",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Java",
    icon: java,
  },
  {
    name: "Python",
    icon: python,
  },
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
    name: "Pandas",
    icon: pandas,
  },
  {
    name: "JUnit",
    icon: junit,
  },
  {
    name: "Matplotlib",
    icon: matplotlib,
  },
  {
    name: "Numpy",
    icon: numpy,
  },
  {
    name: "NLTK",
    icon: nltk,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Teaching Assistant, Data Structures & Algorithms",
    company_name: "Michtom School of Computer Science, Brandeis University",
    icon: brandeis,
    iconBg: "#E6DEDD",
    date: "Aug 2023 – Present",
    points: [
      "Spearhead recitations for an audience of 100+ students, effectively teaching and reinforcing key concepts in classic data structures including linked lists, stacks, queues, trees, hash tables, and graphs",
      "Conduct regular office hours, serving as a key resource in elevating students’ comprehension of intricate sorting and fundamental graph algorithms such as depth-first search, breadth-first search, and single-source shortest paths",
      "Assess algorithms assignments for 120+ students weekly, providing specific feedback to improve modularity and coding efficiency, resulting in a 35% improvement in student performance throughout the semester"
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Graduate School of Arts and Sciences, Brandeis University",
    icon: brandeis,
    iconBg: "#E6DEDD",
    date: "May 2023 – Present",
    points: [
      "Engineer a Natural language processing model to process 2,300+ graduate applications, improving candidate analysis efficiency and accuracy by over 20%",
      "Develop a machine learning model from analyzing 6,400+ course sections, optimizing offerings for 5,400+ students, leading to a 50% reduction in administrative planning time and significant cost savings",
    ],
  },
  {
    title: "Head Teaching Assistant, Advanced Programming in Java",
    company_name: "Michtom School of Computer Science, Brandeis University",
    icon: brandeis,
    iconBg: "#E6DEDD",
    date: "Jul 2022 – Aug 2023",
    points: [
      "Taught 200+ students fundamentals of encapsulation, inheritance, polymorphism, abstraction, and algorithms",
      "Oversaw a team of 5 teaching assistants to hold weekly recitations and office hours to help students develop a deeper understanding of Object-Oriented Programming",
      "Devised a programming assignment that tests recursion and backtracking with the supporting grading JUnit tests",
    ],
  },
  {
    title: "Director of Tech Consulting",
    company_name: "TAMID Group",
    icon: tamid,
    iconBg: "#E6DEDD",
    date: "Jan 2023 – Present",
    points: [
      "Lead a team of 19 student engineers to provide full stack and data analytics development for 2 Israeli start-up companies: InBe and Weelrn",
      "Direct the end-to-end process of client-project matching using Agile principles to ensure flexible project scoping and adaptive client expectation negotiations, ensuring optimal alignment of resources and successful project outcomes",
      "Mentor a group of 25 junior developers, providing guidance on coding best practices, project management, and professional development",
      "Uphold code quality standards by rigorously reviewing and testing over 150 commits, ensuring optimal functionality and adherence to best practices, resulting in a 30% decrease in post-deployment bugs"
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
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
