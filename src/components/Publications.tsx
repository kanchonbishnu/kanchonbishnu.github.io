import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, FileCheck } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "15+ Peer-Reviewed Papers",
    description: "Published in leading journals including IEEE Access, IEEE Open Journal of Computer Society, Elsevier, MDPI, Springer Nature, and Tech Science Press.",
  },
  {
    icon: Award,
    title: "Q1 Journal Publications",
    description: "Multiple publications in top-tier Q1-ranked journals with high impact factors and international recognition.",
  },
  {
    icon: FileCheck,
    title: "Certified Reviewer",
    description: "Active reviewer for Elsevier journals (Computers & Electrical Engineering, Biomedical Signal Processing and Control), PLOS ONE, and Journal of Alzheimer's Disease.",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Publications & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contributing to the advancement of AI research and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-4xl mx-auto shadow-lg border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Research Domains</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Healthcare AI</h3>
                <p className="text-muted-foreground mb-3">
                  AI-driven studies on Parkinson's, Alzheimer's, Diabetes, Cardiovascular, and Skin Cancer detection in medical imaging using deep learning and vision transformers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Deep Learning</Badge>
                  <Badge>Medical Imaging</Badge>
                  <Badge>Disease Diagnosis</Badge>
                  <Badge>Vision Transformers</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Cybersecurity</h3>
                <p className="text-muted-foreground mb-3">
                  AI-based cybersecurity, cryptocurrency fraud detection, threat modeling, and e-commerce analytics using machine learning.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Fraud Detection</Badge>
                  <Badge>Cryptocurrency</Badge>
                  <Badge>Threat Analysis</Badge>
                  <Badge>Network Security</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Sustainable Systems</h3>
                <p className="text-muted-foreground mb-3">
                  Energy forecasting, electric vehicle adoption modeling, and sustainable AI approaches aligned with global development goals.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Energy Systems</Badge>
                  <Badge>Sustainability</Badge>
                  <Badge>Predictive Modeling</Badge>
                  <Badge>Green AI</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <Card className="inline-block px-8 py-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-2">
            <div className="flex items-center gap-4">
              <Award className="h-12 w-12 text-primary" />
              <div className="text-left">
                <h3 className="font-bold text-xl text-foreground">UK Patent Holder</h3>
                <p className="text-muted-foreground">Computer Science Innovation</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Publications;
