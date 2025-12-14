"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Award, X, ZoomIn } from "lucide-react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"

const certificates = [
  {
    id: 1,
    title: "Certificate of Participation",
    issuer: "Cebu & Bohol Educational Tour",
    date: "2025",
    description: "Awarded for active participation in the 4-day immersive educational tour, engaging with industry leaders in IT, Web Development, VR/AR, and Emergency Response Systems.",
    image: "/tour-certificate.jpg", // Placeholder image path
  },
]

export function Certificates() {
  const [selectedCert, setSelectedCert] = useState<string | null>(null)

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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert) => (
              <Card key={cert.id} className="p-6 bg-card group hover:shadow-lg transition-all duration-300 flex flex-col h-full">
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-xl font-medium leading-tight">{cert.title}</h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                      <span>{cert.issuer}</span>
                      <span>•</span>
                      <span>{cert.date}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-grow">{cert.description}</p>

                {/* Certificate Thumbnail */}
                <div 
                  className="relative h-48 w-full rounded-md overflow-hidden bg-muted cursor-pointer border border-border/50 group-hover:border-primary/50 transition-colors"
                  onClick={() => setSelectedCert(cert.image)}
                >
                  <Image 
                    src={cert.image} 
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-background/80 backdrop-blur-sm p-2 rounded-full text-foreground">
                        <ZoomIn className="h-5 w-5" />
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>

      {/* Zoomed Certificate Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-background/90 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setSelectedCert(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full h-full max-h-[90vh] flex flex-col items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-0 right-0 md:-top-12 md:-right-12 text-foreground/50 hover:text-foreground z-50"
                onClick={() => setSelectedCert(null)}
              >
                <X className="h-8 w-8" />
              </Button>
              
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl">
                <Image
                  src={selectedCert}
                  alt="Certificate Full View"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}