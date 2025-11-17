import { Card, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink, Facebook, Instagram } from "lucide-react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "kbishnu@calstatela.edu",
    href: "mailto:kbishnu@calstatela.edu",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (213) 554-7452",
    href: "tel:+12135547452",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Los Angeles, CA",
    href: null,
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kanchonkumarbishnu/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/kanchonbishnu",
  },
  {
    icon: ExternalLink,
    label: "Google Scholar",
    href: "https://scholar.google.com/citations?user=_3JpA_YAAAAJ&hl=en",
  },
  {
    icon: ExternalLink,
    label: "ResearchGate",
    href: "https://www.researchgate.net/profile/Kanchon-Bishnu",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://www.facebook.com/kanchonkumar.bishnu/",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "http://instagram.com/kanchon_bishnu/",
  },
];

const availability = [
  { label: "Collaborations", value: "Open to research + consulting partnerships" },
  { label: "Response Time", value: "Within 24 hours" },
  { label: "Current City", value: "Los Angeles, CA" },
];

const Contact = () => {
  return (
    <section id="contact" data-animate className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Connect</p>
          <h2 className="mt-3 text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Let's Build Something Meaningful
          </h2>
          <p className="text-xl text-muted-foreground">
            Research collaborations, speaking engagements, or AI-driven initiatives.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="rounded-3xl border border-white/40 bg-white/80 p-8 shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60">
            <div className="pb-6 text-left">
              <CardTitle className="text-3xl">Contact Information</CardTitle>
              <p className="mt-2 text-muted-foreground">Always excited to discuss purposeful technology.</p>
            </div>
            <div className="space-y-8">
              <div className="grid gap-6 md:grid-cols-3">
                {contactInfo.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.label} className="rounded-2xl border border-border/60 bg-muted/40 p-4 text-center">
                      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                        <Icon className="h-6 w-6" />
                      </div>
                      <p className="text-xs uppercase tracking-[0.4em] text-muted-foreground">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="mt-1 block font-semibold text-foreground hover:text-primary">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-1 font-semibold text-foreground">{item.value}</p>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="rounded-3xl border border-border/60 bg-muted/30 p-6">
                <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground text-center">Social</p>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <Button
                        key={link.label}
                        variant="outline"
                        size="lg"
                        asChild
                        className="w-full justify-start rounded-2xl border border-border/70 text-left text-sm hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                      >
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <Icon className="mr-3 h-5 w-5" />
                          {link.label}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>

              <div className="text-center">
                <Button
                  size="lg"
                  className="rounded-full bg-gradient-to-r from-primary to-secondary px-8 py-6 text-lg font-semibold shadow-lg hover:opacity-90"
                  asChild
                >
                  <a href="mailto:kbishnu@calstatela.edu">
                    <Mail className="mr-2 h-5 w-5" />
                    Send a direct email
                  </a>
                </Button>
              </div>
            </div>
          </Card>

          <Card className="rounded-3xl border border-border/60 bg-white/95 p-8 text-left text-foreground shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/80 dark:text-white">
            <div>
              <CardTitle className="text-2xl">Availability</CardTitle>
              <p className="mt-2 text-sm text-muted-foreground">
                Current openings for collaborations, advisory roles, and speaking engagements.
              </p>
            </div>
            <div className="mt-6 space-y-5">
              {availability.map((item) => (
                <div key={item.label} className="rounded-2xl border border-border/60 bg-muted/50 p-5">
                  <p className="text-sm font-semibold text-foreground">{item.label}</p>
                  <p className="mt-1 text-base text-muted-foreground">{item.value}</p>
                </div>
              ))}
              <div className="rounded-2xl border border-border/60 bg-muted/50 p-5">
                <p className="text-base text-foreground">
                  Currently collaborating on AI for health diagnostics, cybersecurity analytics, and sustainable intelligent systems.
                </p>
                <p className="mt-3 text-sm font-semibold text-primary">Let's align goals →</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
