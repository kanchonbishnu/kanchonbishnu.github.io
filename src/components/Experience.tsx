import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Work Experience */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Work Experience
              </h2>
            </div>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all border-2">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <Briefcase className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                        <p className="text-primary font-semibold">{exp.organization}</p>
                        <div className="flex flex-wrap gap-2 mt-2 text-sm text-muted-foreground">
                          <span>{exp.period}</span>
                          <span>•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Education
              </h2>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="shadow-lg hover:shadow-xl transition-all border-2">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                        <p className="text-primary font-semibold">{edu.institution}</p>
                        <div className="flex flex-wrap gap-2 mt-2 text-sm text-muted-foreground">
                          <span>{edu.period}</span>
                          <span>•</span>
                          <span className="font-semibold">{edu.gpa}</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
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
