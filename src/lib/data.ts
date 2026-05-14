import { 
  Code, 
  Database, 
  BrainCircuit, 
  Globe, 
  Cpu, 
  Terminal, 
  ShieldCheck, 
  Smartphone,
  Layout,
  Atom,
  Braces,
  FileCode,
  Server,
  Layers,
  Palette
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type Skill = {
  name: string;
  level: number;
  category: 'Languages' | 'Core CS' | 'Web Development' | 'AI & Specialized';
  Icon: LucideIcon;
};

export const skills: Skill[] = [
  // Languages
  { name: 'Python', level: 90, category: 'Languages', Icon: Code },
  { name: 'JavaScript (ES6+)', level: 85, category: 'Languages', Icon: FileCode },
  { name: 'Java & C/C++', level: 80, category: 'Languages', Icon: Terminal },
  
  // Core CS
  { name: 'Data Structures', level: 85, category: 'Core CS', Icon: Cpu },
  { name: 'Algorithm Design', level: 80, category: 'Core CS', Icon: Layers },
  { name: 'Operating Systems', level: 75, category: 'Core CS', Icon: Server },

  // Web Development
  { name: 'React.js & Next.js', level: 85, category: 'Web Development', Icon: Atom },
  { name: 'HTML5 & CSS3', level: 90, category: 'Web Development', Icon: Layout },
  { name: 'Tailwind CSS', level: 90, category: 'Web Development', Icon: Palette },
  { name: 'Node.js & Express', level: 75, category: 'Web Development', Icon: Braces },
  { name: 'SQL & Supabase', level: 80, category: 'Web Development', Icon: Database },
  { name: 'Security & Auth', level: 75, category: 'Web Development', Icon: ShieldCheck },
  
  // AI & Specialized
  { name: 'ML & Deep Learning', level: 75, category: 'AI & Specialized', Icon: BrainCircuit },
  { name: 'UI/UX Design', level: 80, category: 'AI & Specialized', Icon: Smartphone },
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
