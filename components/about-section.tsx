export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-10">A bit about me</h2>

        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            {
              "I like building things. Talking to users, digging through data, figuring out why something feels off. That's the work I find interesting."
            }
          </p>

          <p>
            {
              "I didn't plan to end up in product. I just kept gravitating toward problems, writing code, sketching out workflows, asking users annoying questions until something clicked. Somewhere along the way I landed in cybersecurity and OSINT, building tools for investigators. Turns out that's pretty fun."
            }
          </p>

          <p>
            {"What gets me out of bed: "}
            <strong className="text-foreground">{"0→1 work"}</strong>
            {
              ". Finding a problem worth solving, shipping fast, seeing what sticks. I've built AI features, expanded platforms into new markets, and turned side experiments into things people actually pay for."
            }
          </p>

          <p className="font-medium text-foreground">
            {"Good products come from good teams. I try to be someone who makes the team better."}
          </p>
        </div>
      </div>
    </section>
  )
}
