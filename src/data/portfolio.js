
export const personalInfo = {
  name: "Sivaraj R",
  firstName: "Sivaraj",
  lastName: "R",
  role: "Software Developer",
  location: "Tiruppur, Tamil Nadu, India",

  email: "sivaraj47207@gmail.com",

  github: "https://github.com/Sivaraj14",
  linkedin: "https://linkedin.com/in/siva-raj-r",

  resume: "/resume.pdf",

  availability: "Available for opportunities",

  introduction:
    "I build software applications and enjoy turning ideas into practical solutions, from responsive web experiences to software for robotics systems.",

  about:
    "I am a software developer with a background in Electronics and Communication Engineering. I enjoy building useful applications, exploring new technologies, and solving practical engineering challenges.",

  interests: [
    "Web Development",
    "Backend Systems",
    "Software Development",
  ],
};

export const education = [
  {
    degree: "B.E. Electronics and Communication Engineering",
    institution: "Dr. N.G.P. Institute of Technology",
    duration: "2022 – 2026",
  },
];

export const skills = {
  programmingLanguages: [
    "Java",
    "C",
    "Python",
    "JavaScript",
  ],

  frontend: [
    "HTML",
    "CSS",
    "React.js",
    "Tailwind CSS",
  ],

  backend: [
    "Spring Boot",
    "Node.js",
    "Express.js",
  ],

  database: [
    "MySQL",
    "MongoDB",
  ],

  tools: [
    "Git",
    "GitHub",
    "VS Code",
    "IntelliJ IDEA",
  ],

};

export const projects = [
  {
    id: 1,
    title: "Employee & Project Management Platform",
    category: "Full Stack Platform",
    description:
      "A full-stack application for managing employee records, assigning and tracking tasks, reviewing leave requests, and viewing salary credits. Separate employee and manager experiences use role-based access controls and notifications.",
    technologies: [
      "React",
      "Java",
      "Spring Boot",
      "MySQL",
      "Spring Data JPA",
    ],
    github: "https://github.com/Sivaraj14/Employee-Project-Management-Platform",
  },
  {
    id: 2,
    title: "Four in a Row — Real Time Multiplayer Game",
    category: "Web Game · Multiplayer",
    description:
      "A responsive Connect Four game with single-device and real-time online multiplayer modes. Players can create or join rooms and compete on an interactive board. The frontend and multiplayer backend run on Cloudflare Workers, with Durable Objects coordinating game rooms and synchronized play.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Cloudflare Workers",
      "Durable Objects",
      "GitHub",
    ],
    github: "https://github.com/Sivaraj14/four-in-a-row-connect4",
    demo: "https://four-in-a-row-realtime.sivaraj47207.workers.dev/",
  },
  {
    id: 3,
    title: "Personal Portfolio Website",
    category: "Frontend Development",
    description:
      "A responsive portfolio built with React and Vite to present my projects, skills, education, and experience. Includes a mobile-friendly navigation menu, accessible controls, and a résumé download.",
    technologies: ["React", "Vite", "Tailwind CSS", "JavaScript"],
  },
];


export const experience = [
  {
    id: 1,
    organization: "DRDO / DIAT, Pune",
    role: "Robotics Software Intern",
    duration: "February 2025",
    description:
      "Developed and tested software for robotic systems, including sensor data processing, control algorithms, and system integration. Optimized software performance to improve system efficiency by 15%.",
    technologies: ["Python", "Control Algorithms", "Sensor Processing"],
  },
  {
    id: 2,
    organization: "NSIC, Chennai",
    role: "AI Software Development Intern",
    duration: "March 2024",
    description:
      "Built a Python framework on Raspberry Pi for an AI-enabled aerial vehicle, integrating sensor data, onboard processing, and control logic for real-time decision-making.",
    technologies: ["Python", "Raspberry Pi", "AI", "Sensor Integration"],
  },
];
