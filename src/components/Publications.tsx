import { Card, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, FileCheck, Mic, BookMarked } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "20+ Research Publications",
    description:
      "Peer-reviewed journal articles, IEEE conference proceedings, and scholarly book chapters in IEEE, Elsevier, MDPI, Nature Portfolio, and IGI Global.",
  },
  {
    icon: Award,
    title: "Q1 Journal Publications",
    description:
      "Top-tier Q1-ranked journals and international recognition across biomedical AI, security, and sustainability.",
  },
  {
    icon: FileCheck,
    title: "35+ Peer Reviews",
    description:
      "Editorial board member and active reviewer for PLOS ONE, Elsevier, Springer Nature, and SAGE across 6 journals.",
  },
];

const domains = [
  {
    title: "Healthcare AI",
    description:
      "AI-driven studies on Parkinson's, Alzheimer's, Diabetes, Cardiovascular, and Skin Cancer detection leveraging deep learning and vision transformers.",
    tags: [
      "Deep Learning",
      "Medical Imaging",
      "Disease Diagnosis",
      "Vision Transformers",
    ],
  },
  {
    title: "Cybersecurity",
    description:
      "Cryptocurrency fraud detection, threat modeling, and e-commerce analytics with predictive machine learning pipelines.",
    tags: [
      "Fraud Detection",
      "Cryptocurrency",
      "Threat Analysis",
      "Network Security",
    ],
  },
  {
    title: "Sustainable Systems",
    description:
      "Energy forecasting, electric vehicle adoption modeling, and sustainable AI approaches aligned with global development goals.",
    tags: [
      "Energy Systems",
      "Sustainability",
      "Predictive Modeling",
      "Green AI",
    ],
  },
];

const journalPublications = [
  {
    title:
      "Evaluation of Feature Transformation and Machine Learning Models on Early Detection of Diabetes Melitus",
    authors:
      "AA Linkon, IR Noman, MR Islam, JC Bortty, KK Bishnu, A Islam, R Hasan, et al.",
    journal: "IEEE Access",
    year: "2024",
    citations: 38,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:8k81kl-MbHgC",
  },
  {
    title:
      "Data-driven security: Improving autonomous systems through data analytics and cybersecurity",
    authors: "IR Noman, JC Bortty, KK Bishnu, MM Aziz, MR Islam",
    journal: "Journal of Computer Science and Technology Studies",
    year: "2022",
    citations: 24,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:2osOgNQ5qMEC",
  },
  {
    title:
      "Leveraging Machine Learning for Insights and Predictions in Synthetic E-Commerce Data in the USA: A Comprehensive Analysis",
    authors:
      "MR Islam, M Hossain, M Alam, MM Khan, MM Karim, MFR Rabbi, KK Bishnu, et al.",
    journal: "Journal of Ecohumanism",
    year: "2025",
    citations: 15,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:WF5omc3nYNoC",
  },
  {
    title:
      "Detecting Cryptocurrency Scams in the USA: A Machine Learning-Based Analysis of Scam Patterns and Behaviors",
    authors: "BC Das, B Sarker, A Saha, KK Bishnu, B Chandra",
    journal: "Journal of Ecohumanism",
    year: "2025",
    citations: 14,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:W7OEmFMy1HYC",
  },
  {
    title:
      "A Novel Data-Driven Multi-Branch LSTM Architecture with Attention Mechanisms for Forecasting Electric Vehicle Adoption",
    authors: "MM Rahaman, MR Islam, MMTG Manik, MM Aziz, IR Noman, KK Bishnu, et al.",
    journal: "World Electric Vehicle Journal",
    year: "2025",
    citations: 5,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:UebtZRa9Y70C",
  },
  {
    title:
      "A novel diagnostic framework with an optimized ensemble of vision transformers and convolutional neural networks for enhanced Alzheimer's disease detection in medical imaging",
    authors:
      "J Chakra Bortty, GS Chakraborty, IR Noman, S Batra, J Das, KK Bishnu, et al.",
    journal: "Diagnostics",
    year: "2025",
    citations: 5,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:Tyk-4Ss8FVUC",
  },
  {
    title:
      "Identification of Cardiovascular Disease via Diverse Machine Learning Methods",
    authors: "A Islam, MA Saleh, AF Tasnim, M Samiun, SK Noor, KK Bishnu",
    journal: "Journal of Computer and Communications",
    year: "2024",
    citations: 2,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:IjCSPb-OGe4C",
  },
  {
    title:
      "Deep learning approaches for the identification and classification of skin cancer",
    authors: "KK Bishnu, MA Saleh, S Hossain, JF Mou, MMTG Manik, A Islam",
    journal: "Journal of Computer and Communications",
    year: "2024",
    citations: 2,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:UeHWp8X0CEIC",
  },
  {
    title:
      "A Physics-Guided Bayesian Neural Network for Sensor Fault Detection in Wind Turbines",
    authors:
      "MDA Khan, A Rahman, FU Mahmud, KK Bishnu, HR Nabil, MF Mridha, et al.",
    journal: "IEEE Open Journal of the Computer Society",
    year: "2025",
    citations: 1,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:eQOLeE2rZwMC",
  },
  {
    title:
      "Efficient Multi-Modal Fusion Framework with Advanced AI-Driven Approaches for Automated Parkinson's Disease Detection",
    authors: "GS Chakraborty, JC Bortty, J Das, IR Noman, KK Bishnu, A Islam",
    journal: "Intelligence-Based Medicine",
    year: "2025",
    citations: 0,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:KlAtU1dfN6UC",
  },
  {
    title:
      "Multilingual sentiment analysis in restaurant reviews using aspect focused learning",
    authors:
      "A Rahman, MA Khan, KK Bishnu, U Rozario, A Ishraq, MF Mridha, Z Aung",
    journal: "Scientific Reports",
    year: "2025",
    citations: 0,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:0EnyYjriUFMC",
  },
  {
    title:
      "A systematic review of AI-driven business models for advancing Sustainable Development Goals",
    authors:
      "MDA Khan, A Rahman, FU Mahmud, KK Bishnu, M Ahmed, MF Mridha, et al.",
    journal: "Array",
    year: "2025",
    citations: 0,
    url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:3fE2CSJIrl8C",
  },
  {
    title:
      "Evaluate all order of every element of higher 100, 105 and 107 order of group for multiplication composition",
    authors:
      "MA Mannan, KK Bishnu, S Islam, MSA Chowdhury, MA Hossain, MS Islam, SJE Khan, H Khatun",
    journal: "Edelweiss Applied Science and Technology",
    year: "2025",
    citations: 0,
    url: "https://scholar.google.com/citations?user=_3JpA_YAAAAJ&hl=en",
  },
  {
    title:
      "Algorithmic diagnostics: Machine learning, cancer detection and the posthuman transformation of medical knowledge",
    authors: "AQ Mozumder, D Ghosh, M Raihan, A Islam, R Paul, KK Bishnu",
    journal: "International Journal of Science and Research Archive",
    year: "2025",
    citations: 0,
    url: "https://scholar.google.com/citations?user=_3JpA_YAAAAJ&hl=en",
  },
  {
    title:
      "Seismic intelligence: Machine learning models for earthquake magnitude estimation",
    authors: "KK Bishnu, BC Das, MS Islam, MSA Chowdhury, S Islam, MA Khan",
    journal: "Mathematical Modelling and Engineering Problems",
    year: "2025",
    citations: 0,
    url: "https://scholar.google.com/citations?user=_3JpA_YAAAAJ&hl=en",
  },
];

const conferenceProceedings = [
  {
    title:
      "FuseAttenX: Leveraging attention-enhanced deep learning for business strategy optimization",
    authors: "FU Mahmud, A Rahman, MA Khan, KK Bishnu, AA Eva, J Maua",
    venue: "IEEE 4th International Conference on Computing and Machine Intelligence (ICMI 2025)",
    year: "2025",
    note: "pp. 1–6. IEEE",
    url: "https://scholar.google.com/citations?user=_3JpA_YAAAAJ&hl=en",
  },
  {
    title:
      "A data-driven temporal convolutional network for predicting material removal rate in the chemical mechanical planarization process",
    authors: "MR Islam, MM Rahaman, MH Rahman, KK Bishnu, IR Noman, MM Aziz",
    venue: "2nd International Conference on Artificial Intelligence and Digital Management (ICAIDM 2025)",
    year: "2025",
    note: "pp. 13–20. IEEE",
    url: "https://scholar.google.com/citations?user=_3JpA_YAAAAJ&hl=en",
  },
  {
    title:
      "Model selection for water quality prediction: A case study using public potability data",
    authors: "MM Aziz, MM Rahaman, KK Bishnu, MR Islam, IR Noman, MH Rahman",
    venue: "2nd International Conference on Artificial Intelligence and Digital Management (ICAIDM 2025)",
    year: "2025",
    note: "pp. 21–28. IEEE",
    url: "https://scholar.google.com/citations?user=_3JpA_YAAAAJ&hl=en",
  },
  {
    title:
      "Optimizing detection of human cancer cells in breast cancer via machine learning and feature selection",
    authors: "KK Bishnu",
    venue: "International Conference on Electrical, Computer and Energy Technologies (ICECET 2025), Paris, France",
    year: "2025",
    note: "Oral Presentation — July 3–6, 2025",
    url: "https://scholar.google.com/citations?user=_3JpA_YAAAAJ&hl=en",
  },
];

const bookChapters = [
  {
    title:
      "Machine learning models for fraud detection in promotional activities",
    authors: "M Ahmad, KK Bishnu, MR Islam, MK Rahman",
    book: "Harnessing AI for Point-of-Sale Optimization",
    publisher: "IGI Global Scientific Publishing",
    year: "2026",
    note: "pp. 197–226",
    url: "https://scholar.google.com/citations?user=_3JpA_YAAAAJ&hl=en",
  },
  {
    title:
      "Cryptocurrency and blockchain forensics: Tracing digital transactions",
    authors: "M Ahmad, RER Shawon, MS Hasan, KK Bishnu",
    book: "Cyber Forensic Frameworks for User-Centric Human Threat Intelligence Analysis",
    publisher: "IGI Global Scientific Publishing",
    year: "2026",
    note: "pp. 467–498",
    url: "https://scholar.google.com/citations?user=_3JpA_YAAAAJ&hl=en",
  },
];

const Publications = () => {
  return (
    <section id="publications" data-animate className="py-24">
      <div className="container mx-auto px-6">
        <div className="mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
            Featured Work
          </p>
          <h2 className="mt-3 text-4xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Publications & Recognition
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-xl text-muted-foreground">
            Translating ideas into measurable impact across biomedical AI,
            cybersecurity, and sustainable intelligent systems.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <Card
                key={item.title}
                className="group relative overflow-hidden rounded-3xl border border-white/40 bg-white/75 p-6 shadow-xl backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl dark:border-white/10 dark:bg-slate-900/60"
              >
                <div
                  className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(135deg, hsla(195,85%,50%,0.15), hsla(275,85%,60%,0.15))",
                  }}
                />
                <div className="relative z-10">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                    <Icon className="h-7 w-7" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl items-start gap-8">
          {/* Research Domains */}
          <Card className="rounded-3xl border border-border/60 p-6 shadow-xl">
            <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
              Research domains
            </p>
            <CardTitle className="mt-2 text-2xl">Where My Work Lives</CardTitle>
            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {domains.map((domain) => (
                <div
                  key={domain.title}
                  className="flex h-full flex-col rounded-2xl border border-border/60 bg-muted/30 p-4"
                >
                  <h3 className="text-lg font-semibold text-foreground">
                    {domain.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">
                    {domain.description}
                  </p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {domain.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full px-3 py-1 text-xs font-semibold"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Journal Articles */}
          <Card className="rounded-3xl border border-border/60 p-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                <BookOpen className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
                  Section A
                </p>
                <CardTitle className="text-2xl">Peer-Reviewed Journal Articles</CardTitle>
              </div>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">Total citations: 124+</p>
            <div className="mt-6 space-y-6 divide-y divide-border/70">
              {journalPublications.map((pub) => (
                <div key={pub.title} className="pt-6 first:pt-0">
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {pub.title}
                    </h3>
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pub.authors}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="outline">{pub.journal}</Badge>
                    <span>{pub.year}</span>
                    {pub.citations > 0 && (
                      <span>• Cited by {pub.citations}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <a
                href="https://scholar.google.com/citations?user=_3JpA_YAAAAJ&hl=en"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary"
              >
                <BookOpen className="h-4 w-4" />
                View complete Google Scholar profile
              </a>
            </div>
          </Card>

          {/* Conference Proceedings */}
          <Card className="rounded-3xl border border-border/60 p-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                <Mic className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
                  Section B
                </p>
                <CardTitle className="text-2xl">Conference Proceedings</CardTitle>
              </div>
            </div>
            <div className="mt-6 space-y-6 divide-y divide-border/70">
              {conferenceProceedings.map((proc) => (
                <div key={proc.title} className="pt-6 first:pt-0">
                  <a
                    href={proc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {proc.title}
                    </h3>
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {proc.authors}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="outline">{proc.venue}</Badge>
                    <span>{proc.year}</span>
                    {proc.note && (
                      <span className="text-xs text-muted-foreground">• {proc.note}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Book Chapters */}
          <Card className="rounded-3xl border border-border/60 p-6 shadow-xl">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                <BookMarked className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-[0.4em] text-muted-foreground">
                  Section C
                </p>
                <CardTitle className="text-2xl">Book Chapters</CardTitle>
              </div>
            </div>
            <div className="mt-6 space-y-6 divide-y divide-border/70">
              {bookChapters.map((chapter) => (
                <div key={chapter.title} className="pt-6 first:pt-0">
                  <a
                    href={chapter.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h3 className="text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                      {chapter.title}
                    </h3>
                  </a>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {chapter.authors}
                  </p>
                  <div className="mt-3 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <Badge variant="outline">{chapter.book}</Badge>
                    <span>{chapter.publisher}</span>
                    <span>• {chapter.year}</span>
                    {chapter.note && (
                      <span className="text-xs text-muted-foreground">• {chapter.note}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Card className="inline-flex items-center gap-4 rounded-3xl border border-primary/20 bg-gradient-to-r from-primary/15 to-secondary/15 px-8 py-6 shadow-xl">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-secondary text-primary-foreground">
              <Award className="h-7 w-7" />
            </div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-foreground">
                UK Patent Holder
              </h3>
              <p className="text-sm text-muted-foreground">
                AI-based data-processing technology
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Publications;
