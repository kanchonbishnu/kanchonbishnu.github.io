import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <section id="research" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Research Areas
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Exploring the intersection of AI, healthcare, and security
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {areas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{area.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {area.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ResearchAreas;
