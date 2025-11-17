import { Badge } from "@/components/ui/badge";
import { Card, CardTitle } from "@/components/ui/card";

const skillCategories = [
  {
    title: "Programming & Tools",
    skills: ["Python", "C++", "JavaScript", "HTML", "CSS", "Git", "Linux", "LaTeX", "Jupyter Notebook", "Google Colab"],
  },
  {
    title: "Machine Learning & AI",
    skills: ["TensorFlow", "PyTorch", "scikit-learn", "Keras", "CNN", "LSTM", "Vision Transformers", "PCA", "UMAP", "Genetic Algorithms", "SHAP", "LIME"],
  },
  {
    title: "Data Science & Analytics",
    skills: ["NumPy", "pandas", "Matplotlib", "Seaborn", "Plotly", "Statistical Modeling", "Data Visualization"],
  },
  {
    title: "Cybersecurity",
    skills: ["Network Analysis", "Threat Detection", "Intrusion Detection", "Secure Software Development", "Cryptocurrency Fraud Detection"],
  },
  {
    title: "Health Informatics",
    skills: ["Medical Imaging", "Diagnostic AI", "Disease Prediction", "Healthcare Analytics"],
  },
];

const Skills = () => {
  return (
    <section id="skills" data-animate className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Capabilities</p>
          <h2 className="mt-3 text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Technical Stack
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A multi-disciplinary toolkit across research, engineering, and analytics.
          </p>
        </div>
        <div className="grid max-w-6xl mx-auto gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Card
              key={index}
              className="rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl transition-all hover:-translate-y-1 hover:shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60"
            >
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-gradient-to-r from-primary to-secondary" />
                  {category.title}
                </CardTitle>
                <span className="text-xs uppercase tracking-[0.4em] text-muted-foreground">Core</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skillIndex}
                    variant="secondary"
                    className="rounded-full border border-primary/20 bg-white/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-foreground shadow-sm transition-colors hover:bg-primary hover:text-primary-foreground dark:bg-slate-900/50"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
