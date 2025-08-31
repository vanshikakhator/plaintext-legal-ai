import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Navbar } from "@/components/layout/Navbar";
import { Upload, FileText, Download, Shield, AlertTriangle, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const UploadPage = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [viewMode, setViewMode] = useState<string>("");
  const [explainLevel, setExplainLevel] = useState<string>("");
  const [readingLevel, setReadingLevel] = useState<string>("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [riskScore, setRiskScore] = useState(0);
  const [fairnessScore, setFairnessScore] = useState(0);
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      toast({
        title: "File uploaded successfully",
        description: `${file.name} is ready for analysis.`,
      });
    }
  };

  const handleAnalyze = () => {
    if (!selectedFile || !viewMode || !explainLevel || !readingLevel) {
      toast({
        title: "Missing information",
        description: "Please select a file and all filter options before analyzing.",
        variant: "destructive",
      });
      return;
    }

    setIsAnalyzing(true);
    
    // Simulate analysis process
    setTimeout(() => {
      setRiskScore(Math.floor(Math.random() * 100));
      setFairnessScore(Math.floor(Math.random() * 100));
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      toast({
        title: "Analysis complete",
        description: "Your document has been analyzed successfully.",
      });
    }, 3000);
  };

  const handleDownloadReport = () => {
    toast({
      title: "Report downloaded",
      description: "Analysis report has been downloaded to your device.",
    });
  };

  const getRiskColor = (score: number) => {
    if (score < 30) return "text-green-600";
    if (score < 70) return "text-yellow-600";
    return "text-red-600";
  };

  const getRiskLevel = (score: number) => {
    if (score < 30) return "Low";
    if (score < 70) return "Moderate";
    return "High";
  };

  const getFairnessLevel = (score: number) => {
    if (score >= 80) return "Excellent";
    if (score >= 60) return "Good";
    if (score >= 40) return "Fair";
    return "Poor";
  };

  const getFairnessColor = (score: number) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-blue-600";
    if (score >= 40) return "text-yellow-600";
    return "text-red-600";
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              Document Analysis
            </h1>
            <p className="text-lg text-muted-foreground">
              Upload your legal document for comprehensive AI-powered analysis
            </p>
          </div>

          {/* File Upload Section */}
          <Card className="mb-8 shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="mr-2 h-5 w-5 text-primary" />
                Upload Document
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  onChange={handleFileUpload}
                  accept=".pdf,.doc,.docx,.txt"
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <FileText className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
                  <p className="text-lg font-medium text-foreground mb-2">
                    {selectedFile ? selectedFile.name : "Choose a file or drag and drop"}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    PDF, DOC, DOCX, TXT up to 10MB
                  </p>
                </label>
              </div>
            </CardContent>
          </Card>

          {/* Filter Options */}
          <Card className="mb-8 shadow-card">
            <CardHeader>
              <CardTitle>Analysis Options</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    View Mode
                  </label>
                  <Select value={viewMode} onValueChange={setViewMode}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select view mode" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="layman">Layman</SelectItem>
                      <SelectItem value="legal">Legal</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Explanation Level
                  </label>
                  <Select value={explainLevel} onValueChange={setExplainLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select explanation level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="like-5">Like I'm 5</SelectItem>
                      <SelectItem value="lawyer">Like I'm a Lawyer</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-foreground mb-2 block">
                    Reading Level
                  </label>
                  <Select value={readingLevel} onValueChange={setReadingLevel}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select reading level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="class-5">Class 5</SelectItem>
                      <SelectItem value="class-10">Class 10</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button 
                onClick={handleAnalyze}
                disabled={!selectedFile || isAnalyzing}
                className="w-full bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-button"
                size="lg"
              >
                {isAnalyzing ? "Analyzing..." : "Analyze Document"}
              </Button>
            </CardContent>
          </Card>

          {/* Analysis Progress */}
          {isAnalyzing && (
            <Card className="mb-8 shadow-card">
              <CardContent className="p-6">
                <div className="text-center mb-4">
                  <p className="text-lg font-medium text-foreground">Analyzing your document...</p>
                </div>
                <Progress value={66} className="w-full" />
              </CardContent>
            </Card>
          )}

          {/* Analysis Results */}
          {analysisComplete && (
            <div className="space-y-6">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5 text-primary" />
                    Risk Assessment
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="text-center p-6 bg-gradient-card rounded-lg">
                      <AlertTriangle className={`mx-auto h-12 w-12 mb-4 ${getRiskColor(riskScore)}`} />
                      <h3 className="text-2xl font-bold text-foreground mb-2">Document Risk</h3>
                      <p className={`text-3xl font-bold ${getRiskColor(riskScore)}`}>
                        {riskScore}%
                      </p>
                      <p className={`text-sm font-medium ${getRiskColor(riskScore)}`}>
                        {getRiskLevel(riskScore)}
                      </p>
                    </div>
                    
                    <div className="text-center p-6 bg-gradient-card rounded-lg">
                      <CheckCircle className={`mx-auto h-12 w-12 mb-4 ${getFairnessColor(fairnessScore)}`} />
                      <h3 className="text-2xl font-bold text-foreground mb-2">Fairness Score</h3>
                      <p className={`text-3xl font-bold ${getFairnessColor(fairnessScore)}`}>
                        {fairnessScore}%
                      </p>
                      <p className={`text-sm font-medium ${getFairnessColor(fairnessScore)}`}>
                        {getFairnessLevel(fairnessScore)} Agreement
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle>Analysis Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Key Findings:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Contract contains standard termination clauses</li>
                        <li>Payment terms are clearly defined</li>
                        <li>Some liability limitations may favor the other party</li>
                        <li>Dispute resolution mechanism is included</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-foreground mb-2">Recommendations:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        <li>Review liability clauses with legal counsel</li>
                        <li>Consider negotiating more balanced termination terms</li>
                        <li>Ensure you understand all payment obligations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center">
                <Button 
                  onClick={handleDownloadReport}
                  className="bg-gradient-accent text-accent-foreground hover:opacity-90 shadow-button"
                  size="lg"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Analysis Report
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default UploadPage;