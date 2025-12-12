import { Card } from "@/components/ui/card"
import Image from "next/image"

const journalEntries = [
  {
    id: 1,
    title: "Museum of Natural History",
    date: "March 15, 2024",
    location: "New York City",
    description:
      "An incredible exploration of ancient artifacts and geological wonders. The exhibit on prehistoric life was particularly fascinating, offering insights into millions of years of evolution.",
    observations: [
      "Detailed fossil collections spanning multiple eras",
      "Interactive displays enhancing learning experience",
      "Impressive scale models of extinct creatures",
    ],
    image: "/natural-history-museum-interior.jpg",
  },
  {
    id: 2,
    title: "Contemporary Art Gallery",
    date: "April 2, 2024",
    location: "San Francisco",
    description:
      "A thought-provoking collection of modern art installations that challenge conventional perspectives. The exhibition explored themes of identity, technology, and human connection.",
    observations: [
      "Innovative use of digital media in installations",
      "Strong emphasis on interactive viewer participation",
      "Diverse artistic voices and perspectives represented",
    ],
    image: "/modern-art-gallery.png",
  },
  {
    id: 3,
    title: "Botanical Gardens Visit",
    date: "May 20, 2024",
    location: "Seattle",
    description:
      "A serene walk through diverse ecosystems, from tropical rainforests to arid desert landscapes. The gardens showcase the incredible biodiversity of plant life.",
    observations: [
      "Over 200 species of rare and endangered plants",
      "Sustainable gardening practices demonstrated",
      "Beautiful seasonal displays and native flora",
    ],
    image: "/botanical-garden-greenhouse.jpg",
  },
  {
    id: 4,
    title: "Botanical Gardens Visit",
    date: "May 20, 2024",
    location: "Seattle",
    description:
      "A serene walk through diverse ecosystems, from tropical rainforests to arid desert landscapes. The gardens showcase the incredible biodiversity of plant life.",
    observations: [
      "Over 200 species of rare and endangered plants",
      "Sustainable gardening practices demonstrated",
      "Beautiful seasonal displays and native flora",
    ],
    image: "/botanical-garden-greenhouse.jpg",
  },
  {
    id: 5,
    title: "Botanical Gardens Visit",
    date: "May 20, 2024",
    location: "Seattle",
    description:
      "A serene walk through diverse ecosystems, from tropical rainforests to arid desert landscapes. The gardens showcase the incredible biodiversity of plant life.",
    observations: [
      "Over 200 species of rare and endangered plants",
      "Sustainable gardening practices demonstrated",
      "Beautiful seasonal displays and native flora",
    ],
    image: "/botanical-garden-greenhouse.jpg",
  },
]

const galleryImages = [
  {
    id: 1,
    src: "/educational-tour-group-photo.jpg",
    alt: "Educational tour group",
  },
  {
    id: 2,
    src: "/museum-exhibit-close-up.jpg",
    alt: "Museum exhibit detail",
  },
  {
    id: 3,
    src: "/nature-observation-notes.jpg",
    alt: "Field notes and observations",
  },
  {
    id: 4,
    src: "/architectural-details.jpg",
    alt: "Architectural studies",
  },
  {
    id: 5,
    src: "/vast-mountain-valley.png",
    alt: "Landscape documentation",
  },
  {
    id: 6,
    src: "/research-materials.jpg",
    alt: "Research materials",
  },
  
]

export function Journal() {
  return (
    <section id="journal" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-16">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Journal</p>
            <h2 className="text-3xl md:text-5xl font-light mb-4">Educational Tours</h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Documenting learning experiences, observations, and discoveries from various educational journeys.
            </p>
          </div>

          <div className="space-y-12">
            {journalEntries.map((entry, index) => (
              <Card key={entry.id} className="overflow-hidden bg-card">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className={`relative h-64 md:h-full ${index % 2 === 1 ? "md:order-2" : ""}`}>
                    <Image src={entry.image || "/placeholder.svg"} alt={entry.title} fill className="object-cover" />
                  </div>
                  <div className="p-8 md:p-12 space-y-4">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        <span>{entry.date}</span>
                        <span>•</span>
                        <span>{entry.location}</span>
                      </div>
                      <h3 className="text-2xl font-medium">{entry.title}</h3>
                    </div>

                    <p className="text-muted-foreground leading-relaxed">{entry.description}</p>

                    <div className="pt-4">
                      <h4 className="text-sm font-medium mb-3 uppercase tracking-wider">Key Observations</h4>
                      <ul className="space-y-2">
                        {entry.observations.map((observation, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{observation}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="pt-12">
            <h3 className="text-2xl font-light mb-8">Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image) => (
                <div key={image.id} className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
