import { Card } from "@/components/ui/card"
import { MapPin, Heart, Globe, BookOpen, Sparkles } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        
        {/* Section Header */}
        <div className="mb-12">
          <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">About Me</p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Who I Am</h2>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(180px,auto)]">
          
          {/* Card 1: Main Bio (Large, spans 2 columns, 2 rows) */}
          <Card className="md:col-span-2 md:row-span-2 bg-card p-8 flex flex-col justify-between relative overflow-hidden group">
            <div className="space-y-6 relative z-10">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <Globe className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3">The Explorer</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm a passionate learner dedicated to exploring new horizons through education and creative pursuits. 
                  My journey is defined by a genuine curiosity about the world and a belief in the power of continuous learning.
                  I don't just document journeys; I strive to capture the beauty found in everyday moments.
                </p>
              </div>
            </div>
            {/* Decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-primary/10" />
          </Card>

          {/* Card 2: Location (Small) */}
          <Card className="md:col-span-1 bg-card p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group hover:border-primary/50 transition-colors">
            <div className="w-14 h-14 rounded-full bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4 group-hover:scale-110 transition-transform duration-300">
              <MapPin className="h-7 w-7" />
            </div>
            <h3 className="font-medium text-lg">Based in</h3>
            <p className="text-muted-foreground">Philippines</p>
          </Card>

          {/* Card 3: Interests / Hobbies (Small) */}
          <Card className="md:col-span-1 bg-card p-6 flex flex-col justify-center">
            <h3 className="font-medium text-lg mb-4 flex items-center gap-2">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              Things I Love
            </h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">Design</span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">Coffee</span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">Gaming</span>
              <span className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-sm">Music</span>
            </div>
          </Card>

          {/* Card 4: Philosophy Quote (Wide) */}
          <Card className="md:col-span-3 bg-primary text-primary-foreground p-8 flex items-center justify-center text-center relative overflow-hidden">
             {/* Noise texture overlay for texture */}
             <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
             
             <div className="relative z-10 max-w-3xl">
                <Sparkles className="w-8 h-8 mx-auto mb-4 opacity-80" />
                <blockquote className="text-2xl md:text-3xl font-light leading-relaxed font-serif italic">
                  "Each experience is an opportunity for growth. My work bridges the gap between observation and meaningful insight."
                </blockquote>
             </div>
          </Card>

          {/* Card 5: Focus Area (Medium) */}
           <Card className="md:col-span-2 p-8 bg-card flex flex-col justify-center hover:bg-accent/5 transition-colors">
              <h3 className="text-xl font-semibold mb-3 flex items-center gap-2">
                 <BookOpen className="h-5 w-5 text-primary" />
                 Current Focus
              </h3>
              <p className="text-muted-foreground text-base">
                 Documenting educational journeys and refining my craft. Whether through personal projects or collaborative work, I am focused on creating meaningful narratives that resonate.
              </p>
           </Card>

           {/* Card 6: Stats/Tag (Small) */}
           <Card className="md:col-span-1 bg-card p-6 flex items-center justify-center relative overflow-hidden">
              <div className="text-center z-10">
                 <p className="text-5xl font-bold mb-1 tracking-tighter text-foreground">100%</p>
                 <p className="text-muted-foreground uppercase tracking-widest text-xs font-medium">Dedication</p>
              </div>
           </Card>

        </div>
      </div>
    </section>
  )
}