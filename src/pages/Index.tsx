import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ResearchAreas from "@/components/ResearchAreas";
import Publications from "@/components/Publications";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useScrollReveal from "@/hooks/useScrollReveal";

const Index = () => {
  useScrollReveal();
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
      >
        <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full bg-primary/20 blur-[160px]" />
        <div className="absolute top-20 right-10 h-64 w-64 rounded-full bg-secondary/30 blur-[120px]" />
        <div className="absolute bottom-0 left-10 h-72 w-72 rounded-full bg-accent/30 blur-[160px]" />
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage:
              "linear-gradient(120deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 40%), linear-gradient(rgba(148,163,184,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.15) 1px, transparent 1px)",
            backgroundSize: "100% 100%, 120px 120px, 120px 120px",
            maskImage: "linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.65) 40%, rgba(255,255,255,0) 100%)",
          }}
        />
      </div>
      <div className="relative z-10">
        <Navigation />
        <main className="flex flex-col">
          <Hero />
          <About />
          <ResearchAreas />
          <Publications />
          <Skills />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
