'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Github, Linkedin, Code2 } from 'lucide-react';
import { socialLinks } from '@/lib/data';
import { Button } from '@/components/ui/button';

export default function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="border-t border-border/40">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Code2 className="h-6 w-6 text-primary hidden md:block" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {year || '2025'} Raj Kumar. All Rights Reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" asChild>
            <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <Link href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </Button>
        </div>
      </div>
    </footer>
  );
}