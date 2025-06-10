export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] ",
    imgClassName: "w-full h-full ",
    titleClassName: "justify-end max-w-96 font-bold md:text-2xl",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start font-bold md:text-2xl",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start max-w-96 font-bold md:text-2xl",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 4,
    description: "Brief About Me",
    title: `I’m Emad Araban, a front-end developer with three years of experience in designing and implementing modern user interfaces. My learning journey has been self-taught, but I have also worked collaboratively in teams on various projects. I have deep expertise in React, Next.js, JavaScript, and TypeScript, and I’m passionate about building optimized and scalable user interfaces.
    
  I highly value clean code, user experience optimization, and solving technical challenges. Besides front-end development, I am also interested in becoming a full-stack developer and currently learning Python and backend development to expand my skill set. I’m always eager to explore new technologies and collaborate with dynamic teams.`,
    className: "lg:col-span-5 md:col-span-6  md:row-span-1",
    imgClassName: "",
    titleClassName: " font-normal md:text-2xl",
    img: "",
    spareImg: "",
  },

  {
    id: 5,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-6",
    imgClassName: "",
    titleClassName: "justify-start md:text-2xl  font-bold ",
    img: "",
    spareImg: "",
  },

  {
    id: 6,
    title: "Currently diving deeper into the technologies I know",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-4",
    imgClassName: "absolute right-0 bottom-0 md:w-86 w-60",
    titleClassName:
      "justify-center md:text-2xl md:justify-start lg:justify-center max-w-96 font-bold ",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },

  {
    id: 7,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2 h-full",
    imgClassName: "w-full absolute lg:-top-[16.2rem]",
    titleClassName:
      " justify-start md:max-w-full md:text-2xl  max-w-60   hidden md:flex  font-bold ",
    img: "/emad.png",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Developer at AdliKara",
    desc: `Developed and maintained user-facing features using modern frontend technologies.
  Built web-based platforms using React.js, Next.js, TypeScript, MUI, Chakra UI, Tailwind CSS, Hero UI, TanStack Query, Redux Toolkit, and more.`,
    className: "md:col-span-2",
    timeLine: "October 23, 2022 - June 26, 2024",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Self-Employed / Freelance Frontend Developer",
    desc: `Worked independently on frontend projects to strengthen practical skills and stay updated with modern technologies.
  Focused on learning and implementing best practices in React.js, Next.js, TypeScript, Redux Toolkit, Tailwind CSS, and more through hands-on projects and tutorials.`,
    timeLine: "October 2, 2024 - May 20, 2025",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
  // {
  //   id: 2,
  //   title: "Mobile App Dev - JSM Tech",
  //   desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp2.svg",
  // },
  // {
  //   id: 3,
  //   title: "Freelance App Dev Project",
  //   desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
  //   className: "md:col-span-2",
  //   thumbnail: "/exp3.svg",
  // },
];

export const projectData = [
  {
    id: "mystic-mountains",
    title: "Mystic Mountains",
    button: "Explore Component",
    cover_image: "/b1.png",
    description:
      "A breathtaking journey through the peaks of imagination. This project explores 3D terrain generation with advanced lighting techniques.",
    time_line: "January 2024 - March 2024",
    live_link: "https://mystic-mountains.vercel.app",
    details: {
      landing: {
        title: "landing-page",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. .",
        images: ["/videos/gold/Lgold.webm"],
      },
      auth: {
        title: "Authentication-page",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. .",
        images: [
          "/projectImages/above_sun.png",
          "/projectImages/above-moon.png",
          "/projectImages/ballonLight.png",
        ],
      },
      adminPanel: {
        title: "Admin-panel",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. .",
        images: ["/b1.png", "/jsm-logo.png", "/projectImages/ballonLight.png"],
      },
      userPanel: {
        title: "User-panel",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. .",
        images: [
          "/projectImages/balloon.png",
          "/projectImages/boat.png",
          "/projectImages/herobg.png",
        ],
      },
      receptionPanel: {
        title: "Reception-panel",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Egestas purus viverra accumsan in nisl nisi. Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque. In egestas erat imperdiet sed euismod nisi porta lorem mollis. Morbi tristique senectus et netus. .",
        images: [
          "/projectImages/above_sun.png",
          "/projectImages/above-moon.png",
          "/projectImages/under-moon.png",
        ],
      },

      more: {
        title: "",
        desc: "",
        images: [],
      },
    },
    technologies: [
      "/tech/typescript.png",
      "/tech/next.png",
      "/tech/rest-api.png",
      "/tech/mui.png",
      "/tech/react-query.png",
      "/tech/rhf.png",
    ],
  },
  {
    id: "urban-dreams",
    title: "Urban Dreams",
    button: "Explore Component",
    cover_image: "/b1.png",
    description:
      "An experimental take on modern cityscapes. We focused on interactive UI animations and real-time data updates.",
    time_line: "March 2024 - April 2024",
    live_link: "https://urban-dreams.vercel.app",
    details: {
      landing: {
        title: "",
        desc: "",
        images: [],
      },
      auth: {
        title: "",
        desc: "",
        images: [],
      },
      adminPanel: {
        title: "",
        desc: "",
        images: [],
      },
      userPanel: {
        title: "",
        desc: "",
        images: [],
      },
      receptionPanel: {
        title: "",
        desc: "",
        images: [],
      },

      more: {
        title: "",
        desc: "",
        images: [],
      },
    },
  },
  {
    id: "neon-nights",
    title: "Neon Nights",
    button: "Explore Component",
    cover_image: "/b1.png",
    description:
      "Inspired by cyberpunk aesthetics, this project features WebGL backgrounds and futuristic UI themes.",
    time_line: "April 2024 - May 2024",
    live_link: "https://neon-nights.vercel.app",
    details: {
      landing: {
        title: "",
        desc: "",
        images: [],
      },
      auth: {
        title: "",
        desc: "",
        images: [],
      },
      adminPanel: {
        title: "",
        desc: "",
        images: [],
      },
      userPanel: {
        title: "",
        desc: "",
        images: [],
      },
      receptionPanel: {
        title: "",
        desc: "",
        images: [],
      },

      more: {
        title: "",
        desc: "",
        images: [],
      },
    },
  },
  {
    id: "desert-whispers",
    title: "Desert Whispers",
    button: "Explore Component",
    cover_image: "/b1.png",
    description:
      "A minimalistic storytelling experience in the heart of a digital desert. Built with Next.js and Chakra UI.",
    time_line: "May 2024 - Present",
    live_link: "https://desert-whispers.vercel.app",
    details: {
      landing: {
        title: "",
        desc: "",
        images: [],
      },
      auth: {
        title: "",
        desc: "",
        images: [],
      },
      adminPanel: {
        title: "",
        desc: "",
        images: [],
      },
      userPanel: {
        title: "",
        desc: "",
        images: [],
      },
      receptionPanel: {
        title: "",
        desc: "",
        images: [],
      },

      more: {
        title: "",
        desc: "",
        images: [],
      },
    },
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];
