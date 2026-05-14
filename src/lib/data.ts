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
  Users
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Skill = {
  name: string;
  level: number;
  Icon: LucideIcon;
};

export const skills: Skill[] = [
  { name: 'Python', level: 90, Icon: Code },
  { name: 'Java & C/C++', level: 85, Icon: Terminal },
  { name: 'REST APIs & Web', level: 80, Icon: Globe },
  { name: 'SQL & Supabase', level: 75, Icon: Database },
  { name: 'ML & AI', level: 70, Icon: BrainCircuit },
  { name: 'Data Structures', level: 85, Icon: Cpu },
  { name: 'Security & Auth', level: 70, Icon: ShieldCheck },
  { name: 'UI/UX Design', level: 75, Icon: Smartphone },
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
    githubUrl: 'https://github.com/raj-kumar/swasthya',
  },
  {
    title: 'Deepfake Detection System',
    description: 'CNN-based model using TensorFlow and OpenCV to classify manipulated media with high precision and F1-score.',
    technologies: ['Python', 'TensorFlow', 'OpenCV', 'ML'],
    imageId: 'project-deepfake',
    githubUrl: 'https://github.com/raj-kumar/deepfake-detection',
  },
  {
    title: 'Bhojnalaya',
    description: 'QR-based billing system designed to prevent UPI fraud in campus dining. Winner of PCU Project Expo 2024.',
    technologies: ['HTML', 'CSS', 'JavaScript', 'QR APIs'],
    imageId: 'project-bhojnalaya',
    githubUrl: 'https://github.com/raj-kumar/bhojnalaya',
    liveUrl: '#',
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
  github: 'https://github.com',
  linkedin: 'https://linkedin.com/in',
  leetcode: 'https://leetcode.com',
  email: 'kumarazz7549@gmail.com',
  phone: '6204001281',
};

export const navLinks = [
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Contact', href: '#contact' },
];
