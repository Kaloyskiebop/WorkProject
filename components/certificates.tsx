import { Card } from "@/components/ui/card"
import { Award } from "lucide-react"

const certificates = [
  {
    id: 1,
    title: "Advanced Web Development",
    issuer: "Tech Academy",
    date: "December 2023",
    description: "Comprehensive course covering modern web technologies and best practices.",
  },
  {
    id: 2,
    title: "UI/UX Design Fundamentals",
    issuer: "Design Institute",
    date: "August 2023",
    description: "In-depth study of user-centered design principles and methodologies.",
  },
  {
    id: 3,
    title: "Digital Photography",
    issuer: "Creative Arts Center",
    date: "June 2023",
    description: "Professional photography techniques and post-processing workflows.",
  },
  {
    id: 4,
    title: "Project Management",
    issuer: "Business School",
    date: "March 2023",
    description: "Agile methodologies and effective team collaboration strategies.",
  },
]

export function Certificates() {
  return (
    <section id="certificates" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-12">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Certificates</p>
            <h2 className="text-3xl md:text-5xl font-light mb-4">Achievements</h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A collection of certifications and completed courses that reflect my commitment to continuous learning and
              professional development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certificates.map((cert) => (
              <Card key={cert.id} className="p-8 bg-card group hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-medium">{cert.title}</h3>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
