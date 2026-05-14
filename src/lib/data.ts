
import { Code, Database, BrainCircuit, Bot, Laptop, Cpu, GitBranch, Linkedin, Github, Utensils } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Skill = {
  name: string;
  level: number;
  Icon: LucideIcon;
};

export const skills: Skill[] = [
  { name: 'React & Next.js', level: 85, Icon: Laptop },
  { name: 'Python', level: 90, Icon: Code },
  { name: 'SQL & Databases', level: 80, Icon: Database },
  { name: 'Machine Learning', level: 75, Icon: BrainCircuit },
  { name: 'AI & LLMs', level: 70, Icon: Bot },
  { name: 'Data Structures', level: 85, Icon: Cpu },
];

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  imageId: string;
  githubUrl: string;
  liveUrl?: string;
};

export const projects: Project[] = [
  {
    title: 'Bhojnalaya',
    description: 'An innovative campus dining platform that streamlines food ordering, menu management, and digital billing for university cafeterias.',
    technologies: ['Next.js', 'Firebase', 'Tailwind CSS', 'Genkit'],
    imageId: 'project-1',
    githubUrl: 'https://github.com/raj-kumar/bhojnalaya',
    liveUrl: '#',
  },
  {
    title: 'AI Support Companion',
    description: 'An intelligent chatbot designed to assist students with campus-related queries using natural language processing.',
    technologies: ['Python', 'LangChain', 'Gemini AI', 'Firebase'],
    imageId: 'project-2',
    githubUrl: 'https://github.com/raj-kumar/ai-companion',
  },
  {
    title: 'Portfolio Analytics',
    description: 'A data-driven dashboard for tracking student project engagement and performance metrics.',
    technologies: ['React', 'Recharts', 'PostgreSQL'],
    imageId: 'project-3',
    githubUrl: 'https://github.com/raj-kumar/analytics-dashboard',
    liveUrl: '#',
  },
];

export type Experience = {
  type: 'Education' | 'Work';
  title: string;
  organization: string;
  date: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    type: 'Education',
    title: 'B.Tech in Computer Science & Engineering',
    organization: 'Pimpri Chinchwad University',
    date: '2021 - Present',
    description: 'Third-year student focusing on software engineering principles, algorithms, and AI/ML applications.',
  },
  {
    type: 'Work',
    title: 'Software Intern',
    organization: 'Local Tech Startup',
    date: 'Summer 2023',
    description: 'Developed frontend components for a food-tech startup, focusing on responsive design and performance.',
  },
  {
    type: 'Education',
    title: 'Higher Secondary School',
    organization: 'City Pride School',
    date: '2019 - 2021',
    description: 'Excelled in Science and Mathematics, building a strong foundation for engineering.',
  },
];

export const socialLinks = {
  github: 'https://github.com',
  linkedin: 'https://linkedin.com/in',
};

export const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];
