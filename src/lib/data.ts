import { Code, Database, BrainCircuit, Bot, Laptop, Cpu, GitBranch, Linkedin, Github } from 'lucide-react';
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
    title: 'Portfolio Website',
    description: 'My personal digital canvas to showcase my skills, projects, and journey as a software developer.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'GenAI'],
    imageId: 'project-1',
    githubUrl: 'https://github.com/your-username/your-repo',
    liveUrl: '#',
  },
  {
    title: 'AI Chatbot Assistant',
    description: 'A smart chatbot built using large language models to provide customer support and answer queries.',
    technologies: ['Python', 'LangChain', 'Genkit', 'Firebase'],
    imageId: 'project-2',
    githubUrl: 'https://github.com/your-username/your-repo',
  },
  {
    title: 'Data Analysis Dashboard',
    description: 'A web application for visualizing and analyzing complex datasets with interactive charts and graphs.',
    technologies: ['React', 'Pandas', 'Recharts'],
    imageId: 'project-3',
    githubUrl: 'https://github.com/your-username/your-repo',
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
    description: 'Currently in my third year, focusing on software development, artificial intelligence, and data science.',
  },
  {
    type: 'Work',
    title: 'Software Development Intern',
    organization: 'Tech Solutions Inc.',
    date: 'Summer 2023',
    description: 'Contributed to the development of a client-facing web application using React and Node.js. Collaborated with a team of 5 developers.',
  },
  {
    type: 'Education',
    title: 'Higher Secondary Certificate',
    organization: 'City Pride School',
    date: '2019 - 2021',
    description: 'Completed my pre-university education with a focus on Physics, Chemistry, and Mathematics.',
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
