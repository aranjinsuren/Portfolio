
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
    title: "Teaching Assistant, Advanced Programming Techniques in Java",
    company_name: "Michtom School of Computer Science, Brandeis University",
    icon: brandeis,
    iconBg: "#E6DEDD",
    date: "Jul 2022 - Present",
    points: [
      "Taught 250+ students fundamentals of encapsulation, inheritance, polymorphism, abstraction, and algorithms",
      "Provide weekly support on coding assignments through office hours",
    ],
  },
  {
    title: "Head Teaching Assistant, Advanced Programming Techniques in Java",
    company_name: "Michtom School of Computer Science, Brandeis University",
    icon: brandeis,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - May 2023",
    points: [
      "Led a team of 5 teaching assistants to hold weekly recitations and office hours to help students develop a deeper understanding of Object-oriented programming",
      "Devised a programming assignment that tests recursion and backtracking as well as its grading rubric",
      "Reviewed grading of 40+ programming assignments biweekly to ensure constructive feedback for students' growth",
      "Wrote midterm and final examinations to test fundamental understanding of OOP",
    ],
  },
  {
    title: "Director of Tech Consulting",
    company_name: "TAMID Group",
    icon: tamid,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Lead a team of 19 student engineers to provide full stack and data analytics development for 2 Israeli start-up companies: InBe and Weelrn",
      "Engineer clients’ products from the initial Minimum Viable Product (MVP) stage all the way to Minimum Marketable Feature (MMF) stage",
      "Ensure quality of 150+ commits through code reviews and testing",
      "Spearheading client-project matching, project scoping, and client expectation negotiations",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "Graduate School of Arts and Sciences, Brandeis University",
    icon: brandeis,
    iconBg: "#E6DEDD",
    date: "May 2023 - Present",
    points: [
      "Develop Natural language processing model in Python to filter, tokenize, part-of-speech tag, and lemmatize 2300+ graduate student applicants’ statements of purpose for analysis",
      "Analyze 6400+ course section enrollment data to build a predictive machine learning model on assisting the composition of course size and offerings for 5400+ students",
    ],
  },
  {
    title: "Incoming Teaching Assistant, Data Structures & Algorithms",
    company_name: "Michtom School of Computer Science, Brandeis University",
    icon: brandeis,
    iconBg: "#E6DEDD",
    date: "Aug 2023",
    points: [],
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
