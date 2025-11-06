export interface SkillCategory {
  category: string;
  skills: string[];
}

export const SKILLS: SkillCategory[] = [
  {
    category: "Languages",
    skills: ["C", "C++", "Python", "Java"],
  },
  {
    category: "Frontend",
    skills: ["React", "HTML/CSS", "Tailwind CSS", "TypeScript"],
  },
  {
    category: "Backend & APIs",
    skills: ["Flask", "REST APIs", "Node.js", "LangChain", "LangGraph"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["AWS (EC2, Lambda, S3)", "Linux/UNIX", "Git"],
  },
  {
    category: "Embedded Systems",
    skills: ["PIC24F", "ARM Cortex", "C Firmware", "I2C/SPI/UART"],
  },
  {
    category: "AI & ML Tools",
    skills: ["LangChain", "LangGraph", "n8n Workflows"],
  },
];

export const CERTIFICATIONS = [
  {
    title: "AWS Solutions Architect Associate",
    status: "In Progress",
    targetDate: "Jan 2026",
  },
];