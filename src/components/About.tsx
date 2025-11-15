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
                I am <strong className="text-foreground">Kanchon Kumar Bishnu</strong>, a 27-year-old <strong className="text-foreground">AI Research Scientist, Software Engineer, and Cybersecurity Specialist</strong> with a research focus that spans artificial intelligence, machine learning, biomedical computation, and security analytics. My work aims to advance intelligent systems capable of addressing complex real-world challenges in healthcare, cybersecurity, and sustainable technologies.
              </p>
              <p>
                I have authored over <strong className="text-foreground">15 peer-reviewed research publications</strong> in globally recognized journals, including IEEE Access, IEEE Open Journal of the Computer Society, Elsevier, MDPI, Springer Nature, and Tech Science Press. My research contributions cover areas such as neurodegenerative disease detection, cardiovascular risk modeling, medical image analysis, cybersecurity threat intelligence, financial fraud detection, and energy consumption forecasting.
              </p>
              <p>
                In addition to my research output, I serve on the <strong className="text-foreground">Editorial Board of the Journal of Neuroscience and Clinical Neurology</strong> and actively review manuscripts for several high-impact journals, including Elsevier, PLOS ONE, and IOS Press (Journal of Alzheimer's Disease). I am also the holder of a <strong className="text-foreground">UK-approved patent</strong>, reflecting my dedication to innovation and the practical application of advanced computational techniques.
              </p>
              <p>
                My scientific accomplishments have been recognized by my election as an <strong className="text-foreground">Associate Member of Sigma Xi, The Scientific Research Honor Society</strong>, one of the most prestigious scientific organizations supporting global research excellence. I am currently pursuing my Master of Science in Computer Science at <strong className="text-foreground">California State University, Los Angeles</strong>, where my work focuses on advanced AI architectures, explainable machine learning, and ethical, human-centered intelligent systems.
              </p>
              <p>
                I am committed to pushing the boundaries of scientific discovery and developing technologies that contribute meaningfully to society, improve human well-being, and shape the future of AI research.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
