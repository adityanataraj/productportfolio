import { ExternalLink, Chrome } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FeaturedProject() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <p className="text-primary font-medium tracking-wide uppercase text-sm mb-4">Side Project</p>
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">Highlightly</h2>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-8">
          A minimal browser extension I built for capturing and organizing text highlights from any webpage. No
          accounts, no sync, no tracking—just your notes, stored locally. Privacy-first by design.
        </p>

        <div className="flex flex-wrap gap-3 mb-10">
          <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
            Chrome Extension
          </span>
          <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Local Storage</span>
          <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Privacy-First</span>
          <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">Markdown Export</span>
        </div>

        <div className="flex flex-wrap gap-4">
          <Button asChild size="lg" className="rounded-full px-6">
            <a href="https://www.highlightly.dev/" target="_blank" rel="noopener noreferrer">
              <ExternalLink className="mr-2 h-4 w-4" />
              Visit Website
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="rounded-full px-6 bg-transparent">
            <a
              href="https://chromewebstore.google.com/detail/highlightly/mailmjfljpdobdhaiecdplikedfbabhh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Chrome className="mr-2 h-4 w-4" />
              Get Extension
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
