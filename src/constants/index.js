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
  nextJs,
  redux,
  tailwind,
  angular,
  nodejs,
  mongodb,
  java,
  mysql,
  git,
  crmnext,
  nickelfox,
  newgen,
  skillrisers,
  proximus,
  aptihealthWeb,
  aptihealthApp,
  zealWeb,
  zealApp,
  rollWeb,
  rollApp,
  linkedIn,
  github,
  leetcode,
  gfg,
} from "../assets";

const navigationPaths = {
  home: "/",
  about: "about",
  work: "work",
  contact: "contact",
};

export const navLinks = [
  {
    id: navigationPaths.about,
    title: "About",
  },
  {
    id: navigationPaths.work,
    title: "Work",
  },
  {
    id: navigationPaths.contact,
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Development",
    icon: web,
  },
  {
    title: "C++ Programming",
    icon: backend,
  },
  {
    title: "Problem Solving",
    icon: mobile,
  },
  {
    title: "Project Building",
    icon: creator,
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
  {
    name: "React JS",
    icon: reactjs,
  },
  // {
  //   name: "Next JS",
  //   icon: nextJs,
  // },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  // {
  //   name: "Angular",
  //   icon: angular,
  // },
  // {
  //   name: "Node JS",
  //   icon: nodejs,
  // },
  // {
  //   name: "MongoDB",
  //   icon: mongodb,
  // },
  // {
  //   name: "Java",
  //   icon: java,
  // },
  {
    name: "MySQL",
    icon: mysql,
  },
  {
    name: "Git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Freeelancer",
    company_name: "Swadha Organics",
    company_website: "https://swadha-organics.netlify.app/",
    icon: crmnext,
    iconBg: "#E6DEDD",
    date: "April 2025",
    points: [
      "Designed and developed a responsive frontend prototype using React.js, Bootstrap, and CSS animations.",
      "Collaborated closely with the founders to build the UI for a pitch presentation during a startup hackathon.",
      "Helped the team secure ₹10 Lakh in funding through an MVP delivered within tight deadlines.",
      "Implemented smooth UI/UX flow, reusable components, and clean design consistent with brand identity.",
    ],
  },
  {
    title: "Content Editor Intern",
    company_name: "Icy Tales",
    company_website: "https://icytales.com/",
    icon: skillrisers, // Replace with actual icon variable if needed
    iconBg: "#D1E8FF",
    date: "Nov 2022 - Jan 2023",
    points: [
      "Edited and optimized 80+ articles for grammar, SEO, and readability on WordPress.",
      "Led a team of 10 content writing interns, ensuring consistent quality and timely submissions.",
      "Collaborated with the editorial team to maintain content guidelines and publishing standards.",
      "Improved overall article performance by refining structure, meta tags, and visual formatting.",
    ],
  },
  {
    title: "Leetcode Profile",
    company_name: "Leetcode",
    company_website: "https://leetcode.com/u/snehildwivedi03/",
    icon: leetcode, // Replace with actual icon variable if needed
    iconBg: "#D1E8FF",
    date: "Present",
    points: [
      "Solved 150+ LeetCode problems covering arrays, strings, and dynamic programming.",
      "Sharpened algorithmic thinking through daily challenges and consistent problem-solving.",
      "Applied refined DSA knowledge to enhance project efficiency and edge case handling.",
    ],
  },
  {
    title: "GeeksForGeeks Profile",
    company_name: "GeeksForGeeks",
    company_website: "https://leetcode.com/u/snehildwivedi03/",
    icon: gfg, // Replace with actual icon variable if needed
    iconBg: "#D1E8FF",
    date: "Present",
    points: [
      "Solved 300+ GeeksforGeeks problems spanning key topics like data structures, algorithms, and system design.",
      "Ranked 7th in institution leaderboard through consistent performance and problem-solving depth.",
      "Leveraged GFG practice to strengthen real-world coding skills and solution scalability",
    ],
  },
];

const projects = [
  {
    name: "SocialEcho",
    description:
      "Revolutionizing mental healthcare in New York State with a user-friendly platform for personalized therapy and progress tracking. Provides the digital gateway to comprehensive behavioral healthcare.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthWeb,
    hosted_link: "https://www.aptihealth.com/",
  },
  {
    name: "Aptihealth App",
    description:
      "Access top-notch mental healthcare anytime, anywhere in New York State with our innovative app. Track your progress, schedule appointments, and connect with expert therapists for personalized care.",
    tags: [
      {
        name: "react-native",
        color: "blue-text-gradient",
      },
      {
        name: "sendbird",
        color: "green-text-gradient",
      },
      {
        name: "twilio",
        color: "pink-text-gradient",
      },
    ],
    image: aptihealthApp,
    hosted_link: "https://apps.apple.com/us/app/aptihealth/id1477170874",
  },
  {
    name: "Javascript Portfolio",
    description:
      "The Zeal website elevates the experience of enjoying activities with trusted friends, fostering connections and making every interaction exciting.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: zealWeb,
    hosted_link: "https://getzeal.co/",
  },
];

const personalInfo = {
  name: "Snehil",
  fullName: "Snehil Dwivedi",
  email: "snehil323@gmail.com",
  role: "Software Developer",
  about: `I'm a skilled software developer with experience in JavaScript and C++, and expertise in frameworks like React.js and Three.js, along with strong command of HTML, CSS, Bootstrap, and Tailwind CSS. I'm a well-organized person who believes in planning before doing, which helps me write clean and efficient code. I’m a quick learner who enjoys constant learning and taking new challenges.`,
  projectsIntro: `Following projects showcases my skills and experience through
  real-world examples of my work. Each project is briefly described with
  live demos. It reflects my ability to solve complex problems, work
  with different technologies, and manage projects effectively.`,
};

const publicUrls = {
  resume:
    "https://drive.google.com/file/d/1vmiPiCLaCuqM0uuDcXQlAd8pY8yBDEOU/view?usp=sharing",
  socialProfiles: {
    linkedin: {
      title: "linkedin",
      link: "https://www.linkedin.com/in/snehil-dwivedi-/",
      icon: linkedIn,
    },
    github: {
      title: "github",
      link: "https://github.com/snehildwivedi03",
      icon: github,
    },
  },
};

export {
  services,
  technologies,
  experiences,
  projects,
  navigationPaths,
  personalInfo,
  publicUrls,
};
