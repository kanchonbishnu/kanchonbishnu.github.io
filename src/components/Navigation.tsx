import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Research", href: "#research" },
  { name: "Publications", href: "#publications" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-4 z-50 transition-all duration-500 ${
        isScrolled ? "scale-[0.98]" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        <div
          className={`flex items-center justify-between rounded-2xl border px-5 py-3 transition-all duration-300 md:px-8 ${
            isScrolled
              ? "bg-background/90 shadow-2xl backdrop-blur-xl"
              : "bg-background/60 shadow-lg backdrop-blur-md"
          }`}
        >
          <a href="#" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-secondary p-[1px]">
              <div className="flex h-full w-full items-center justify-center rounded-[1rem] bg-background text-lg font-bold text-primary">
                KB
              </div>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Research</p>
              <p className="text-xl font-semibold text-foreground">Kanchon Bishnu</p>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-1 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="group relative overflow-hidden rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:text-foreground"
              >
                <span className="absolute inset-0 rounded-full bg-muted opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
                <span className="relative z-10">{link.name}</span>
              </a>
            ))}
            <Button
              size="sm"
              className="ml-4 rounded-full bg-gradient-to-r from-primary to-secondary px-5 py-2 text-sm font-semibold shadow-lg hover:opacity-90"
              asChild
            >
              <a href="#contact">Get in Touch</a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="rounded-full p-3 text-muted-foreground transition-colors hover:bg-muted md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mt-3 rounded-2xl border bg-background/95 p-4 shadow-xl backdrop-blur md:hidden">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="rounded-xl px-4 py-2 text-sm font-medium text-muted-foreground transition-all hover:bg-muted hover:text-foreground"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <Button
                className="mx-4 mt-4 rounded-xl bg-gradient-to-r from-primary to-secondary"
                asChild
              >
                <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
                  Get in Touch
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
