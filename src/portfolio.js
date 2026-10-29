/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

// SEO Related settings
const seo = {
  title: "Mithilesh Kumar's Portfolio",
  description:
    "Official Portfolio of Mithilesh Kumar — B.Tech Computer Science (KNIT Sultanpur), Super 30 Scholar, Full Stack Systems Architect & Founder of SSAS (Single Shop Assured Solution).",
  og: {
    title: "Mithilesh Kumar — Founder Portfolio | Full Stack Systems Architect",
    type: "website",
    url: "https://mithilesh.netlify.app/",
  },
};

// Home Page
const greeting = {
  title: "Mithilesh Kumar",
  logo_name: "MithileshKumar",
  nickname: "rajmitraji",
  subTitle:
    "Founder & Chief Systems Architect at SSAS | B.Tech Computer Science (KNIT Sultanpur, 8.42 CGPA) | Super 30 Scholar | Dedicated to building resilient, high-density hyperlocal systems, distributed real-time telemetry, and scalable digital solutions for Bharat.",
  resumeLink:
    "https://mithilesh.netlify.app/resume",
  portfolio_repository: "https://github.com/rajmitraji/masterPortfolio",
  githubProfile: "https://github.com/rajmitraji",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/rajmitraji",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/rajmitraj/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:rajmitraji0@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
  {
    name: "X-Twitter",
    link: "https://twitter.com/rajmitraj",
    fontAwesomeIcon: "fa-x-twitter",
    backgroundColor: "#000000",
  },
  {
    name: "YouTube",
    link: "https://youtube.com/@SSASEcosystem",
    fontAwesomeIcon: "fa-youtube",
    backgroundColor: "#FF0000",
  },
  {
    name: "Facebook",
    link: "https://facebook.com/rajmitraj",
    fontAwesomeIcon: "fa-facebook-f",
    backgroundColor: "#1877F2",
  },
  {
    name: "Instagram",
    link: "https://instagram.com/rajmitraj",
    fontAwesomeIcon: "fa-instagram",
    backgroundColor: "#E4405F",
  },
];

const skills = {
  data: [
    {
      title: "Full Stack & Web Architecture",
      fileName: "FullStackImg",
      skills: [
        "⚡ Architecting production Next.js 14/15 App Router monorepos with React Server Components (RSC)",
        "⚡ Building high-concurrency Node.js & Express RESTful APIs with strict TypeScript contracts",
        "⚡ Zero-memory-leak frontend systems with 90fps+ fluid micro-animations & TailwindCSS",
        "⚡ Centralized state management using Redux Toolkit, Context API, and TanStack React Query",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "#FFFFFF",
            color: "#007ACC",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#FFFFFF",
            backgroundColor: "#000000",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "TailwindCSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Redux",
          fontAwesomeClassname: "simple-icons:redux",
          style: {
            color: "#764ABC",
          },
        },
      ],
    },
    {
      title: "Distributed Systems & Realtime Telemetry",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Real-time Socket.IO bidirectional websocket meshes for live GPS courier & technician tracking",
        "⚡ Hyperlocal GIS distance matrix calculations and PostGIS 25km radius dispatch radar",
        "⚡ Database design and query optimization across PostgreSQL, Prisma, MongoDB, and Supabase",
        "⚡ Android WebView Bridge & standalone offline caching with sub-100ms first paint on budget devices",
      ],
      softwareSkills: [
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: {
            color: "#3ECF8E",
          },
        },
        {
          skillName: "Socket.IO",
          fontAwesomeClassname: "simple-icons:socketdotio",
          style: {
            color: "#010101",
          },
        },
        {
          skillName: "Android",
          fontAwesomeClassname: "simple-icons:android",
          style: {
            color: "#3DDC84",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "simple-icons:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "Linux",
          fontAwesomeClassname: "simple-icons:linux",
          style: {
            color: "#FCC624",
          },
        },
      ],
    },
    {
      title: "Core Computer Science & Systems Rigor",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Deep theoretical foundation in Data Structures, Algorithms, Dynamic Programming, and Graph Traversals",
        "⚡ Mentored 100+ global university students as Computer Science Subject Matter Expert on Chegg (95% rating)",
        "⚡ Enforcing Cognitive Complexity (< 15 CC) and deterministic memory garbage collection protocols",
        "⚡ Object-Oriented Design (OOP), Relational DBMS Normalization, and Operating Systems internals",
      ],
      softwareSkills: [
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            color: "#00599C",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "DSA",
          fontAwesomeClassname: "simple-icons:leetcode",
          style: {
            color: "#FFA116",
          },
        },
        {
          skillName: "GitHub",
          fontAwesomeClassname: "simple-icons:github",
          style: {
            color: "#181717",
          },
        },
      ],
    },
    {
      title: "Product Architecture & UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Universal Minimum 2-Column Responsive Design Law across 320px mobile to 4K ultra-wide displays",
        "⚡ Single Page Application (SPA) architecture with animated sub-views and zero layout shifts",
        "⚡ Designing unified workflows across 6 canonical roles (Citizen, Merchant, Rider, Tech, Lab, Admin)",
      ],
      softwareSkills: [
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Responsive UI",
          fontAwesomeClassname: "simple-icons:w3c",
          style: {
            color: "#005A9C",
          },
        },
        {
          skillName: "Design Systems",
          fontAwesomeClassname: "simple-icons:materialdesign",
          style: {
            color: "#757575",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/rajmitraji/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/rajmitraji",
    },
    {
      siteName: "GitHub",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "#181717",
      },
      profileLink: "https://github.com/rajmitraji",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077B5",
      },
      profileLink: "https://www.linkedin.com/in/rajmitraj/",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Kamla Nehru Institute of Technology (KNIT Sultanpur)",
      subtitle: "B.Tech. in Computer Science & Engineering",
      logo_path: "iiitk_logo.png",
      alt_name: "KNIT Sultanpur",
      duration: "2021 - 2025",
      descriptions: [
        "⚡ Graduated with Cumulative GPA of 8.42 / 10 in Computer Science Core curriculum.",
        "⚡ Specialized in Distributed Networks, High-Concurrency Socket Architecture, DBMS, Operating Systems & OOP.",
        "⚡ Served as Elected Hostel Representative coordinating student governance, welfare, and collegiate technical initiatives.",
        "⚡ 50+ complex DSA problems solved covering Dynamic Programming, Trees, and Graph algorithms.",
      ],
      website_link: "http://knit.ac.in",
    },
    {
      title: "Jawahar Navodaya Vidyalaya (JNV Sonbhadra)",
      subtitle: "Higher Secondary (Class XII) — CBSE Science & Mathematics",
      logo_path: "iu_logo.png",
      alt_name: "JNV Sonbhadra",
      duration: "2019 - 2020",
      descriptions: [
        "⚡ Secured 94.2% Distinction in Class XII Board examinations with top honors.",
        "⚡ Cleared national JNVST competitive exam (1 of 40 selected out of 1000+ candidates for merit residential schooling).",
        "⚡ Selected as Super 30 National Scholar (1 of 30 across state) for advanced engineering mentorship.",
        "⚡ Foundation for Excellence (FFE) Scholar with academic distinction in physics and mathematics.",
      ],
      website_link: "https://navodaya.gov.in",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Super 30 Scholar & National Ranker",
      subtitle: "- Super 30 Fellowship",
      logo_path: "stanford_logo.png",
      certificate_link: "https://mithilesh.netlify.app",
      alt_name: "Super 30",
      color_code: "#F59E0B99",
    },
    {
      title: "Computer Science Subject Matter Expert",
      subtitle: "- Chegg India (95% Rating)",
      logo_path: "google_logo.png",
      certificate_link: "https://www.cheggindia.com",
      alt_name: "Chegg India",
      color_code: "#8B5CF699",
    },
    {
      title: "Full Stack Web Development",
      subtitle: "- Coursera Certified",
      logo_path: "coursera_logo.png",
      certificate_link: "https://coursera.org",
      alt_name: "Coursera",
      color_code: "#2A73CC",
    },
    {
      title: "Foundation for Excellence (FFE) Scholar",
      subtitle: "- Merit Mentorship",
      logo_path: "deeplearning_ai_logo.png",
      certificate_link: "https://ffe.org",
      alt_name: "FFE India",
      color_code: "#10B98199",
    },
    {
      title: "Distributed Systems & Socket Architecture",
      subtitle: "- SSAS Engineering",
      logo_path: "ibm_logo.png",
      certificate_link: "https://ssasapp.netlify.app",
      alt_name: "SSAS Systems",
      color_code: "#06B6D499",
    },
    {
      title: "JNVST National Selection Distinction",
      subtitle: "- Ministry of Education",
      logo_path: "nptel_logo.png",
      certificate_link: "https://navodaya.gov.in",
      alt_name: "JNV",
      color_code: "#EF444499",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Leadership, Startups & Engineering Initiatives",
  description:
    "Founder and full-stack systems engineer passionate about creating zero-compromise digital architectures, solving real-world grassroots logistics problems, and mentoring the next generation of engineers.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work & Founder Roles",
      work: true,
      experiences: [
        {
          title: "Founder & Chief Systems Architect",
          company: "SSAS (Single Shop Assured Solution)",
          company_url: "https://ssasapp.netlify.app",
          logo_path: "tiktok_logo.png",
          duration: "2023 - Present",
          location: "Sonbhadra & Sultanpur, UP, India",
          description:
            "Conceived and engineered India's unified 4-pillar hyperlocal electronic care and MultiMart platform. Architected 60+ modular routes in Next.js Server Components, real-time Socket.IO geodesic dispatch radar, decentralized warranty vaults (WCaaS), and standalone offline Android shell.",
          color: "#06B6D4",
        },
        {
          title: "Computer Science Subject Matter Expert (SME)",
          company: "Chegg India",
          company_url: "https://www.cheggindia.com/",
          logo_path: "legato_logo.png",
          duration: "2022 - 2024",
          location: "Remote",
          description:
            "Mentored undergraduate university students worldwide on advanced Computer Science topics. Debugged and authored solutions for 100+ complex queries in C++, Data Structures, Algorithms, DBMS, and memory management with a 95%+ student satisfaction rating.",
          color: "#8B5CF6",
        },
        {
          title: "Elected Hostel Representative & Tech Team Lead",
          company: "KNIT Sultanpur",
          company_url: "http://knit.ac.in",
          logo_path: "muffito_logo.png",
          duration: "2022 - 2024",
          location: "Sultanpur, UP, India",
          description:
            "Elected by student body to represent 400+ campus residents. Coordinated collegiate technical initiatives, student welfare, peer coding circles, and campus network connectivity.",
          color: "#10B981",
        },
      ],
    },
    {
      title: "Internships & Technical Roles",
      experiences: [
        {
          title: "Full Stack Systems Intern",
          company: "SSAS Technologies",
          company_url: "https://ssasapp.netlify.app",
          logo_path: "tiktok_logo.png",
          duration: "June 2023 - Dec 2023",
          location: "India",
          description:
            "Engineered sub-100ms offline web caching, eliminated memory leaks across 120+ WebSocket listeners, and enforced the Universal Minimum 2-Column responsive law across all screen sizes.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships & Community",
      experiences: [
        {
          title: "Peer Coding Mentor & Algorithm Lead",
          company: "KNIT CSE Club",
          company_url: "http://knit.ac.in",
          logo_path: "dsc_logo.png",
          duration: "2022 - 2024",
          location: "KNIT Sultanpur",
          description:
            "Conducted peer workshops and algorithmic problem-solving bootcamps on C++, dynamic programming, and systems design for junior engineering batches.",
          color: "#4285F4",
        },
        {
          title: "Super 30 Community Mentor",
          company: "Super 30 Scholar Network",
          company_url: "https://super30.org",
          logo_path: "google_logo.png",
          duration: "2020 - Present",
          location: "India",
          description:
            "Mentoring underprivileged rural students on competitive exams, logical problem-solving, and computer science foundations.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "Production-grade systems and applications engineered with high concurrency, strict type safety, zero memory leaks, and resilient offline capabilities.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Engineering Publications & Case Studies",
  description: "Technical deep-dives on distributed state machines, offline-first architectures, and hyperlocal dispatch algorithms.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    {
      id: "ssas-4-pillar-architecture",
      name: "SSAS: High-Density Hyperlocal Commerce & 3-Way Hardware Repair Diagnostics",
      createdAt: "2024-05-15T00:00:00Z",
      description: "System architecture study detailing decentralized warranty escrow, 25km geodesic dispatch radar, and zero-memory-leak React frameworks.",
      url: "https://ssasapp.netlify.app",
    },
    {
      id: "offline-first-resilience",
      name: "Offline-First Resilience in Intermittent Rural Networks",
      createdAt: "2024-02-10T00:00:00Z",
      description: "Architectural study on building sub-100ms standalone offline Android shells and resilient local SQLite/IndexedDB vaults.",
      url: "https://mithilesh.netlify.app",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "mithilesh.png",
    description:
      "Open to full-stack systems engineering roles, distributed architecture collaborations, and technical partnerships. Let's build resilient, high-impact technology together.",
  },
  blogSection: {
    title: "Technical Articles & Insights",
    subtitle:
      "Documenting architectural lessons in distributed systems, React performance optimization, and rural technology inclusion.",
    link: "https://mithilesh.netlify.app",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Sonbhadra & Sultanpur, Uttar Pradesh, India",
    locality: "Sonbhadra",
    country: "India",
    region: "Uttar Pradesh",
    postalCode: "231216",
    streetAddress: "KNIT Sultanpur / Sonbhadra",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.google.com",
  },
  phoneSection: {
    title: "+91 96962 93823",
    subtitle: "Call / WhatsApp for inquiries",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
