import { 
  Code, 
  Database, 
  BrainCircuit, 
  Bot, 
  Globe, 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  Smartphone,
  Trophy,
  GraduationCap,
  Users,
  Layout,
  Server,
  Layers
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Skill = {
  name: string;
  level: number;
  category: 'Languages' | 'Core CS' | 'Web & Backend' | 'AI & Specialized';
  Icon: LucideIcon;
};

export const skills: Skill[] = [
  { name: 'Python', level: 90, category: 'Languages', Icon: Code },
  { name: 'Java & C/C++', level: 85, category: 'Languages', Icon: Terminal },
  { name: 'Data Structures', level: 85, category: 'Core CS', Icon: Cpu },
  { name: 'REST APIs & Web', level: 80, category: 'Web & Backend', Icon: Globe },
  { name: 'SQL & Supabase', level: 75, category: 'Web & Backend', Icon: Database },
  { name: 'Security & Auth', level: 70, category: 'Web & Backend', Icon: ShieldCheck },
  { name: 'ML & AI', level: 70, category: 'AI & Specialized', Icon: BrainCircuit },
  { name: 'UI/UX Design', level: 75, category: 'AI & Specialized', Icon: Smartphone },
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
    title: 'Swasthya',
    description: 'A secure health record platform with dual-key access, teleconsultation, and data anonymization. Smart India Hackathon 2025 Finalist.',
    technologies: ['Full-Stack', 'Blockchain', 'Healthtech'],
    imageId: 'project-swasthya',
    githubUrl: 'https://github.com/Razz1214/SWASTHYA',
  },
  {
    title: 'Deepfake Detection System',
    description: 'CNN-based model using TensorFlow and OpenCV to classify manipulated media with high precision and F1-score.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'ML'],
    imageId: 'project-deepfake',
    githubUrl: 'https://github.com/Razz1214/deepfake-detection-system',
  },
  {
    title: 'Bhojnalaya',
    description: 'QR-based billing system designed to prevent UPI fraud in campus dining. Winner of PCU Project Expo 2024.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'QR APIs'],
    imageId: 'project-bhojnalaya',
    githubUrl: 'https://github.com/Razz1214/Bhojanalaya',
    liveUrl: 'https://bhojnalayaapp.netlify.app/',
  },
];

export type Experience = {
  type: 'Education' | 'Award' | 'Leadership';
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
    date: 'Aug 2023 - 2027',
    description: 'Current CGPA: 7.5. Coursework: AI/ML, DSA, DBMS, OOPs, OS, Web Technologies.',
  },
  {
    type: 'Award',
    title: '1st Rank - University Aptitude Competition',
    organization: 'Pimpri Chinchwad University',
    date: '2024',
    description: 'Achieved top rank among university students in a comprehensive aptitude and problem-solving competition.',
  },
  {
    type: 'Award',
    title: 'Smart India Hackathon 2025 Finalist',
    organization: 'Government of India',
    date: '2025',
    description: 'Built SWASTHYA, an online health management ecosystem with blockchain and AI integration.',
  },
  {
    type: 'Award',
    title: 'PCU Project Expo Runner-Up',
    organization: 'Pimpri Chinchwad University',
    date: '2024',
    description: 'Recognized among 50+ selected projects for the Bhojnalaya campus scale web solution.',
  },
  {
    type: 'Leadership',
    title: 'Kridarambh Sports Organizer',
    organization: 'University Level',
    date: '2025 - 2026',
    description: 'Managed registrations, scheduling, and execution for the Carrom Tournament.',
  },
];

export const socialLinks = {
  github: 'https://github.com/Razz1214',
  linkedin: 'https://www.linkedin.com/in/raj-kumar-0b5013290/',
  leetcode: 'https://leetcode.com/raj-kumar',
  email: 'kumarazz7549@gmail.com',
  phone: '6204001281',
};

export const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];
