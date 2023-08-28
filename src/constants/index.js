import {
    web,
    javascript,
    Bootstrap,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    threejs,
    MetaVerse,
    BudgetApp,
    TshirtCustomizer,
    ChimneyConcepts,
    Nucamp,
    BFA,
    FilmCamera,
    Gaming,
    PicCam,
    PremierePro
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: reactjs,
    },
    {
      title: "Filmmaker",
      icon: PicCam,
    },
    {
      title: "Gaming Enthusiast",
      icon: Gaming,
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
      name: "Bootstrap",
      icon: Bootstrap,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
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
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "Premier Pro",
      icon: PremierePro,
    },
    
  ];
  
  const experiences = [
    {
      title: "Service Technician",
      company_name: "Chimney Concepts",
      icon: ChimneyConcepts,
      iconBg: "#E6DEDD",
      date: "Aug 2021 - Present",
      points: [
        "Diagnosed and resolved complex technical issues to ensure customer satisfaction ",
        "Leveraged technical knowledge to provide remote support, reducing on-site visits by 10 percent and increasing department efficiency",
        "Collaborated with other technicians to develop solutions to complex technical issues",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Nucamp Coding Bootcamp",
      company_name: "Nucamp",
      icon: Nucamp,
      iconBg: "#E6DEDD",
      date: "Mar 2021 - Sept.2023",
      points: [
        "Developing web applications using React.js and other related technologies.",
        "Collaborating with  other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Freelance Film",
      company_name: "Independent",
      icon: FilmCamera,
      iconBg: "#E6DEDD",
      date: "Jan 2018 - Mar 2020",
      points: [
        "PA for Family Feud: Helped keep the auditions that were held in Milwaukee run smoothly by coordinating with producers, directors, and other PA's",
        "Camera Operator: Along with operating the camera, I help stage the scene with props, lights, and blocking for a few Independent projects",
        "Video Editing: Using Adobe Cloud, I edited videos for KO3 Productions and several personal projects",
      ],
    },
    {
      title: "BFA- Film",
      company_name: "UW-Milwaukee",
      icon: BFA,
      iconBg: "#E6DEDD",
      date: "Sept. 2016 - Dec. 2019",
      points: [
        "Learned how to develop movies from preproduction to postproduction. ",
        "Collaborated with other creators in order to ensure that all stages of production went smoothly. From Auditions to Shoots to Editing.",
        "Learned how to shoot, process, and edit 16mm film",
        "Interned at Independent Studios as an Sound Editor and Mixer",
      ],
    },
  ];
  
  
  
  const projects = [
    {
      name: "MetaVerse",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "next.js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: MetaVerse,
      source_code_link: "https://github.com/Joe-Baldwin/MetaVerse",
      live_preview_link: "https://metaverse-three-topaz.vercel.app/"
    },
    {
      name: "Budget App",
      description:
        "A web-based application that enables users to create and keep track of budgets to take control of their finances",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "vite",
          color: "green-text-gradient",
        },
        {
          name: "React-Router",
          color: "pink-text-gradient",
        },
      ],
      image: BudgetApp,
      source_code_link: "https://github.com/Joe-Baldwin/BudgetApp",
      live_preview_link: "https://budget-app-sigma-lovat.vercel.app"
    },
    {
      name: "T-shirt Designer",
      description:
        "A web-based application that allows users to design a custom t-shirt using Three.js and Dalle to create the perfect design for their shirt",
      tags: [
        {
          name: "node.js",
          color: "blue-text-gradient",
        },
        {
          name: "Three.js",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: TshirtCustomizer,
      source_code_link: "https://github.com/Joe-Baldwin/TshirtCustomizer/tree/main",
      live_preview_link: "https://tshirt-customizer-henna.vercel.app"
    },
  ];
  
  export { services, technologies, experiences, projects };