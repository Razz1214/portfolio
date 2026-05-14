'use client';

import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { skills, Skill } from '@/lib/data';
import { cn } from '@/lib/utils';

function SkillItem({ skill }: { skill: Skill }) {
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
        threshold: 0.1,
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
    <div ref={ref} className="space-y-2">
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-2">
          <skill.Icon className="h-4 w-4 text-primary" />
          <span className="font-medium">{skill.name}</span>
        </div>
        <span className="text-muted-foreground">{skill.level}%</span>
      </div>
      <Progress value={progress} className="h-1.5 transition-all duration-1000" />
    </div>
  );
}

export default function Skills() {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="w-full py-20 md:py-32 bg-muted/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Technical Expertise</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            A comprehensive overview of my technical toolkit and proficiency levels across different domains.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {categories.map((category) => (
            <Card key={category} className="bg-card/40 backdrop-blur-md border-primary/10 transition-all duration-300 hover:border-primary/30 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-headline flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-primary" />
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill, index) => (
                    <SkillItem key={index} skill={skill} />
                  ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
