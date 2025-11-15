import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Award, FileCheck } from "lucide-react";

const highlights = [
  {
    icon: BookOpen,
    title: "15+ Peer-Reviewed Papers",
    description: "Published in leading journals including IEEE Access, IEEE Open Journal of Computer Society, Elsevier, MDPI, Springer Nature, and Tech Science Press.",
  },
  {
    icon: Award,
    title: "Q1 Journal Publications",
    description: "Multiple publications in top-tier Q1-ranked journals with high impact factors and international recognition.",
  },
  {
    icon: FileCheck,
    title: "Certified Reviewer",
    description: "Active reviewer for Elsevier journals (Computers & Electrical Engineering, Biomedical Signal Processing and Control), PLOS ONE, and Journal of Alzheimer's Disease.",
  },
];

const Publications = () => {
  return (
    <section id="publications" className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Publications & Recognition
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Contributing to the advancement of AI research and innovation
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card 
                key={index} 
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <Card className="max-w-6xl mx-auto shadow-lg border-2">
          <CardHeader>
            <CardTitle className="text-2xl">Research Domains</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Healthcare AI</h3>
                <p className="text-muted-foreground mb-3">
                  AI-driven studies on Parkinson's, Alzheimer's, Diabetes, Cardiovascular, and Skin Cancer detection in medical imaging using deep learning and vision transformers.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Deep Learning</Badge>
                  <Badge>Medical Imaging</Badge>
                  <Badge>Disease Diagnosis</Badge>
                  <Badge>Vision Transformers</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Cybersecurity</h3>
                <p className="text-muted-foreground mb-3">
                  AI-based cybersecurity, cryptocurrency fraud detection, threat modeling, and e-commerce analytics using machine learning.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Fraud Detection</Badge>
                  <Badge>Cryptocurrency</Badge>
                  <Badge>Threat Analysis</Badge>
                  <Badge>Network Security</Badge>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Sustainable Systems</h3>
                <p className="text-muted-foreground mb-3">
                  Energy forecasting, electric vehicle adoption modeling, and sustainable AI approaches aligned with global development goals.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge>Energy Systems</Badge>
                  <Badge>Sustainability</Badge>
                  <Badge>Predictive Modeling</Badge>
                  <Badge>Green AI</Badge>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="max-w-6xl mx-auto shadow-lg border-2 mt-8">
          <CardHeader>
            <CardTitle className="text-2xl">Selected Publications</CardTitle>
            <p className="text-muted-foreground mt-2">
              Recent peer-reviewed research contributions (Citations: 124)
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                {
                  title: "Evaluation of Feature Transformation and Machine Learning Models on Early Detection of Diabetes Melitus",
                  authors: "AA Linkon, IR Noman, MR Islam, JC Bortty, KK Bishnu, A Islam, R Hasan, et al.",
                  journal: "IEEE Access",
                  year: "2024",
                  citations: 38,
                  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:8k81kl-MbHgC"
                },
                {
                  title: "Data-driven security: Improving autonomous systems through data analytics and cybersecurity",
                  authors: "IR Noman, JC Bortty, KK Bishnu, MM Aziz, MR Islam",
                  journal: "Journal of Computer Science and Technology Studies",
                  year: "2022",
                  citations: 24,
                  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:2osOgNQ5qMEC"
                },
                {
                  title: "Leveraging Machine Learning for Insights and Predictions in Synthetic E-Commerce Data in the USA: A Comprehensive Analysis",
                  authors: "MR Islam, M Hossain, M Alam, MM Khan, MM Karim, MFR Rabbi, et al.",
                  journal: "Journal of Ecohumanism",
                  year: "2025",
                  citations: 15,
                  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:WF5omc3nYNoC"
                },
                {
                  title: "Detecting Cryptocurrency Scams in the USA: A Machine Learning-Based Analysis of Scam Patterns and Behaviors",
                  authors: "BC Das, B Sarker, A Saha, KK Bishnu, B Chandra",
                  journal: "Journal of Ecohumanism",
                  year: "2025",
                  citations: 14,
                  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:W7OEmFMy1HYC"
                },
                {
                  title: "Machine Learning-Based Detection and Analysis of Suspicious Activities in Bitcoin Wallet Transactions in the USA",
                  authors: "MZ Islam, MS Islam, SA Reza, PK Bhowmik, KK Bishnu, MS Rahman, et al.",
                  journal: "arXiv preprint arXiv:2504.03092",
                  year: "2025",
                  citations: 11,
                  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:zYLM7Y9cAGgC"
                },
                {
                  title: "AI-driven cybersecurity threat detection: Building resilient defense systems using predictive analytics",
                  authors: "BC Das, MS Sartaz, SA Reza, A Hossain, MD Nasiruddin, KK Bishnu",
                  journal: "arXiv preprint arXiv:2508.01422",
                  year: "2025",
                  citations: 6,
                  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:kNdYIx-mwKoC"
                },
                {
                  title: "A Novel Data-Driven Multi-Branch LSTM Architecture with Attention Mechanisms for Forecasting Electric Vehicle Adoption",
                  authors: "MM Rahaman, MR Islam, MMTG Manik, MM Aziz, IR Noman, et al.",
                  journal: "World Electric Vehicle Journal",
                  year: "2025",
                  citations: 5,
                  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:UebtZRa9Y70C"
                },
                {
                  title: "A novel diagnostic framework with an optimized ensemble of vision transformers and convolutional neural networks for enhanced Alzheimer's disease detection in medical imaging",
                  authors: "J Chakra Bortty, GS Chakraborty, IR Noman, S Batra, J Das, KK Bishnu, et al.",
                  journal: "Diagnostics",
                  year: "2025",
                  citations: 5,
                  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:Tyk-4Ss8FVUC"
                },
                {
                  title: "Identification of Cardiovascular Disease via Diverse Machine Learning Methods",
                  authors: "A Islam, MA Saleh, AF Tasnim, M Samiun, SK Noor, KK Bishnu",
                  journal: "Journal of Computer and Communications",
                  year: "2024",
                  citations: 2,
                  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:IjCSPb-OGe4C"
                },
                {
                  title: "Deep learning approaches for the identification and classification of skin cancer",
                  authors: "KK Bishnu, MA Saleh, S Hossain, JF Mou, MMTG Manik, A Islam",
                  journal: "Journal of Computer and Communications",
                  year: "2024",
                  citations: 2,
                  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:UeHWp8X0CEIC"
                },
                {
                  title: "A Physics-Guided Bayesian Neural Network for Sensor Fault Detection in Wind Turbines",
                  authors: "MDA Khan, A Rahman, FU Mahmud, KK Bishnu, HR Nabil, MF Mridha, et al.",
                  journal: "IEEE Open Journal of the Computer Society",
                  year: "2025",
                  citations: 1,
                  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:eQOLeE2rZwMC"
                },
                {
                  title: "Efficient Multi-Modal Fusion Framework with Advanced AI-Driven Approaches for Automated Parkinson's Disease Detection",
                  authors: "GS Chakraborty, JC Bortty, J Das, IR Noman, KK Bishnu, A Islam",
                  journal: "Intelligence-Based Medicine",
                  year: "2025",
                  citations: 0,
                  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:KlAtU1dfN6UC"
                },
                {
                  title: "Multilingual sentiment analysis in restaurant reviews using aspect focused learning",
                  authors: "A Rahman, MA Khan, KK Bishnu, U Rozario, A Ishraq, MF Mridha, Z Aung",
                  journal: "Scientific Reports",
                  year: "2025",
                  citations: 0,
                  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:0EnyYjriUFMC"
                },
                {
                  title: "A systematic review of AI-driven business models for advancing Sustainable Development Goals",
                  authors: "MDA Khan, A Rahman, FU Mahmud, KK Bishnu, M Ahmed, MF Mridha, et al.",
                  journal: "Array",
                  year: "2025",
                  citations: 0,
                  url: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=_3JpA_YAAAAJ&citation_for_view=_3JpA_YAAAAJ:3fE2CSJIrl8C"
                }
              ].map((pub, index) => (
                <div key={index} className="pb-6 border-b border-border last:border-b-0 last:pb-0">
                  <a 
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                      {pub.title}
                    </h3>
                  </a>
                  <p className="text-sm text-muted-foreground mb-2">{pub.authors}</p>
                  <div className="flex flex-wrap items-center gap-2 text-sm">
                    <Badge variant="outline">{pub.journal}</Badge>
                    <span className="text-muted-foreground">{pub.year}</span>
                    {pub.citations > 0 && (
                      <span className="text-muted-foreground">• Cited by {pub.citations}</span>
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
                className="inline-flex items-center gap-2 text-primary hover:underline"
              >
                <BookOpen className="h-4 w-4" />
                View All Publications on Google Scholar
              </a>
            </div>
          </CardContent>
        </Card>

        <div className="text-center mt-12">
          <Card className="inline-block px-8 py-6 bg-gradient-to-r from-primary/10 to-secondary/10 border-2">
            <div className="flex items-center gap-4">
              <Award className="h-12 w-12 text-primary" />
              <div className="text-left">
                <h3 className="font-bold text-xl text-foreground">UK Patent Holder</h3>
                <p className="text-muted-foreground">Computer Science Innovation</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Publications;
