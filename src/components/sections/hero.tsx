
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, ArrowDown, User } from 'lucide-react';
import { socialLinks } from '@/lib/data';

export default function Hero() {
  const profilePic = PlaceHolderImages.find((img) => img.id === 'profile-pic');

  return (
    <section id="home" className="relative w-full py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col items-start space-y-6 animate-in fade-in slide-in-from-left duration-1000">
            <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary mb-2">
              <User className="mr-1 h-3 w-3" />
              Available for Internships
            </div>
            <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Hi, I&apos;m <span className="text-primary">Raj Kumar</span>
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl max-w-[600px]">
              A third-year B.Tech CSE student at Pimpri Chinchwad University. I specialize in building user-centric software like <span className="font-semibold text-foreground">Bhojnalaya</span>, blending creative design with robust backend solutions.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row w-full sm:w-auto">
              <Button size="lg" asChild className="rounded-full px-8">
                <Link href="#projects">
                  <ArrowDown className="mr-2 h-5 w-5" />
                  View My Projects
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="rounded-full px-8">
                <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub Profile
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-end animate-in fade-in slide-in-from-right duration-1000">
            <div className="relative aspect-[4/5] w-full max-w-[450px] overflow-hidden rounded-2xl shadow-2xl border-4 border-background ring-8 ring-primary/5">
              {profilePic && (
                <Image
                  src={profilePic.imageUrl}
                  alt={profilePic.description}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  data-ai-hint={profilePic.imageHint}
                  priority
                />
              )}
              {/* Overlay for a more modern look */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
