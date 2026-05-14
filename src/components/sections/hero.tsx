'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, ArrowDown, User, GraduationCap } from 'lucide-react';
import { socialLinks } from '@/lib/data';

export default function Hero() {
  const placeholder = PlaceHolderImages.find((img) => img.id === 'profile-pic');
  const imgSrc = placeholder?.imageUrl || '';

  return (
    <section id="home" className="relative w-full py-20 md:py-32 overflow-hidden bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* Intro Text */}
          <div className="flex flex-col items-start space-y-6 animate-in fade-in slide-in-from-left duration-1000">
            <div className="flex flex-wrap gap-2 mb-2">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-primary/10 text-primary">
                <User className="mr-1 h-3 w-3" />
                CSE Student @ PCU
              </div>
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-accent/10 text-accent-foreground">
                <GraduationCap className="mr-1 h-3 w-3" />
                Class of 2027
              </div>
            </div>
            <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-primary">Raj Kumar</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-[600px] leading-relaxed">
              Passionate Computer Science student with expertise in full-stack web development, machine learning, and UI/UX. Smart India Hackathon 2025 Finalist.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
              <Button size="lg" asChild className="rounded-full px-8 shadow-md">
                <Link href="#projects">
                  <ArrowDown className="mr-2 h-5 w-5" />
                  View My Work
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8 shadow-sm">
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center md:justify-end animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative aspect-square w-full max-w-[280px] overflow-hidden rounded-full shadow-2xl border-4 border-white/10 ring-8 ring-primary/5">
              <Image
                src={imgSrc}
                alt="Raj Kumar Profile"
                fill
                className="object-cover object-[25%_center] transition-transform duration-700 hover:scale-110"
                data-ai-hint={placeholder?.imageHint || 'man suit'}
                priority
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
