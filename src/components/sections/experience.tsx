import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { experiences } from '@/lib/data';
import { Briefcase, GraduationCap, Trophy, Users } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Experience() {
  return (
    <section id="experience" className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="space-y-4 text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">Education & Achievements</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            A track record of academic excellence and recognized innovation.
          </p>
        </div>

        <div className="relative mx-auto max-w-4xl px-2">
          {/* Vertical line - hidden on very small screens, shown as left border on mobile, middle on desktop */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          
          <div className="space-y-12">
            {experiences.map((item, index) => (
              <div key={index} className={cn(
                "relative flex flex-col md:flex-row items-start md:items-center",
                index % 2 === 0 ? "md:flex-row-reverse" : ""
              )}>
                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-16 md:pl-0">
                  <div className={cn(
                    "w-full",
                    index % 2 === 0 ? "md:pr-12 text-left md:text-right" : "md:pl-12 text-left"
                  )}>
                    <Card className="group transition-all duration-300 hover:shadow-xl hover:border-primary/20 bg-card/50 backdrop-blur-sm">
                      <CardHeader className="p-5">
                        <CardTitle className="text-xl font-headline">{item.title}</CardTitle>
                        <CardDescription className="font-semibold text-primary">{item.organization}</CardDescription>
                        <CardDescription className="text-xs">{item.date}</CardDescription>
                      </CardHeader>
                      <CardContent className="p-5 pt-0">
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>

                {/* Timeline Icon */}
                <div className="absolute left-8 md:left-1/2 top-6 md:top-1/2 -translate-y-1/2 -translate-x-1/2 z-10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-background border-2 border-primary shadow-[0_0_15px_rgba(var(--primary),0.3)]">
                    {item.type === 'Education' && <GraduationCap className="h-5 w-5 text-primary" />}
                    {item.type === 'Award' && <Trophy className="h-5 w-5 text-primary" />}
                    {item.type === 'Leadership' && <Users className="h-5 w-5 text-primary" />}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
