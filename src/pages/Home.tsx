import { useNavigate } from "react-router-dom";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Upload, Languages, MessageCircle, ArrowRight } from "lucide-react";
import heroIllustration from "@/assets/illustration_hero.png";

/** Illustration container */
const HeroIllustration = () => (
  <div className="h-full min-h-[300px] w-full rounded-2xl bg-primary/10 p-6 flex items-center justify-center">
    <img
      src={heroIllustration}
      alt="Illustration"
      className="h-full w-full object-contain"
    />
  </div>
);

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Upload,
      title: "Upload Documents",
      description:
        "Analyze your legal documents with advanced AI-powered risk assessment and fairness scoring.",
      path: "/upload",
      color: "text-primary",
    },
    {
      icon: Languages,
      title: "Plain Language Translator",
      description:
        "Transform complex legal jargon into clear, understandable language that anyone can comprehend.",
      path: "/translator",
      color: "text-accent",
    },
    {
      icon: MessageCircle,
      title: "AI Assistant",
      description:
        "Get instant answers to your legal questions with our intelligent AI assistant trained on legal expertise.",
      path: "/assistant",
      color: "text-primary",
    },
  ];

  const handleFeatureClick = (path) => navigate(path);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* Hero Section */}
          <section className="grid grid-cols-1 items-center gap-10 py-16 md:grid-cols-2">
            {/* Left */}
            <div className="space-y-12 text-center md:text-left">
              <h1>
                <span className="block text-8xl md:text-6xl font-extrabold 
                                 bg-gradient-to-r from-blue-900 to-blue-400 
                                 bg-clip-text text-transparent">
                  Welcome to
                </span>
                <span className="block text-10xl md:text-8xl font-extrabold 
                                 bg-gradient-to-r from-blue-400 to-blue-900 
                                 bg-clip-text text-transparent">
                  Legalyze
                </span>
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground max-w-lg mx-auto md:mx-0">
  Your legal document analysis platform. We simplify complex documents with AI-powered translation, risk assessment, and intelligent assistance.
</p>


              <Button
                className="px-12 py-6 text-2xl font-bold shadow-hero transition-all hover:shadow-button"
                onClick={() => handleFeatureClick("/upload")}
              >
                Analyze Your Document
                <ArrowRight className="ml-3 h-8 w-8" />
              </Button>
            </div>

            {/* Right */}
            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <HeroIllustration />
            </div>
          </section>

         {/* Why Legal Clarity Section */}
<section className="bg-gradient-to-b from-blue-100 via-blue-300 to-blue-500 py-16 px-6">
  {/* Top: Why Legal Clarity */}
  <div className="text-center mb-16">
    <h2 className="mb-6 text-5xl font-bold text-blue-900">
      Why Legal Clarity Is Essential
    </h2>
    <p className="mx-auto max-w-4xl text-xl text-blue-800">
      Legal documents shouldn't be intimidating. Our platform bridges the
      gap between complex legal language and everyday understanding,
      empowering you to know exactly what you're agreeing to.
    </p>
  </div>

  {/* Bottom: Cards */}
  <div>
    <h2 className="mb-12 text-center text-3xl font-bold text-blue-900">
      Powerful Tools at Your Fingertips
    </h2>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
      {features.map((feature, index) => {
        const IconComponent = feature.icon;
        return (
          <Card
  key={feature.title}
  className="group cursor-pointer border-0 bg-white/80 shadow-lg backdrop-blur transition-all duration-300 
             transform hover:-translate-y-4 hover:scale-105 hover:shadow-2xl"
  style={{ animationDelay: `${index * 0.1}s` }}
  onClick={() => handleFeatureClick(feature.path)}
>

            <CardHeader className="pb-4 text-center">
              <div className="mx-auto mb-4 rounded-full bg-primary/10 p-3">
                <IconComponent className={`h-8 w-8 ${feature.color}`} />
              </div>
              <CardTitle className="text-xl font-semibold text-blue-900 transition-colors group-hover:text-primary">
                {feature.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="mb-6 leading-relaxed text-blue-800">
                {feature.description}
              </CardDescription>
              <Button
                variant="ghost"
                className="text-primary transition-all hover:bg-primary/10 hover:text-primary group-hover:shadow-button"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </div>
  </div>
</section>


          {/* Additional Info */}
          <div className="rounded-2xl bg-white p-8 text-center">
            <h3 className="mb-6 text-4xl font-bold text-blue-900">
              Trusted by Professionals and Everyday Users
            </h3>
            <p className="mx-auto mb-6 max-w-3xl text-slate-700">
              Our platform combines cutting-edge AI with legal expertise to
              provide accurate, reliable, and accessible legal document analysis.
            </p>
            <Button
              onClick={() => navigate("/about")}
              variant="outline"
              className="border-primary text-white bg-blue-900 hover:bg-primary/10"
            >
              Learn More About Our Technology
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;