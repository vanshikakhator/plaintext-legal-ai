import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scale, Shield, FileText, Zap } from "lucide-react";
import heroImage from "@/assets/hero-legal.jpg";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-secondary">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="flex items-center space-x-3">
                <Scale className="h-10 w-10 text-accent" />
                <h1 className="text-5xl font-bold text-primary">Legalyze</h1>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Transform Complex
                <span className="text-primary"> Legal Documents</span>
                <br />
                Into Clear Insights
              </h2>
              
              <p className="text-xl text-muted-foreground leading-relaxed">
                Make legal documents accessible to everyone. Our AI-powered platform 
                translates complex legal language into plain English, analyzes document 
                risks, and provides intelligent assistance for better legal understanding.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg"
                  onClick={() => navigate('/home')}
                  className="bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-hero px-8 py-4 text-lg font-semibold"
                >
                  Get Started
                </Button>
                <Button 
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/about')}
                  className="border-primary text-primary hover:bg-primary/10 px-8 py-4 text-lg"
                >
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="animate-slide-up">
              <img
                src={heroImage}
                alt="Legal documents and technology"
                className="rounded-2xl shadow-hero w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Why Legal Clarity Matters
            </h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Legal documents shouldn't be intimidating. Our platform bridges the gap 
              between complex legal language and everyday understanding.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 border-0">
              <CardContent className="p-6 text-center">
                <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Risk Assessment
                </h4>
                <p className="text-muted-foreground">
                  Identify potential risks and unfair terms in legal documents 
                  with our intelligent analysis system.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 border-0">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-accent mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  Plain Language Translation
                </h4>
                <p className="text-muted-foreground">
                  Convert complex legal jargon into clear, understandable 
                  language that anyone can comprehend.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-card shadow-card hover:shadow-hero transition-all duration-300 border-0">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  AI-Powered Assistance
                </h4>
                <p className="text-muted-foreground">
                  Get instant answers to your legal questions with our 
                  intelligent AI assistant trained on legal expertise.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Ready to Demystify Legal Documents?
          </h3>
          <p className="text-lg text-muted-foreground mb-8">
            Join thousands of users who have simplified their legal understanding 
            with Legalyze's powerful tools.
          </p>
          <Button 
            size="lg"
            onClick={() => navigate('/home')}
            className="bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-button px-8 py-4 text-lg font-semibold"
          >
            Start Analyzing Documents
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;