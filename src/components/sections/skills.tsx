'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { skills, Skill } from '@/lib/data';

function SkillCard({ skill }: { skill: Skill }) {
  const [progress, setProgress] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProgress(skill.level);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5,
      }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [skill.level]);

  return (
    <Card ref={ref} className="bg-card/80 backdrop-blur-sm">
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{skill.name}</CardTitle>
        <skill.Icon className="h-5 w-5 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-lg font-bold text-primary">{skill.level}%</div>
        <Progress value={progress} className="w-full mt-2 h-2 transition-all duration-1000" />
      </CardContent>
    </Card>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="w-full py-20 md:py-32 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Technical Skills</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                A look at the technologies and tools I work with. I&apos;m always eager to learn more.
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
