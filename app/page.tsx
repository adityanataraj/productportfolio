import { HeroSection } from "@/components/hero-section"
import { FeaturedProject } from "@/components/featured-project"
import { AboutSection } from "@/components/about-section"
import { PrinciplesSection } from "@/components/principles-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedProject />
      <AboutSection />
      <PrinciplesSection />
      <ExperienceSection />
      <EducationSection />
      <Footer />
    </main>
  )
}
