import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export const NAME = "Athul Krishnan A S";
export const EXPERIENCE = 1.5;
export const PROJECTS_COUNT = 10;

export const experiences = [
  {
    company: "IIOTX Texhnologies Pvt Ltd",
    position: "Full Stack Developer",
    location: "Kuravankonam,Thiruvananthapuram,Kerala",
    fromYear: "2024",
    toYear: "Present",
    description:
      "Development of software products for hospitals and health cares",
    achievements: [
      "Developed and maintained scalable web applications using React and Spring Boot",
      "Built reusable and modular UI components to improve development speed and consistency",
      "Implemented RESTful APIs and integrated frontend with backend services efficiently",
      "Improved application performance and optimized rendering across major pages",
      "Collaborated with cross-functional teams to deliver features within deadlines",
      "Utilized Redux for state management and enhanced application stability",
      "Designed responsive and accessible UIs using SCSS and Tailwind CSS",
      "Integrated secure authentication and role-based access control in web apps",
      "Participated in Agile/Scrum ceremonies ensuring smooth sprint delivery",
      "Integrated BLE (Bluetooth Low Energy) devices into a React Native application for real-time data communication",
    ],
  },
];

export const techStack = [
  { name: "React", category: "Frontend" },
  { name: "React Native", category: "Frontend" },
  { name: "Spring Boot", category: "Backend" },
  { name: "Redux", category: "Library" },
  { name: "Java", category: "Language" },
  { name: "TypeScript", category: "Language" },
  { name: "JavaScript", category: "Language" },
  { name: "Python", category: "Language" },
  { name: "TailwindCSS", category: "Styling" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "Jira", category: "Tools" },
  { name: "Git", category: "Tools" },
];

export const services = [
  {
    title: "Web App Development",
    description:
      "Full-stack web applications with modern frameworks and best practices",
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    title: "Mobile Development",
    description: "Cross-platform mobile apps with React Native",
    gradient: "from-secondary/20 to-accent/20",
  },
];

export const projects = [
  {
    title: "Portfolio",
    description:
      "SaaS commerce app optimized for high-scale cloud architecture with real-time inventory management",
    tech: ["React", "Tailwind"],
    gradient: "from-primary/20 to-secondary/20",
    demoLink: "#",
    githubLink: "#",
  },
];

export const socialLinks = [
  { icon: Github, href: "https://github.com", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
  { icon: Mail, href: "mailto:alex@example.com", label: "Email" },
];
