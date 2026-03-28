import { Card, CardTitle } from "@/components/ui/card";
import { BadgeCheck } from "lucide-react";

const certifications = [
  {
    title: "NDG Linux Essentials",
    issuer: "Linux Professional Institute",
    category: "Systems",
  },
  {
    title: "Cisco Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    category: "Cybersecurity",
  },
  {
    title: "Crash Course on Python",
    issuer: "Coursera / Google",
    category: "Programming",
  },
  {
    title: "Open Source Software Development, Linux and Git Specialization",
    issuer: "Coursera / Linux Foundation",
    category: "Development",
  },
  {
    title: "Marketing in a Digital World",
    issuer: "Coursera / University of Illinois",
    category: "Business",
  },
  {
    title: "OOP using Python",
    issuer: "E-Box",
    category: "Programming",
  },
];

const categoryColors: Record<string, string> = {
  Systems: "bg-blue-500/10 text-blue-600 border-blue-500/20 dark:text-blue-400",
  Cybersecurity: "bg-red-500/10 text-red-600 border-red-500/20 dark:text-red-400",
  Programming: "bg-green-500/10 text-green-600 border-green-500/20 dark:text-green-400",
  Development: "bg-purple-500/10 text-purple-600 border-purple-500/20 dark:text-purple-400",
  Business: "bg-orange-500/10 text-orange-600 border-orange-500/20 dark:text-orange-400",
};

const Certifications = () => {
  return (
    <section id="certifications" data-animate className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Credentials</p>
          <h2 className="mt-3 text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Certifications
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Verified professional credentials across systems, cybersecurity, and software development.
          </p>
        </div>
        <div className="grid max-w-6xl mx-auto gap-6 md:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <Card
              key={cert.title}
              className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/80 p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{ background: "linear-gradient(135deg, hsla(195,85%,50%,0.08), hsla(275,85%,60%,0.08))" }} />
              <div className="relative z-10">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                    <BadgeCheck className="h-6 w-6" />
                  </div>
                  <span className={`rounded-full border px-3 py-1 text-xs font-semibold ${categoryColors[cert.category] ?? "bg-muted text-muted-foreground border-border"}`}>
                    {cert.category}
                  </span>
                </div>
                <CardTitle className="mt-4 text-base leading-snug">{cert.title}</CardTitle>
                <p className="mt-2 text-sm text-muted-foreground">{cert.issuer}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
