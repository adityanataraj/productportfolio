import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center px-6 py-20">
      <div className="max-w-6xl mx-auto w-full flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
        {/* Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          <p className="text-primary font-medium tracking-wide uppercase text-sm">
            Product Manager · Builder · Strategist
          </p>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight text-foreground leading-tight text-balance">
            I turn complex problems into <span className="text-primary italic">products people love</span>
          </h1>

          <p className="mt-6 text-lg text-muted-foreground max-w-xl leading-relaxed">
            I ship products from 0 to 1, drive growth through discovery-led execution, and build features that users
            genuinely value. I care deeply about craft, outcomes, and building things that matter.
          </p>

          <div className="mt-10">
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="#experience">
                See my work
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        {/* Profile Image */}
        <div className="relative shrink-0">
          <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/profile.png"
              alt="Aditya Nataraj - Product Manager"
              width={384}
              height={384}
              className="object-cover object-top w-full h-full"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
