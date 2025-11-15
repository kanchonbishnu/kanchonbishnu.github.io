import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            About Me
          </h2>
          <Card className="p-8 shadow-lg border-2 hover:shadow-xl transition-shadow">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I am an <strong className="text-foreground">AI Research Scientist</strong> in the Department of Computer Science at <strong className="text-foreground">California State University, Los Angeles</strong>, where my work focuses on advancing intelligent systems through machine learning, health informatics, cybersecurity analytics, and data-driven automation.
              </p>
              <p>
                With more than <strong className="text-foreground">fifteen peer-reviewed publications</strong> in leading journals—including IEEE Access, IEEE Open Journal of the Computer Society, Elsevier, MDPI, Springer Nature, and Tech Science Press—I actively contribute to interdisciplinary research bridging computer science, healthcare, financial security, and sustainable intelligent systems.
              </p>
              <p>
                My research contributions span advanced diagnostic frameworks for Parkinson's disease, Alzheimer's disease, diabetes mellitus, cardiovascular disease, and skin cancer using deep learning, vision transformers, and multimodal fusion. In parallel, I work extensively in cybersecurity and digital forensics, developing machine learning–based models for cryptocurrency fraud detection, threat prediction, intrusion analysis, and suspicious behavior modeling.
              </p>
              <p>
                I actively contribute to the scholarly community as a <strong className="text-foreground">certified reviewer</strong> for multiple Q1 journals, including Elsevier's Computers & Electrical Engineering and Biomedical Signal Processing and Control, PLOS ONE, and the Journal of Alzheimer's Disease published by IOS Press. I also hold a <strong className="text-foreground">UK-approved patent</strong> in computer science innovation.
              </p>
              <p>
                My long-term vision is to contribute to impactful scientific innovation, support high-quality editorial and peer-review standards, and expand the application of artificial intelligence across healthcare, security, and sustainability to address real-world global challenges.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
