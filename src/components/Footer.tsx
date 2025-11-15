import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 py-8 border-t">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-muted-foreground">
              © {new Date().getFullYear()} Kanchon Kumar Bishnu. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              AI Research Scientist • California State University, Los Angeles
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/kanchonkumarbishnu/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/kanchonbishnu"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="mailto:kbishnu@calstatela.edu"
              className="p-2 rounded-full bg-card hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
