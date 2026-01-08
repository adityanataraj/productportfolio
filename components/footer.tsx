import { ArrowUpRight } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <div>
            <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
              {"Let's build something meaningful."}
            </h3>
            <p className="mt-2 text-muted-foreground">Always curious, always shipping.</p>
          </div>

          <nav className="flex items-center gap-6">
            <a
              href="mailto:aditya.n2011@gmail.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/adityanataraj"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-1"
            >
              LinkedIn
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </nav>
        </div>

        <div className="mt-12 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">© 2026 · Crafted with intention</p>
        </div>
      </div>
    </footer>
  )
}
