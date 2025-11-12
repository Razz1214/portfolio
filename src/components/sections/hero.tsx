import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Github, ArrowDown } from 'lucide-react';
import { socialLinks } from '@/lib/data';

export default function Hero() {
  const profilePic = PlaceHolderImages.find((img) => img.id === 'profile-pic');

  return (
    <section id="home" className="relative w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <div className="flex flex-col items-start space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Raj Kumar
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Third-year B.Tech CSE student at Pimpri Chinchwad University. Passionate about building innovative software solutions and exploring the world of AI.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="#projects">
                  <ArrowDown className="mr-2 h-5 w-5" />
                  View My Work
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href={socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  GitHub
                </Link>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            {profilePic && (
              <Image
                src={profilePic.imageUrl}
                alt={profilePic.description}
                width={400}
                height={400}
                className="rounded-full object-cover shadow-2xl aspect-square"
                data-ai-hint={profilePic.imageHint}
                priority
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
