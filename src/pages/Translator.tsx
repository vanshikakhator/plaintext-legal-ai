import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { Languages, ArrowRight, Copy, RefreshCw } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Translator = () => {
  const [legalText, setLegalText] = useState("");
  const [plainText, setPlainText] = useState("");
  const [isTranslating, setIsTranslating] = useState(false);
  const { toast } = useToast();

  const sampleLegalText = `WHEREAS, the Party of the First Part (hereinafter referred to as "Licensor") is desirous of licensing certain intellectual property rights to the Party of the Second Part (hereinafter referred to as "Licensee"), and WHEREAS, Licensee desires to obtain such license upon the terms and conditions hereinafter set forth, NOW, THEREFORE, in consideration of the mutual covenants and agreements contained herein, and for other good and valuable consideration, the receipt and sufficiency of which are hereby acknowledged, the parties agree as follows...`;

  const handleTranslate = () => {
    if (!legalText.trim()) {
      toast({
        title: "No text to translate",
        description: "Please enter some legal text to translate.",
        variant: "destructive",
      });
      return;
    }

    setIsTranslating(true);
    
    // Simulate translation process
    setTimeout(() => {
      const mockTranslation = generatePlainLanguage(legalText);
      setPlainText(mockTranslation);
      setIsTranslating(false);
      toast({
        title: "Translation complete",
        description: "Your legal text has been translated to plain language.",
      });
    }, 2000);
  };

  const generatePlainLanguage = (text: string) => {
    // This is a mock translation - in a real app, this would call an AI service
    return `This agreement is between two parties: the company that owns certain rights (called the "Licensor") and the company that wants to use those rights (called the "Licensee"). 

The Licensor wants to give permission to use their intellectual property rights, and the Licensee wants to get that permission. 

Both parties agree to the terms written in this contract. In exchange for following these rules, each party will receive something of value from the other party.

The specific terms and conditions of this agreement are listed below...`;
  };

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${type} copied`,
      description: "Text has been copied to your clipboard.",
    });
  };

  const handleUseSample = () => {
    setLegalText(sampleLegalText);
  };

  const handleClear = () => {
    setLegalText("");
    setPlainText("");
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Plain Language Translator
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Transform complex legal jargon into clear, understandable language. 
              Our AI-powered translator makes legal documents accessible to everyone.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button 
              onClick={handleUseSample}
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              Use Sample Text
            </Button>
            <Button 
              onClick={handleTranslate}
              disabled={isTranslating || !legalText.trim()}
              className="bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-button"
            >
              {isTranslating ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Translating...
                </>
              ) : (
                <>
                  <Languages className="mr-2 h-4 w-4" />
                  Translate to Plain Language
                </>
              )}
            </Button>
            <Button 
              onClick={handleClear}
              variant="outline"
            >
              Clear All
            </Button>
          </div>

          {/* Translation Interface */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Legal Text Input */}
            <Card className="shadow-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Languages className="mr-2 h-5 w-5 text-primary" />
                    Original Legal Text
                  </span>
                  {legalText && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopy(legalText, "Legal text")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Paste your legal document text here..."
                  value={legalText}
                  onChange={(e) => setLegalText(e.target.value)}
                  className="min-h-[400px] resize-none text-sm leading-relaxed"
                />
                <div className="mt-2 text-xs text-muted-foreground">
                  {legalText.length} characters
                </div>
              </CardContent>
            </Card>

            {/* Translation Arrow */}
            <div className="lg:hidden flex justify-center">
              <ArrowRight className="h-8 w-8 text-primary rotate-90 lg:rotate-0" />
            </div>

            {/* Plain Language Output */}
            <Card className="shadow-card">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center justify-between">
                  <span className="flex items-center">
                    <Languages className="mr-2 h-5 w-5 text-accent" />
                    Plain Language Translation
                  </span>
                  {plainText && (
                    <Button
                      size="sm"
                      variant="ghost"
                      onClick={() => handleCopy(plainText, "Translation")}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="min-h-[400px] p-4 bg-gradient-card rounded-md border">
                  {plainText ? (
                    <p className="text-sm leading-relaxed text-foreground whitespace-pre-wrap">
                      {plainText}
                    </p>
                  ) : (
                    <div className="flex items-center justify-center h-full text-muted-foreground">
                      <div className="text-center">
                        <Languages className="h-12 w-12 mx-auto mb-4 opacity-50" />
                        <p>Your plain language translation will appear here</p>
                      </div>
                    </div>
                  )}
                </div>
                {plainText && (
                  <div className="mt-2 text-xs text-muted-foreground">
                    {plainText.length} characters
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Information Section */}
          <div className="mt-16 bg-primary/5 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                How Our Translation Works
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Our AI-powered translation service breaks down complex legal language 
                into everyday terms while preserving the original meaning and intent.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Analyze Structure</h4>
                <p className="text-sm text-muted-foreground">
                  We break down the legal document into logical sections and identify key terms.
                </p>
              </div>
              
              <div>
                <div className="bg-accent/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent">2</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Translate Content</h4>
                <p className="text-sm text-muted-foreground">
                  Complex legal jargon is converted to plain English while maintaining accuracy.
                </p>
              </div>
              
              <div>
                <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Verify Accuracy</h4>
                <p className="text-sm text-muted-foreground">
                  Our AI ensures the translation preserves the original legal meaning.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Translator;