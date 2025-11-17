import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin, FileText, Download } from "lucide-react";
import profilePhoto from "@/assets/kanchon-photo.jpeg";

const focusAreas = [
  "Responsible AI",
  "Health Informatics",
  "Cybersecurity",
  "Explainable ML",
];

const stats = [
  { value: "15+", label: "Peer-reviewed Papers" },
  { value: "5", label: "Years of Research" },
  { value: "6", label: "Active Collaborations" },
];

const Hero = () => {
  return (
    <section data-animate className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-primary/5 to-background">
      {/* 3D Grid Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--primary) / 0.1) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--primary) / 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
          transform: 'perspective(500px) rotateX(60deg)',
          transformOrigin: 'center top'
        }}></div>
      </div>

      {/* Animated geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Rotating hexagon */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border-2 border-primary/20 animate-spin" style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
          animationDuration: '20s'
        }}></div>
        
        {/* Pulsing circles with neon glow */}
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full border-4 border-secondary/30 animate-pulse" 
             style={{ boxShadow: '0 0 40px hsl(var(--secondary) / 0.5)' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 rounded-full border-4 border-accent/20 animate-pulse" 
             style={{ boxShadow: '0 0 60px hsl(var(--accent) / 0.4)', animationDelay: '1s' }}></div>
        
        {/* 3D Cubes */}
        <div className="absolute top-1/2 right-1/3 w-32 h-32 border-2 border-primary/30 rotate-45 animate-pulse" 
             style={{ 
               transform: 'rotate(45deg) perspective(300px) rotateY(45deg)',
               animationDuration: '3s'
             }}></div>
             
        {/* Scan lines effect */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(var(--primary)) 2px, hsl(var(--primary)) 4px)',
          animation: 'scan 8s linear infinite'
        }}></div>
      </div>

      <style>{`
        @keyframes scan {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(100%); }
        }
      `}</style>

      <div className="container relative z-10 mx-auto px-6 py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-block">
              <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20 relative overflow-hidden">
                <span className="relative z-10">AI Research Scientist</span>
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></span>
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight relative">
              <span className="relative inline-block">
                Kanchon Kumar{" "}
                <span className="bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent relative">
                  Bishnu
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" 
                        style={{ boxShadow: 'var(--shadow-neon)' }}></span>
                </span>
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Advancing intelligent systems through Machine Learning, Health Informatics, and Cybersecurity Analytics at California State University, Los Angeles
            </p>
            <div className="flex flex-wrap gap-3">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-medium text-primary"
                >
                  {area}
                </span>
              ))}
            </div>
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
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all shadow-md hover:shadow-lg border border-primary/20 relative overflow-hidden group"
              >
                <Linkedin className="h-5 w-5 relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
              <a 
                href="https://github.com/kanchon" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all shadow-md hover:shadow-lg border border-primary/20 relative overflow-hidden group"
              >
                <Github className="h-5 w-5 relative z-10" />
                <span className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity"></span>
              </a>
            </div>
          </div>

          {/* Profile photo with 3D effect */}
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              {/* 3D layered frames */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur-xl opacity-50 animate-pulse"></div>
              <div className="absolute -inset-2 border-4 border-primary/30 rounded-3xl" 
                   style={{ transform: 'translateZ(-20px) rotate(5deg)' }}></div>
              <div className="absolute -inset-1 border-2 border-secondary/20 rounded-3xl" 
                   style={{ transform: 'translateZ(-10px) rotate(-3deg)' }}></div>
              
              {/* Corner accents */}
              <div className="absolute -top-2 -left-2 w-8 h-8 border-l-4 border-t-4 border-primary"></div>
              <div className="absolute -top-2 -right-2 w-8 h-8 border-r-4 border-t-4 border-secondary"></div>
              <div className="absolute -bottom-2 -left-2 w-8 h-8 border-l-4 border-b-4 border-secondary"></div>
              <div className="absolute -bottom-2 -right-2 w-8 h-8 border-r-4 border-b-4 border-accent"></div>
              
              {/* Main photo container with 3D shadow */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-card" 
                   style={{ 
                     boxShadow: 'var(--shadow-3d)',
                     transform: 'perspective(1000px) rotateY(-5deg)'
                   }}>
                <img
                  src={profilePhoto}
                  alt="Kanchon Kumar Bishnu - AI Research Scientist"
                  className="w-80 h-80 md:w-96 md:h-96 object-cover"
                />
                
                {/* Tech overlay effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 pointer-events-none"></div>
              </div>

              <div className="absolute -left-10 bottom-10 w-48 rounded-2xl border border-white/50 bg-white/70 p-5 text-sm shadow-xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
                <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Currently exploring</p>
                <p className="mt-2 text-base font-semibold text-foreground">Multimodal AI for Parkinson's detection</p>
                <p className="mt-1 text-xs text-muted-foreground">California State University, Los Angeles</p>
              </div>

              {/* Floating particles */}
              <div className="absolute top-1/4 -left-8 w-2 h-2 bg-primary rounded-full animate-ping"></div>
              <div className="absolute top-3/4 -right-8 w-2 h-2 bg-secondary rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              <div className="absolute top-1/2 -right-12 w-2 h-2 bg-accent rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>
        </div>
        <div className="mt-10 grid gap-4 rounded-3xl border bg-card/80 p-6 shadow-lg backdrop-blur sm:grid-cols-3">
          {stats.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-3xl font-bold text-foreground">{item.value}</p>
              <p className="text-sm font-medium text-muted-foreground">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
