import { Lightbulb, Target, Users, Heart } from "lucide-react"

const principles = [
  {
    icon: Lightbulb,
    title: "Discovery-first",
    description: "Every great product starts with genuine curiosity. I dig deep before building.",
  },
  {
    icon: Target,
    title: "Outcome-obsessed",
    description: "Shipping is step one. I care about what happens after users get their hands on it.",
  },
  {
    icon: Users,
    title: "Team-amplifying",
    description:
      "The best ideas come from anywhere. I create space for engineers, designers, and stakeholders to shine.",
  },
  {
    icon: Heart,
    title: "Craft-caring",
    description: "Details matter. The difference between good and great often lives in the margins.",
  },
]

export function PrinciplesSection() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground text-center mb-4">How I work</h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          The principles that guide my approach to building products
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {principles.map((principle, index) => (
            <div key={index} className="p-6 bg-background rounded-lg border border-border">
              <principle.icon className="h-8 w-8 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-semibold text-foreground mb-2">{principle.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
