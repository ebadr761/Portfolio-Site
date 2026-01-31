export interface EducationItem {
  school: string;
  degree: string;
  field: string;
  startDate: string;
  endDate: string;
  details: string[];
}

export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

export const EDUCATION: EducationItem[] = [
  {
    school: "University of Calgary",
    degree: "Bachelor of Science",
    field: "Software Engineering",
    startDate: "Sep 2023",
    endDate: "Apr 2028",
    details: [
      "Currently enrolled in the UCalgary internship program for May 2026-August 2027 to get industry experience!",
      "Relevant Coursework: Programming in C/C++, OOP in C++ & Java, Full Stack Web Development, Data Structures & Algorithms, Embedded Systems, Networked Systems, Applied Operating Systems (Linux), Software Design",
      "Self-Learning: AWS Solutions Architect certification track (exam scheduled Jan 2026)",
    ],
  },
];

export const EXPERIENCE: ExperienceItem[] = [
  {
    title: "Software Engineering Intern",
    company: "Quest",
    location: "Remote",
    startDate: "June 2025",
    endDate: "August 2025",
    description: "Engineered multi-agent orchestration layer and event-driven serverless backend, shipping 3 production AI agents to support complex company operations and infrastructure optimization.",
    achievements: [
      "Engineered a multi-agent orchestration layer using LangGraph, automating complex ETL pipelines and reducing manual configuration time by >50% on tedious company tasks",
      "Architected an event-driven serverless backend on AWS (Lambda, S3, DynamoDB) ensuring 100% uptime over 3 months, while cutting infrastructure costs through optimized provisioned concurrency",
      "Collaborated with an 8-engineer team to ship 3 production AI agents (Weather, EV Config, Search), implementing robust RESTful API integrations and system-wide error handling",
    ],
    technologies: [
      "Python",
      "Flask",
      "LangChain",
      "LangGraph",
      "n8n",
      "REST APIs",
      "AWS",
      "Linux/UNIX",
      "Git",
    ],
  },
  {
    title: "Contract Software Engineer / Full Stack Developer",
    company: "Self-Employed",
    location: "Calgary, AB",
    startDate: "December 2023",
    endDate: "Present",
    description: "Deployed revenue-critical platforms for high-traffic clients with sophisticated architectural implementations including custom localization engines and performance optimization.",
    achievements: [
      "Deployed revenue-critical platforms for high-traffic clients (e.g., OneForAll, RawPowerlifting), sustaining 3,000+ monthly active users and driving multi-year revenue growth",
      "Engineered a custom Bi-Directional Layout Engine to support dynamic English-Arabic localization (RTL/LTR), solving complex CSS layout collisions for a UAE-based construction firm via optimized Next.js/TypeScript architecture",
      "Delivered digital infrastructure for local services (e.g., Irricana Daycare), achieving sub-second load times via aggressive caching and Static Site Generation (SSG)",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "SQL", "SEO", "Google Analytics", "AWS"],
  },
];