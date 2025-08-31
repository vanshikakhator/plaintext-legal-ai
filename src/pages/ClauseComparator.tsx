import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GitCompare, AlertTriangle, CheckCircle, Info } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ComparisonResult {
  similarities: string[];
  differences: string[];
  risks: string[];
  recommendations: string[];
}

const ClauseComparatorPage = () => {
  const [clause1, setClause1] = useState("");
  const [clause2, setClause2] = useState("");
  const [isComparing, setIsComparing] = useState(false);
  const [comparisonResult, setComparisonResult] = useState<ComparisonResult | null>(null);
  const { toast } = useToast();

  const handleCompare = () => {
    if (!clause1.trim() || !clause2.trim()) {
      toast({
        title: "Missing clauses",
        description: "Please enter both clauses to compare.",
        variant: "destructive",
      });
      return;
    }

    setIsComparing(true);
    
    // Simulate comparison process
    setTimeout(() => {
      const mockResult: ComparisonResult = {
        similarities: [
          "Both clauses include termination notice requirements",
          "Similar liability limitation structures",
          "Both mention dispute resolution procedures"
        ],
        differences: [
          "Clause 1 requires 30 days notice, Clause 2 requires 60 days",
          "Clause 1 caps liability at contract value, Clause 2 has no cap",
          "Different governing law jurisdictions specified"
        ],
        risks: [
          "Clause 2's unlimited liability poses higher risk",
          "Longer notice period in Clause 2 may delay termination",
          "Jurisdiction differences could complicate dispute resolution"
        ],
        recommendations: [
          "Consider standardizing notice periods for consistency",
          "Negotiate liability caps in Clause 2 for better protection",
          "Align governing law clauses to avoid jurisdictional conflicts"
        ]
      };
      
      setComparisonResult(mockResult);
      setIsComparing(false);
      toast({
        title: "Comparison complete",
        description: "Your clauses have been analyzed and compared.",
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
              <GitCompare className="mr-3 h-10 w-10 text-primary" />
              Clause Comparator
            </h1>
            <p className="text-lg text-muted-foreground">
              Compare legal clauses side-by-side and identify key differences
            </p>
          </div>

          {/* Input Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-2">Clause 1</Badge>
                  Original Clause
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Paste the first legal clause here..."
                  value={clause1}
                  onChange={(e) => setClause1(e.target.value)}
                  className="min-h-[200px] resize-none"
                />
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Badge variant="outline" className="mr-2">Clause 2</Badge>
                  Comparison Clause
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Textarea
                  placeholder="Paste the second legal clause here..."
                  value={clause2}
                  onChange={(e) => setClause2(e.target.value)}
                  className="min-h-[200px] resize-none"
                />
              </CardContent>
            </Card>
          </div>

          {/* Compare Button */}
          <div className="text-center mb-8">
            <Button 
              onClick={handleCompare}
              disabled={isComparing || !clause1.trim() || !clause2.trim()}
              className="bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-button"
              size="lg"
            >
              {isComparing ? "Comparing..." : "Compare Clauses"}
            </Button>
          </div>

          {/* Comparison Results */}
          {comparisonResult && (
            <div className="space-y-6">
              {/* Similarities */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-green-600">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Similarities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {comparisonResult.similarities.map((similarity, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-foreground">{similarity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Differences */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-blue-600">
                    <Info className="mr-2 h-5 w-5" />
                    Key Differences
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {comparisonResult.differences.map((difference, index) => (
                      <li key={index} className="flex items-start">
                        <Info className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-foreground">{difference}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Risk Analysis */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-amber-600">
                    <AlertTriangle className="mr-2 h-5 w-5" />
                    Risk Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {comparisonResult.risks.map((risk, index) => (
                      <li key={index} className="flex items-start">
                        <AlertTriangle className="h-4 w-4 text-amber-600 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-foreground">{risk}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Recommendations */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <CheckCircle className="mr-2 h-5 w-5" />
                    Recommendations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {comparisonResult.recommendations.map((recommendation, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-primary mt-1 mr-2 flex-shrink-0" />
                        <span className="text-foreground">{recommendation}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default ClauseComparatorPage;