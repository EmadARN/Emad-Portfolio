<div align="center">
![nextdotjs](images/readMe.png)  <div>
    <img src="https://img.shields.io/badge/-Next_JS-black?style=for-the-badge&logoColor=white&logo=nextdotjs&color=000000" alt="nextdotjs" />
    <img src="https://img.shields.io/badge/-Framer-black?style=for-the-badge&logoColor=white&logo=framer&color=0055FF" alt="framer" />
    <img src="https://img.shields.io/badge/-Three_JS-black?style=for-the-badge&logoColor=white&logo=threedotjs&color=000000" alt="three.js" />
    <img src="https://img.shields.io/badge/-Tailwind_CSS-black?style=for-the-badge&logoColor=white&logo=tailwindcss&color=06B6D4" alt="tailwindcss" />
  </div>

  <h3 align="center"> Emad Portfolio</h3>

</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Code to Copy](#snippets)
6. 🔗 [Assets](#links)

## <a name="introduction">🤖 Introduction</a>

Built with Next.js for handling the user interface, Three.js for rendering 3D elements, Framer motion for beautiful animations, and styled with TailwindCSS, this portfolio demonstrates the developer's skills in a unique manner that creates a lasting impact.

## <a name="tech-stack">⚙️ Tech Stack</a>

- Next.js
- Three.js
- Framer Motion
- Tailwind CSS

## <a name="features">🔋 Features</a>

👉 **Hero**: Captivating introduction featuring a spotlight effect and dynamic background.

👉 **Bento Grid**: Modern layout presenting personal information using cutting-edge CSS design techniques.

👉 **3D Elements**: Interactive 3D design elements, such as a GitHub-style globe and card hover effects, adding depth and engagement.

👉 **Work Experience**: Prominent display of professional background for emphasis and credibility.

👉 **Responsiveness**: Seamless adaptability across all devices, ensuring optimal viewing experience for every user.

👉 **Project-details**: Dive into every corner of the project—from authentication flows to admin panels—designed with precision, performance, and user-centric thinking at its core.

and many more, including code architecture and reusability

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/EmadARN/Emad-portofilo.git
cd portfolio
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>data/index.ts</code></summary>

```typescript
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
    imgClassName: "w-full h-full",
    titleClassName: "justify-end max-w-96 font-bold ",
    img: "/b1.png",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start font-bold ",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start max-w-96 font-bold ",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },
  {
    id: 4,
    description: "Brief About Me",
    title: `I’m Emad Araban, a front-end developer with three years of experience in designing and implementing modern user interfaces. My learning journey has been self-taught, but I have also worked collaboratively in teams on various projects. I have deep expertise in React, Next.js, JavaScript, and TypeScript, and I’m passionate about building optimized and scalable user interfaces.
    
  I highly value clean code, user experience optimization, and solving technical challenges. Besides front-end development, I am also interested in becoming a full-stack developer and currently learning Python and backend development to expand my skill set. I’m always eager to explore new technologies and collaborate with dynamic teams.`,
    className: "lg:col-span-5  md:row-span-1",
    imgClassName: "",
    titleClassName: " font-normal ",
    img: "",
    spareImg: "",
  },

  {
    id: 5,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-6",
    imgClassName: "",
    titleClassName: "justify-start  font-bold ",
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
      "justify-center md:justify-start lg:justify-center max-w-96 font-bold ",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 7,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-3 md:col-span-3 md:row-span-2",
    imgClassName: "w-full absolute -top-[16.2rem]",
    titleClassName:
      "justify-center md:max-w-full max-w-60 text-start  font-bold ",
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
```

</details>

<details>
<summary><code>tailwind.config.ts</code></summary>

```ts
import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        black: {
          DEFAULT: "#000",
          100: "#000319",
          200: "rgba(17, 25, 40, 0.75)",
          300: "rgba(255, 255, 255, 0.125)",
        },
        white: {
          DEFAULT: "#FFF",
          100: "#BEC1DD",
          200: "#C1C2D3",
        },
        blue: {
          "100": "#E4ECFF",
        },
        purple: "#CBACF9",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        moveHorizontal: {
          "0%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
          "50%": {
            transform: "translateX(50%) translateY(10%)",
          },
          "100%": {
            transform: "translateX(-50%) translateY(-10%)",
          },
        },
        moveInCircle: {
          "0%": {
            transform: "rotate(0deg)",
          },
          "50%": {
            transform: "rotate(180deg)",
          },
          "100%": {
            transform: "rotate(360deg)",
          },
        },
        moveVertical: {
          "0%": {
            transform: "translateY(-50%)",
          },
          "50%": {
            transform: "translateY(50%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
        scroll: {
          to: {
            transform: "translate(calc(-50% - 0.5rem))",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        spotlight: "spotlight 2s ease .75s 1 forwards",
        shimmer: "shimmer 2s linear infinite",
        first: "moveVertical 30s ease infinite",
        second: "moveInCircle 20s reverse infinite",
        third: "moveInCircle 40s linear infinite",
        fourth: "moveHorizontal 40s ease infinite",
        fifth: "moveInCircle 20s ease infinite",
        scroll:
          "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
        {
          "bg-grid": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="100" height="100" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-grid-small": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
          "bg-dot": (value: any) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
} satisfies Config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
```

</details>

<details>
<summary><code>globals.css</code></summary>

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 240 10% 3.9%;

    --card: 0 0% 100%;
    --card-foreground: 240 10% 3.9%;

    --popover: 0 0% 100%;
    --popover-foreground: 240 10% 3.9%;

    --primary: 240 5.9% 10%;
    --primary-foreground: 0 0% 98%;

    --secondary: 240 4.8% 95.9%;
    --secondary-foreground: 240 5.9% 10%;

    --muted: 240 4.8% 95.9%;
    --muted-foreground: 240 3.8% 46.1%;

    --accent: 240 4.8% 95.9%;
    --accent-foreground: 240 5.9% 10%;

    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 5.9% 90%;
    --input: 240 5.9% 90%;
    --ring: 240 10% 3.9%;

    --radius: 0.5rem;
  }

  .dark {
    --background: 240 10% 3.9%;
    --foreground: 0 0% 98%;

    --card: 240 10% 3.9%;
    --card-foreground: 0 0% 98%;

    --popover: 240 10% 3.9%;
    --popover-foreground: 0 0% 98%;

    --primary: 0 0% 98%;
    --primary-foreground: 240 5.9% 10%;

    --secondary: 240 3.7% 15.9%;
    --secondary-foreground: 0 0% 98%;

    --muted: 240 3.7% 15.9%;
    --muted-foreground: 240 5% 64.9%;

    --accent: 240 3.7% 15.9%;
    --accent-foreground: 0 0% 98%;

    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 0 0% 98%;

    --border: 240 3.7% 15.9%;
    --input: 240 3.7% 15.9%;
    --ring: 240 4.9% 83.9%;
  }
}

@layer base {
  * {
    @apply border-border !scroll-smooth;
  }
  body {
    @apply bg-background text-foreground;
  }
  button {
    @apply active:outline-none;
  }
}

@layer utilities {
  .heading {
    @apply font-bold text-4xl md:text-4xl text-center;
  }
}

@keyframes scroll-up {
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(-40%);
    -webkit-transform: translateY(-40%);
    -moz-transform: translateY(-40%);
    -ms-transform: translateY(-40%);
    -o-transform: translateY(-40%);
  }
}

.animate-scroll-up {
  animation: scroll-up var(--animation-duration) linear infinite;
  -webkit-animation: scroll-up var(--animation-duration) linear infinite;
}
```

</details>

## <a name="links">🔗 Assets</a>

Assets used in the project can be found [here](https://Emdaportfolio.com)
