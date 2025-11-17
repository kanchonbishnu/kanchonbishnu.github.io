import { Card, CardTitle } from "@/components/ui/card";
import { Briefcase, GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "AI Research Scientist",
    organization: "California State University, Los Angeles",
    period: "Present",
    location: "Los Angeles, CA",
    description: "Leading research in Machine Learning, Health Informatics, Cybersecurity Analytics, and Data-driven automation. Published 15+ peer-reviewed papers in leading journals.",
  },
  {
    title: "Project Associate",
    organization: "Quantanite Bangladesh Ltd",
    period: "Feb 2023 - Jul 2023",
    location: "Dhaka, Bangladesh",
    description: "Data collection, quality assurance, statistical analysis, report generation, and workflow automation with focus on data security and privacy.",
  },
  {
    title: "Web Developer Intern",
    organization: "Coursecab Pvt. Ltd",
    period: "Feb 2022 - Jul 2022",
    location: "Dhaka, Bangladesh",
    description: "Designed responsive UIs using HTML, CSS, and JavaScript. Collaborated on web application development following best practices.",
  },
];

const education = [
  {
    degree: "MS in Computer Science",
    institution: "California State University, Los Angeles",
    period: "Aug 2023 - Present",
    gpa: "CGPA: 3.02/4.00",
  },
  {
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Lovely Professional University, Punjab, India",
    period: "Jul 2018 - Aug 2022",
    gpa: "CGPA: 7.39/10.0 (WES: 3.31/4.00)",
  },
  {
    degree: "Higher Secondary (Science)",
    institution: "Notre Dame College, Dhaka, Bangladesh",
    period: "Jun 2015 - Jul 2017",
    gpa: "GPA: 5.00/5.00",
  },
];

const Experience = () => {
  return (
    <section id="experience" data-animate className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Journey</p>
          <h2 className="mt-3 text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Experience & Education
          </h2>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Work Experience</p>
            <div className="mt-8 space-y-10">
              {experiences.map((exp, index) => (
                <div key={exp.title} className="flex gap-6">
                  <div className="flex flex-col items-center">
                    <span className="relative flex h-6 w-6 items-center justify-center rounded-full border-2 border-primary/50 bg-background shadow-sm">
                      <span className="h-3 w-3 rounded-full bg-gradient-to-r from-primary to-secondary" />
                    </span>
                    {index !== experiences.length - 1 && (
                      <span className="mt-2 w-px flex-1 rounded-full bg-gradient-to-b from-primary/40 to-transparent" />
                    )}
                  </div>
                  <Card className="flex-1 rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <CardTitle className="text-xl">{exp.title}</CardTitle>
                        <p className="mt-1 text-sm font-semibold text-primary">{exp.organization}</p>
                      </div>
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                        <Briefcase className="h-4 w-4" />
                        {exp.period}
                      </span>
                    </div>
                    <div className="mt-3 flex flex-wrap gap-2 text-sm text-muted-foreground">
                      <span>{exp.location}</span>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed">{exp.description}</p>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Education</p>
            <div className="mt-8 space-y-6">
              {education.map((edu) => (
                <Card key={edu.degree} className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                      <GraduationCap className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{edu.degree}</CardTitle>
                      <p className="mt-1 font-semibold text-primary">{edu.institution}</p>
                      <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
                        <span>{edu.period}</span>
                        <span>•</span>
                        <span className="font-semibold">{edu.gpa}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
