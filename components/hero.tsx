import { Button } from "@/components/ui/button"
import { ArrowRight, Facebook, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* --- LEFT COLUMN: TEXT CONTENT --- */}
          <div className="space-y-8 order-2 lg:order-1">
            
            {/* Badge / Greeting */}
            <div className="inline-flex items-center rounded-full border border-border bg-muted/50 px-3 py-1 text-sm backdrop-blur-md">
              <span className="flex h-2 w-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
              <span className="text-muted-foreground">Available for work</span>
            </div>

            {/* Main Typography */}
            <div className="space-y-4">
              <h1 className="text-5xl font-bold tracking-tight md:text-7xl text-foreground">
                Building digital <br />
                <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-chart-4">
                  experiences.
                </span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                I'm Jomel, a passionate developer & designer exploring the intersection of code, creativity, and user experience.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <Button size="lg" className="h-12 px-8 text-base">
                View My Work
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base group">
                Contact Me
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>

            {/* Social Proof / Links */}
            <div className="pt-8 border-t border-border/50">
              <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
              <div className="flex items-center gap-4">
                <Link href="https://web.facebook.com/Assortedqt" target="_blank" className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
                <Link href="mailto:your@email.com" className="p-2 rounded-full hover:bg-accent hover:text-accent-foreground transition-colors">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: PORTRAIT IMAGE --- */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">
            {/* Decorative Glow/Blob behind the image */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/20 blur-[100px] rounded-full -z-10" />
            
            <div className="relative">
              {/* Image Styling:
                 - 'aspect-[3/4]': Enforces a portrait ratio.
                 - 'rounded-3xl': Smooth, modern corners.
                 - 'object-cover': Ensures the image fills the box without stretching.
              */}
              <img
                src="/pamboat.jpg" 
                alt="Jomel"
                className="w-full max-w-md rounded-3xl shadow-2xl border border-border/50 object-cover aspect-3/4"
              />
              
              {/* Optional: Floating Badge on Image */}
              <div className="absolute -bottom-6 -left-6 bg-card border border-border p-4 rounded-xl shadow-lg hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <span className="font-bold text-lg">5+</span>
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-foreground">Years Experience</p>
                    <p className="text-muted-foreground">in Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}