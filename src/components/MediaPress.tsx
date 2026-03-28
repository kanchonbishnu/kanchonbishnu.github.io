import { Card, CardTitle } from "@/components/ui/card";
import { ExternalLink, Newspaper } from "lucide-react";

const pressFeatures = [
  {
    outlet: "Prothom Alo",
    outletBn: "প্রথম আলো",
    type: "National Daily — Bangladesh's Largest Newspaper",
    date: "March 25, 2026",
    headlineBn: "নিরাপদ এআই উন্নয়নে বিশ্বমঞ্চে নটর ডেম কলেজের কাঞ্চন কুমার",
    headlineEn: "Notre Dame College's Kanchon Kumar on the Global Stage in Safe AI Development",
    excerpt:
      "A feature profile on Kanchon Kumar Bishnu's journey from Notre Dame College, Dhaka to international AI research at California State University, Los Angeles — covering his work on trustworthy, explainable AI for healthcare diagnostics and cybersecurity.",
    quote: "\"Technology advances successfully when applied trustworthily for human welfare.\"",
    thumbnail: "https://media.prothomalo.com/prothomalo-bangla/2026-03-24/j69bzmx1/1.jpeg?w=1200&h=675&auto=format%2Ccompress&fit=max",
    url: "https://www.prothomalo.com/education/higher-education/2ip8vejtks",
  },
  {
    outlet: "Kalbela",
    outletBn: "কালবেলা",
    type: "National Daily — Bangladesh",
    date: "March 9, 2026",
    headlineBn: "কৃত্রিম বুদ্ধিমত্তা উন্নয়নে বিশ্বমঞ্চে বাংলাদেশি গবেষক কাঞ্চন কুমার বিষ্ণু",
    headlineEn: "Bangladeshi Researcher Kanchon Kumar Bishnu on the Global Stage in AI Development",
    excerpt:
      "Highlights Kanchon's research on uncertainty-aware clinical AI achieving 97%+ accuracy in neurodegenerative disease detection, his work on Bayesian neural networks, cybersecurity threat analysis, and his growing international recognition through patents, editorial roles, and publications in IEEE, Nature, and Elsevier.",
    quote: "\"Meaningful progress in AI comes when it earns the trust of the people it serves.\"",
    thumbnail: "/kalbela-feature.png",
    url: "https://epaper.kalbela.com/?date=2026-03-09&page=12&news=12_110&edition=2",
  },
];

const MediaPress = () => {
  return (
    <section id="media" data-animate className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">Press</p>
          <h2 className="mt-3 text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Media & Press Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Featured in national newspapers for contributions to responsible AI research on the global stage.
          </p>
        </div>

        <div className="grid max-w-5xl mx-auto gap-8 md:grid-cols-2 items-start">
          {pressFeatures.map((item) => (
            <Card
              key={item.outlet}
              className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/80 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl backdrop-blur dark:border-white/10 dark:bg-slate-900/60 flex flex-col"
            >
              {/* Thumbnail */}
              {item.thumbnail ? (
                <div className="relative overflow-hidden rounded-t-3xl h-[440px] w-full">
                  <img
                    src={item.thumbnail}
                    alt={`${item.outlet} article thumbnail`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <span className="absolute bottom-3 left-4 rounded-full bg-black/60 backdrop-blur px-3 py-1 text-xs font-semibold text-white">
                    {item.date}
                  </span>
                </div>
              ) : (
                <div className="relative flex h-[440px] w-full items-center justify-center rounded-t-3xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 overflow-hidden">
                  <div className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 20px, currentColor 20px, currentColor 21px), repeating-linear-gradient(90deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)",
                    }}
                  />
                  <div className="relative text-center">
                    <Newspaper className="mx-auto h-16 w-16 text-primary/40" />
                    <p className="mt-2 text-sm font-semibold text-primary/60">{item.outletBn}</p>
                    <p className="text-xs text-muted-foreground">{item.date}</p>
                  </div>
                  <span className="absolute bottom-3 left-4 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-semibold text-primary">
                    {item.date}
                  </span>
                </div>
              )}

              {/* Top accent bar */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary to-secondary" />

              <div className="relative z-10 flex flex-col p-7">
                {/* Outlet header */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground shrink-0">
                      <Newspaper className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-foreground leading-tight">
                        {item.outlet}
                        <span className="ml-2 text-sm font-normal text-muted-foreground">
                          {item.outletBn}
                        </span>
                      </p>
                      <p className="text-xs text-muted-foreground">{item.type}</p>
                    </div>
                  </div>
                </div>

                {/* Bengali headline */}
                <p className="mt-4 text-base font-semibold text-foreground leading-snug">
                  {item.headlineBn}
                </p>
                {/* English translation */}
                <p className="mt-1 text-sm text-muted-foreground italic">
                  {item.headlineEn}
                </p>

                {/* Excerpt */}
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {item.excerpt}
                </p>

                {/* Quote */}
                <blockquote className="mt-4 border-l-4 border-primary/40 pl-4 text-sm text-foreground/80 italic">
                  {item.quote}
                </blockquote>

                {/* Read link */}
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  <ExternalLink className="h-4 w-4" />
                  Read full article
                </a>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MediaPress;
