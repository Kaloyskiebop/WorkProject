"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { BookOpen, X, ChevronLeft, ChevronRight, ImageIcon } from "lucide-react"
import { galleryImages } from "./gallery-list"

// Updated data structure to support multiple images (slideshow)
const journalEntries = [
  {
    id: 1,
    title: "Arrival & Worldtech Information Solutions",
    date: "Day 1",
    location: "Cebu City",
    description:
      "Our educational tour began with our arrival in the 'Queen City of the South'. We headed straight to Worldtech Information Solutions, a premier provider of IT business solutions. It was an eye-opening introduction to the professional world of software development and corporate IT training.",
    observations: [
      "Industry-standard software development lifecycles",
      "Overview of corporate IT infrastructure and security",
      "Insights into career paths for IT graduates",
    ],
    // Converted single 'image' to 'images' array for slideshow
    images: ["/journal/worldtech.jpg"], 
    writtenJournals: ["/written/worldtech-journal.jpg"], 
  },
  {
    id: 2,
    title: "Tech Immersion: Rivan IT & CodeChum",
    date: "Day 2",
    location: "Cebu City",
    description:
      "A heavy technical day focused on skill-building. We started with hands-on web development workshops at Rivan IT, learning modern frameworks. Later, we visited CodeChum, where we engaged in gamified coding challenges and heard from expert speakers about the future of tech education.",
    observations: [
      "Hands-on application of modern web technologies",
      "Gamified learning approaches to algorithm solving",
      "Networking with expert developers and mentors",
    ],
    images: ["/journal/rivanit.jpg"],
    // Added 2 written journals for Day 2 as requested
    writtenJournals: ["/written/rivan-journal.jpg", "/written/codechum-journal.jpg"],
  },
  {
    id: 3,
    title: "Virtual Realities at Mata Technologies",
    date: "Day 3",
    location: "Cebu City",
    description:
      "We stepped into the future with Mata Technologies, a pioneer in Virtual and Augmented Reality in the Philippines. We explored how they use the 'Mataverse' to preserve cultural heritage and revolutionize tourism through immersive technology.",
    observations: [
      "Demonstrations of VR/AR in tourism and heritage",
      "The intersection of creative arts and advanced tech",
      "Potential of immersive technologies in enterprise",
    ],
    images: ["/journal/mata.jpg"],
    writtenJournals: ["/written/mata-journal.jpg"],
  },
  {
    id: 4,
    title: "Crisis Response: Tagbilaran 911",
    date: "Day 4",
    location: "Tagbilaran City, Bohol",
    description:
      "Crossing over to Bohol, we visited the Tagbilaran City Command Center. We witnessed firsthand how technology plays a critical role in public safety, seeing how their integrated surveillance and dispatch systems coordinate real-time emergency responses.",
    observations: [
      "Integration of CCTVs with emergency dispatch",
      "Real-time data handling for crisis management",
      "Public safety technology infrastructure",
    ],
    images: ["/journal/tagbilaran.jpg"],
    writtenJournals: ["/written/cdrrmo-journal.jpg"],
  },
]

// Sub-component for individual journal cards to handle slideshow state
function JournalEntryCard({ entry, onOpenWritten }: { entry: any, onOpenWritten: (imgs: string[]) => void }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Automatic slideshow effect
  useEffect(() => {
    // Only run interval if there is more than 1 image
    if (entry.images.length <= 1) return

    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % entry.images.length)
    }, 4000) // Change image every 4 seconds

    return () => clearInterval(interval)
  }, [entry.images.length])

  return (
    <Card className="overflow-hidden bg-card border-border/50 hover:border-border transition-colors">
      <div className="grid md:grid-cols-2 gap-0">
        {/* Slideshow Area */}
        <div className={`relative h-64 md:h-full min-h-[300px] bg-muted ${entry.id % 2 === 0 ? "" : "md:order-2"}`}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }} // Slower fade for smoother auto-transition
              className="absolute inset-0"
            >
              <Image
                src={entry.images[currentImageIndex] || "/placeholder.svg"}
                alt={`${entry.title} - Image ${currentImageIndex + 1}`}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Optional: Simple Indicator Dots instead of controls */}
          {entry.images.length > 1 && (
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
              {entry.images.map((_: any, idx: number) => (
                <div 
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImageIndex 
                      ? "w-4 bg-white" 
                      : "w-1.5 bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Content Area */}
        <div className="p-8 md:p-12 space-y-6 flex flex-col justify-center">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-sm text-muted-foreground uppercase tracking-wider font-medium">
              <span className="text-primary">{entry.date}</span>
              <span>•</span>
              <span>{entry.location}</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-medium">{entry.title}</h3>
          </div>

          <p className="text-muted-foreground leading-relaxed text-base">{entry.description}</p>

          <div className="pt-2">
            <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-foreground">Key Takeaways</h4>
            <ul className="space-y-2">
              {entry.observations.map((observation: string, idx: number) => (
                <li key={idx} className="text-sm text-muted-foreground flex items-start gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary mt-2 shrink-0"></span>
                  <span>{observation}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-4">
            <Button
              variant="outline"
              className="gap-2 group"
              onClick={() => onOpenWritten(entry.writtenJournals)}
            >
              <BookOpen className="h-4 w-4 transition-transform group-hover:scale-110" />
              View Written Entry
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}

export function Journal() {
  const [selectedJournals, setSelectedJournals] = useState<string[] | null>(null)
  const [currentJournalIndex, setCurrentJournalIndex] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  
  // Changed itemsPerPage to 6 to show 2 rows (3 columns x 2 rows = 6 items)
  const itemsPerPage = 6 
  const totalPages = Math.ceil(galleryImages.length / itemsPerPage)

  const handleNextPage = () => {
    setCurrentPage((prev) => (prev < totalPages ? prev + 1 : prev))
  }

  const handlePrevPage = () => {
    setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
  }

  const currentGalleryImages = galleryImages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  )

  const handleNextJournal = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedJournals) {
      setCurrentJournalIndex((prev) => (prev + 1) % selectedJournals.length)
    }
  }

  const handlePrevJournal = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (selectedJournals) {
      setCurrentJournalIndex((prev) => (prev - 1 + selectedJournals.length) % selectedJournals.length)
    }
  }

  return (
    <section id="journal" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="space-y-16">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-4">Journal</p>
            <h2 className="text-3xl md:text-5xl font-light mb-4">Cebu & Bohol Tour</h2>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Documenting our 4-day educational journey through the tech hubs of Cebu and the emergency response systems of Bohol.
            </p>
          </div>

          <div className="space-y-12">
            {journalEntries.map((entry) => (
              <JournalEntryCard 
                key={entry.id} 
                entry={entry} 
                onOpenWritten={(journals) => {
                  setSelectedJournals(journals)
                  setCurrentJournalIndex(0)
                }} 
              />
            ))}
          </div>

          <div className="pt-12">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-light">Tour Gallery</h3>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handlePrevPage}
                  disabled={currentPage === 1}
                  className="h-8 w-8"
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <span className="text-sm text-muted-foreground min-w-[3rem] text-center">
                  {currentPage} / {totalPages}
                </span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={handleNextPage}
                  disabled={currentPage === totalPages}
                  className="h-8 w-8"
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div className="min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentPage}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                  {currentGalleryImages.map((image) => (
                    <div key={image.id} className="relative aspect-4/3 overflow-hidden rounded-lg bg-muted group cursor-pointer">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="text-white text-sm font-medium">{image.alt}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Written Journal Modal */}
      <AnimatePresence>
        {selectedJournals && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedJournals(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl w-full bg-card rounded-lg shadow-2xl overflow-hidden border border-border"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between p-4 border-b">
                <h3 className="font-medium">
                  Written Journal Entry
                  {selectedJournals.length > 1 && ` (${currentJournalIndex + 1}/${selectedJournals.length})`}
                </h3>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setSelectedJournals(null)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="relative aspect-[3/4] w-full bg-muted/50 group">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentJournalIndex}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={selectedJournals[currentJournalIndex]}
                      alt={`Written Journal Entry Page ${currentJournalIndex + 1}`}
                      fill
                      className="object-contain p-4"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Carousel Controls for Written Journals */}
                {selectedJournals.length > 1 && (
                  <>
                    <Button 
                      variant="secondary"
                      size="icon"
                      className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={handlePrevJournal}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button 
                      variant="secondary"
                      size="icon"
                      className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full h-10 w-10 shadow-lg opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={handleNextJournal}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                    
                    {/* Dots Indicator */}
                    <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                       {selectedJournals.map((_, idx) => (
                         <div 
                           key={idx}
                           className={`h-2 w-2 rounded-full shadow-sm transition-colors ${
                             idx === currentJournalIndex ? "bg-primary" : "bg-muted-foreground/50"
                           }`}
                         />
                       ))}
                    </div>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}