import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/layout/Navbar";
import { Upload, Languages, MessageCircle, ArrowRight } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: Upload,
      title: "Upload Documents",
      description: "Upload and analyze your legal documents with advanced AI-powered risk assessment and fairness scoring.",
      path: "/upload",
      color: "text-primary"
    },
    {
      icon: Languages,
      title: "Plain Language Translator",
      description: "Transform complex legal jargon into clear, understandable language that anyone can comprehend.",
      path: "/translator",
      color: "text-accent"
    },
    {
      icon: MessageCircle,
      title: "AI Assistant",
      description: "Get instant answers to your legal questions with our intelligent AI assistant trained on legal expertise.",
      path: "/assistant",
      color: "text-primary"
    }
  ];

  const handleFeatureClick = (path: string) => {
    // Check if user is authenticated (placeholder for now)
    const isAuthenticated = false; // This would come from your auth system
    
    if (!isAuthenticated) {
      navigate('/login');
    } else {
      navigate(path);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Welcome to <span className="text-primary">Legalyze</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Your comprehensive legal document analysis platform. We make complex legal documents 
              accessible through AI-powered translation, risk assessment, and intelligent assistance. 
              Understanding your legal documents has never been easier.
            </p>
          </div>

          {/* Why It's Necessary Section */}
          <div className="mb-16 bg-gradient-card rounded-2xl p-8 shadow-card">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Why Legal Clarity Is Essential
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-primary">The Problem</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• 89% of people don't fully understand their contracts</li>
                  <li>• Legal language creates barriers to informed decisions</li>
                  <li>• Hidden risks in documents can cost thousands</li>
                  <li>• Complex terminology intimidates everyday users</li>
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-accent">Our Solution</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AI-powered plain language translation</li>
                  <li>• Comprehensive risk assessment and scoring</li>
                  <li>• Instant legal assistance and guidance</li>
                  <li>• Accessible tools for everyone</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Feature Cards */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              Powerful Tools at Your Fingertips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <Card 
                    key={feature.title}
                    className="bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 border-0 cursor-pointer group animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onClick={() => handleFeatureClick(feature.path)}
                  >
                    <CardHeader className="text-center pb-4">
                      <div className="mx-auto mb-4 p-3 rounded-full bg-primary/10">
                        <IconComponent className={`h-8 w-8 ${feature.color}`} />
                      </div>
                      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                        {feature.description}
                      </CardDescription>
                      <Button 
                        variant="ghost" 
                        className="text-primary hover:text-primary-foreground hover:bg-primary group-hover:shadow-button transition-all"
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Additional Info */}
          <div className="text-center bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Trusted by Legal Professionals and Everyday Users
            </h3>
            <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
              Our platform combines cutting-edge AI technology with legal expertise to provide 
              accurate, reliable, and accessible legal document analysis for everyone.
            </p>
            <Button 
              onClick={() => navigate('/about')}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
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