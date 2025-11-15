import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, ExternalLink } from "lucide-react";

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
    href: "https://www.linkedin.com/in/kanchon-kumar-bishnu",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/kanchon",
  },
  {
    icon: ExternalLink,
    label: "Google Scholar",
    href: "https://scholar.google.com",
  },
  {
    icon: ExternalLink,
    label: "ResearchGate",
    href: "https://www.researchgate.net",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Get in Touch
            </h2>
            <p className="text-xl text-muted-foreground">
              Let's discuss research collaborations, opportunities, or projects
            </p>
          </div>

          <Card className="shadow-xl border-2">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-8">
              <div className="grid md:grid-cols-3 gap-6">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="w-14 h-14 mx-auto rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-3">
                        <Icon className="h-7 w-7 text-primary-foreground" />
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                      {item.href ? (
                        <a 
                          href={item.href}
                          className="font-semibold text-foreground hover:text-primary transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-semibold text-foreground">{item.value}</p>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="pt-6 border-t">
                <p className="text-center text-muted-foreground mb-6">
                  Connect with me on social platforms
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <Button
                        key={index}
                        variant="outline"
                        size="lg"
                        asChild
                        className="hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          <Icon className="mr-2 h-5 w-5" />
                          {link.label}
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>

              <div className="pt-6 text-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity"
                  asChild
                >
                  <a href="mailto:kbishnu@calstatela.edu">
                    <Mail className="mr-2 h-5 w-5" />
                    Send Email
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
