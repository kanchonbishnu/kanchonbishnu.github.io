import { Card, CardTitle } from "@/components/ui/card";
import { Brain, Shield, Heart, Battery, Globe } from "lucide-react";

const areas = [
  {
    icon: Brain,
    title: "Health Informatics",
    description: "AI-driven diagnostic frameworks for Parkinson's, Alzheimer's, diabetes, cardiovascular disease, and skin cancer using deep learning and vision transformers.",
  },
  {
    icon: Shield,
    title: "Cybersecurity Analytics",
    description: "Machine learning models for cryptocurrency fraud detection, threat prediction, intrusion analysis, and suspicious behavior modeling.",
  },
  {
    icon: Heart,
    title: "Medical Imaging",
    description: "Advanced multimodal fusion techniques for medical diagnosis and healthcare automation using deep learning architectures.",
  },
  {
    icon: Battery,
    title: "Energy Forecasting",
    description: "Electric vehicle adoption modeling and sustainable AI approaches using Bayesian neural networks and predictive analytics.",
  },
  {
    icon: Globe,
    title: "Sustainable AI",
    description: "Research on intelligent systems aligned with global development goals and environmental sustainability.",
  },
];

const ResearchAreas = () => {
  return (
    <section id="research" data-animate className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Research</p>
          <h2 className="mt-3 text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Exploring Intelligent Systems
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Grounded in multi-disciplinary collaborations spanning biomedical AI, cybersecurity, and sustainable intelligence.
          </p>
        </div>
        <div className="grid max-w-6xl mx-auto gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/70 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60"
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: 'linear-gradient(135deg, hsla(200,95%,35%,0.15), hsla(185,65%,55%,0.1))' }} />
                <div className="relative z-10">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                  <p className="mt-3 text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
