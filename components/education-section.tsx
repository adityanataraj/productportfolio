import { Card, CardContent } from "@/components/ui/card"

const education = [
  {
    degree: "Master of Science in Global Technology, Innovation Management and Entrepreneurship",
    school: "TU Hamburg",
    location: "Hamburg, Germany",
    year: "2022",
    grade: "2.1",
  },
  {
    degree: "Bachelor of Engineering",
    school: "B.M.S Institute of Technology and Management",
    location: "Bengaluru, India",
    year: "2019",
    grade: "7.98 CGPA",
    note: "Published a paper on the Analysis of EEG Based Emotion Detection of DEAP and SEED-IV Databases using SVM",
  },
]

export function EducationSection() {
  return (
    <section className="py-20 px-6 bg-card">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-10">Education</h2>

        <div className="grid gap-6 md:grid-cols-2">
          {education.map((edu, index) => (
            <Card key={index} className="border shadow-sm">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-foreground leading-tight">{edu.degree}</h3>
                <p className="text-primary font-medium mt-1">{edu.school}</p>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <span>{edu.location}</span>
                  <span>•</span>
                  <span>{edu.year}</span>
                  <span>•</span>
                  <span>{edu.grade}</span>
                </div>
                {edu.note && (
                  <p className="mt-3 text-sm text-muted-foreground italic border-l-2 border-primary/30 pl-3">
                    {edu.note}
                  </p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
