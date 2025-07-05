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
    id: "Goldstore",
    title: "Goldstore",
    button: "Explore Web",
    cover_image: "/projectImages/goldWeb/cover.png",

    description:
      "A seamless platform for buying and selling molten gold with a clean and professional user interface.Includes a dedicated customer panel for managing orders and tracking transaction status.An admin dashboard with full control over users, orders, and detailed reporting.",
    time_line: "January 2024 - March 2024",
    live_link: "https://mystic-mountains.vercel.app",
    details: {
      landing: {
        title: "landing-page",
        desc: "The Landing Page serves as the first point of interaction with a clean and engaging design.Smooth animations enhance user experience and help illustrate key processes intuitively.An FAQ section clarifies common questions, while a smart calculator allows real-time conversion between gold and Rial prices.",
        images: ["/videos/gold/Lgold.webm"],
      },
      auth: {
        title: "Authentication-page",
        desc: "The authentication process is designed as a step-by-step flow to provide a clear and smooth user experience.In the first step, the user enters their mobile number, followed by a verification code in the second step.If the user is new, a third step appears with a personal information form to complete the registration.",
        images: [
          "/projectImages/goldWeb/1.png",
          "/projectImages/goldWeb/2.png",
          "/projectImages/goldWeb/3.png",
        ],
      },
      adminPanel: {
        title: "Admin-panel",
        desc: "The admin dashboard provides a comprehensive management panel for full control and oversight of the platform’s various sections.It includes modules for managing inventory, handling gold and cash withdrawal requests, and configuring system settings.A dedicated reports section offers detailed views of transactions, gold purchases, and sales, enabling precise monitoring of financial activities.",
        images: [
          "/projectImages/goldWeb/adminPanel/1.png",
          "/projectImages/goldWeb/adminPanel/2.png",
          "/projectImages/goldWeb/adminPanel/3.png",
        ],
      },
      userPanel: {
        title: "User-panel",
        desc: "The user panel offers a simple and efficient platform for managing financial transactions and gold trading.Users can easily deposit funds, submit withdrawal requests, and perform gold buying and selling operations.Additionally, the reports section provides clear and detailed tracking of transactions and order statuses.",
        images: [
          "/projectImages/goldWeb/userPanel/1.png",
          "/projectImages/goldWeb/userPanel/2.png",
          "/projectImages/goldWeb/userPanel/3.png",
        ],
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
    technologies: [
      "/tech/typescript.png",
      "/tech/reactjs.png",
      "/tech/rest-api.png",
      "/tech/mui.png",
      "/tech/react-query.png",
      "/tech/rhf.png",
      "/tech/python.png",
    ],
  },
  {
    id: "Metallugical_Research_Center",
    title: "MetallugicalWeb",
    button: "Explore Web",
    cover_image: "/projectImages/metalluargy/cover.png",
    description:
      "An experimental take on modern cityscapes. We focused on interactive UI animations and real-time data updates.",
    time_line: "March 2024 - April 2024",
    live_link: "https://urban-dreams.vercel.app",
    details: {
      landing: {
        title: "landing-page",
        desc: "A seamless platform for buying and selling molten gold with a clean and professional user interface.Includes a dedicated customer panel for managing orders and tracking transaction status.An admin dashboard with full control over users, orders, and detailed reporting.",
        time_line: "January 2024 - March 2024",
        images: ["/videos/metalluargy/Lmetalluargy.webm"],
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
    technologies: [
      "/tech/typescript.png",
      "/tech/next.png",
      "/tech/rest-api.png",
      "/tech/graphQl.png",
      "/tech/tailwind.png",
      "/tech/heroui.png",
      "/tech/fm.svg",
      "/tech/react-query.png",
      "/tech/rhf.png",
      "/tech/python.png",
    ],
  },
  {
    id: "Laser-Hair-Removal-Clinic",
    title: "Laser-Hair-Removal-Clinic",
    button: "Explore Web",
    cover_image: "/projectImages/clinic/cover.png",
    description:
      "Inspired by cyberpunk aesthetics, this project features WebGL backgrounds and futuristic UI themes.",
    time_line: "April 2024 - May 2024",
    live_link: "https://neon-nights.vercel.app",
    details: {
      landing: {
        title: "landing-page",
        desc: "A seamless platform for buying and selling molten gold with a clean and professional user interface.Includes a dedicated customer panel for managing orders and tracking transaction status.An admin dashboard with full control over users, orders, and detailed reporting.",
        images: ["/videos/clinic/Lclinic.webm"],
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
    technologies: [
      "/tech/next.png",
      "/tech/rest-api.png",
      "/tech/chakraUi.png",
      "/tech/fm.svg",
      "/tech/redux.png",
      "/tech/formik.png",
      "/tech/python.png",
    ],
  },
  {
    id: "AdliKaraWeb",
    title: "AdliKaraWeb",
    button: "Explore Web",
    cover_image: "/projectImages/adllikara/cover.png",
    description:
      "A minimalistic storytelling experience in the heart of a digital desert. Built with Next.js and Chakra UI.",
    time_line: "May 2024 - Present",
    live_link: "https://desert-whispers.vercel.app",
    details: {
      landing: {
        title: "",
        desc: "",
        images: ["/videos/adllikara/Ladllikara.webm"],
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
    technologies: [
      "/tech/next.png",
      "/tech/rest-api.png",
      "/tech/mui.png",
      "/tech/gsap.png",
      "/tech/formik.png",
      "/tech/python.png",
    ],
  },
  {
    id: "EcommerceWeb",
    title: "EcommerceWeb",
    button: "Explore Web",
    cover_image: "/b1.png",
    description:
      "A minimalistic storytelling experience in the heart of a digital desert. Built with Next.js and Chakra UI.",
    time_line: "May 2024 - Present",
    live_link: "https://desert-whispers.vercel.app",
    details: {
      landing: {
        title: "",
        desc: "",
        images: ["/videos/clinic/Lclinic.webm"],
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
    link: "https://github.com/EmadARN",
    name: "GitHub",
  },
  {
    id: 2,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/emad-araban/",
    name: "LinkedIn",
  },
];
