import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across AI, data science, and cybersecurity
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-lg hover:shadow-xl transition-shadow border-2">
              <CardHeader>
                <CardTitle className="text-xl flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-secondary"></span>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className="px-3 py-1 hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
