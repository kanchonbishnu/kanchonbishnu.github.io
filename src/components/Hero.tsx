import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, FileText, Download } from "lucide-react";
import profilePhoto from "@/assets/kanchon-photo.jpeg";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-secondary/5">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium">
                AI Research Scientist
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
              Kanchon Kumar{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Bishnu
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Advancing intelligent systems through Machine Learning, Health Informatics, and Cybersecurity Analytics at California State University, Los Angeles
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                asChild
              >
                <a href="#contact">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="#publications">
                  <FileText className="mr-2 h-5 w-5" />
                  View Publications
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/Kanchon-Kumar-Bishnu_CV.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a 
                href="https://www.linkedin.com/in/kanchon-kumar-bishnu" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all shadow-md hover:shadow-lg"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/kanchon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all shadow-md hover:shadow-lg"
              >
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile photo */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={profilePhoto}
                alt="Kanchon Kumar Bishnu"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-8 border-card shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
