import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { experiences } from '@/lib/data';
import { Briefcase, GraduationCap, Trophy, Users } from 'lucide-react';

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

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-1/2 top-0 h-full w-0.5 -translate-x-1/2 bg-border"></div>
          
          {experiences.map((item, index) => (
            <div key={index} className="relative mb-12">
              <div className="flex items-center">
                <div className={`flex-1 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                  <Card className={`group transition-shadow duration-300 hover:shadow-lg ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <CardHeader>
                      <CardTitle className="font-headline">{item.title}</CardTitle>
                      <CardDescription className="font-semibold text-primary">{item.organization}</CardDescription>
                      <CardDescription>{item.date}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent border-2 border-accent-foreground/20">
                  {item.type === 'Education' && <GraduationCap className="h-5 w-5 text-accent-foreground" />}
                  {item.type === 'Award' && <Trophy className="h-5 w-5 text-accent-foreground" />}
                  {item.type === 'Leadership' && <Users className="h-5 w-5 text-accent-foreground" />}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
