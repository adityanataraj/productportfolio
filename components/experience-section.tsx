import { Card, CardContent } from "@/components/ui/card"

const experiences = [
  {
    title: "Product Manager",
    company: "Maltego Technologies GmbH",
    location: "Munich",
    period: "May 2022 - Present",
    highlights: [
      "Scaled ARR from $2M to $5M for Monitor (2025–2026) and grew adoption from 100 to 220+ organizations by prioritizing revenue-aligned roadmap initiatives.",
      "Expanded platform coverage from 6 to 14 social sources (including Snapchat, VK, Bluesky, Reddit & Threads), driving a 50% lift in Monitor investigation usage.",
      "Delivered 0 to 1 AI capabilities - LLM-based case generation (Reduced activation time from ~5 min to < 30 sec) and real-time spam filtering (30–40% noise reduction per case).",
      "Led Monitoring & Graphing end-to-end - strategy, discovery, delivery, GTM alignment, and cross-product workflow design.",
    ],
  },
  {
    title: "UI Developer",
    company: "PWC",
    location: "Bengaluru",
    period: "August 2019 - July 2020",
    highlights: [
      "Built Salesforce Lightning interfaces for banking & mortgage clients (Customer 360° dashboards, banker cockpit tools).",
      "Automated internal reporting via Tableau as part of PwC's Digital Accelerator program.",
    ],
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-10">Experience</h2>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="border shadow-sm">
              <CardContent className="p-6">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="text-sm text-muted-foreground sm:text-right">
                    <p>{exp.period}</p>
                    <p>{exp.location}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-muted-foreground text-sm leading-relaxed flex gap-2">
                      <span className="text-primary mt-1.5 shrink-0">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
