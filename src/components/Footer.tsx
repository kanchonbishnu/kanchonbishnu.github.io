import {
  Github,
  Linkedin,
  Mail,
  Facebook,
  Instagram,
  ExternalLink,
} from "lucide-react";

const Footer = () => {
  return (
    <footer data-animate className="mt-10 bg-gradient-to-b via-muted to-muted/90 py-12 dark:from-slate-900/80 dark:via-slate-950 dark:to-black">
      <div className="container mx-auto px-6">
        <div className="rounded-3xl border border-white/30 bg-white/90 px-8 py-6 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/80">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-secondary p-[1px]">
                  <div className="flex h-full w-full items-center justify-center rounded-[1rem] bg-background text-sm font-semibold text-primary">
                    KB
                  </div>
                </div>
                <div>
                  <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
                    Kanchon Kumar Bishnu
                  </p>
                  <p className="text-muted-foreground">
                    AI Research Scientist • California State University, Los
                    Angeles
                  </p>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                © {new Date().getFullYear()} All rights reserved. Crafted with
                curiosity and rigorous experimentation.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                {
                  href: "https://www.linkedin.com/in/kanchonkumarbishnu/",
                  label: "LinkedIn",
                  icon: Linkedin,
                },
                {
                  href: "https://github.com/kanchonbishnu",
                  label: "GitHub",
                  icon: Github,
                },
                {
                  href: "https://www.researchgate.net/profile/Kanchon-Bishnu",
                  label: "ResearchGate",
                  icon: ExternalLink,
                },
                {
                  href: "https://www.facebook.com/kanchonkumarbishnu",
                  label: "Facebook",
                  icon: Facebook,
                },
                {
                  href: "https://www.instagram.com/kanchonkumarbishnu",
                  label: "Instagram",
                  icon: Instagram,
                },
                {
                  href: "mailto:kbishnu@calstatela.edu",
                  label: "Email",
                  icon: Mail,
                },
              ].map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label === "Email" ? undefined : "_blank"}
                  rel={label === "Email" ? undefined : "noopener noreferrer"}
                  aria-label={label}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 px-4 py-2 text-sm text-muted-foreground transition-all hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
