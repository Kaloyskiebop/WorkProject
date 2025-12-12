import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Journal } from "@/components/journal"
import { Certificates } from "@/components/certificates"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Journal />
      <Certificates />
      <Footer />
    </main>
  )
}
