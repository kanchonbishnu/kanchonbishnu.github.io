import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const achievements = [
  { value: "15+", label: "Peer-reviewed publications" },
  { value: "3", label: "Research domains" },
  { value: "6", label: "Editorial & reviewer roles" },
  { value: "1", label: "Patent granted" },
];

const commitments = [
  "Sigma Xi Associate Member",
  "Editorial Board, Journal of Neuroscience and Clinical Neurology",
  "Certified reviewer for Elsevier, PLOS ONE, IOS Press",
  "MS in Computer Science @ Cal State LA",
];

const About = () => {
  return (
    <section id="about" data-animate className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">About</p>
          <h2 className="mt-3 text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            The Researcher Behind the Work
          </h2>
        </div>
        <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <Card className="relative overflow-hidden rounded-3xl border border-white/40 bg-white/80 p-8 shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
            <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary" />
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I am <strong className="text-foreground">Kanchon Kumar Bishnu</strong>, a <strong className="text-foreground">27-year-old AI Research Scientist, Software Engineer, and Cybersecurity Specialist</strong>. My work blends biomedical computation with intelligent automation to tackle complex problems across healthcare, security, and sustainable technologies.
              </p>
              <p>
                I have authored <strong className="text-foreground">15+ peer-reviewed research publications</strong> spanning IEEE Access, IEEE Open Journal of the Computer Society, Elsevier, MDPI, Springer Nature, and Tech Science Press. These studies explore neurodegenerative disease detection, cardiovascular risk modeling, medical imaging, cybersecurity threat intelligence, and financial fraud detection.
              </p>
              <p>
                Beyond publishing, I serve on the <strong className="text-foreground">Editorial Board of the Journal of Neuroscience and Clinical Neurology</strong>, actively review for Elsevier, PLOS ONE, and IOS Press, and hold a <strong className="text-foreground">UK-approved patent</strong> focused on intelligent automation.
              </p>
              <p>
                As an <strong className="text-foreground">Associate Member of Sigma Xi</strong> pursuing my MS in Computer Science at <strong className="text-foreground">California State University, Los Angeles</strong>, my current research centers on explainable machine learning, ethical intelligent systems, and trustworthy AI for health.
              </p>
            </div>
          </Card>

          <div className="space-y-6">
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-6 shadow-lg">
              <p className="text-sm uppercase tracking-[0.4em] text-primary">Impact by the numbers</p>
              <div className="mt-6 grid grid-cols-2 gap-6">
                {achievements.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-white/40 bg-white/60 p-4 text-center shadow-sm backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
                    <p className="text-3xl font-semibold text-foreground">{item.value}</p>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card className="rounded-3xl border border-border/60 bg-card/80 p-6 shadow-lg backdrop-blur">
              <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Commitments</p>
              <div className="mt-4 space-y-3">
                {commitments.map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {["Health AI", "Cybersecurity Analytics", "Sustainable Systems"].map((tag) => (
                  <Badge key={tag} variant="secondary" className="rounded-full px-4 py-1 text-xs uppercase tracking-wide">
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
