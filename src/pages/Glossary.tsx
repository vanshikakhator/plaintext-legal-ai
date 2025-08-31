import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { BookOpen, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface GlossaryTerm {
  term: string;
  definition: string;
  example: string;
}

const glossaryTerms: GlossaryTerm[] = [
  {
    term: "Arbitration",
    definition: "A process of dispute resolution where parties agree to submit their conflict to a neutral third party (arbitrator) for a binding decision.",
    example: "The contract includes an arbitration clause requiring disputes to be resolved through arbitration rather than court litigation."
  },
  {
    term: "Breach of Contract",
    definition: "The failure to perform any duty or obligation specified in a contract without a legal excuse.",
    example: "Failing to deliver goods by the agreed deadline constitutes a breach of contract."
  },
  {
    term: "Consideration",
    definition: "Something of value exchanged between parties to make a contract legally binding.",
    example: "The payment of $1000 serves as consideration for the services provided."
  },
  {
    term: "Force Majeure",
    definition: "Unforeseeable circumstances that prevent a party from fulfilling a contract, such as natural disasters or war.",
    example: "The COVID-19 pandemic was often cited as a force majeure event in contract disputes."
  },
  {
    term: "Indemnification",
    definition: "A contractual obligation to compensate another party for certain damages or losses.",
    example: "The contractor agrees to indemnify the client against any third-party claims arising from the work performed."
  },
  {
    term: "Liability Cap",
    definition: "A contractual limit on the amount of damages one party can be held responsible for.",
    example: "The service provider's liability is capped at the total amount paid under this agreement."
  },
  {
    term: "Non-Disclosure Agreement (NDA)",
    definition: "A legal contract that prevents parties from sharing confidential information with third parties.",
    example: "Employees must sign an NDA to protect the company's trade secrets and proprietary information."
  },
  {
    term: "Termination Clause",
    definition: "A provision in a contract that specifies the conditions under which the agreement can be ended.",
    example: "Either party may terminate this agreement with 30 days written notice."
  }
];

const GlossaryPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { t } = useLanguage();

  const filteredTerms = glossaryTerms.filter(
    term => 
      term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
      term.definition.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center">
              <BookOpen className="mr-3 h-10 w-10 text-primary" />
              Legal Terms Glossary
            </h1>
            <p className="text-lg text-muted-foreground">
              Understanding legal terminology made simple
            </p>
          </div>

          {/* Search Bar */}
          <Card className="mb-8 shadow-card">
            <CardContent className="p-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search legal terms..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
            </CardContent>
          </Card>

          {/* Glossary Terms */}
          <div className="space-y-4">
            {filteredTerms.map((item, index) => (
              <Card key={index} className="shadow-card hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-primary text-xl">{item.term}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground mb-4">{item.definition}</p>
                  <div className="bg-gradient-card p-4 rounded-lg">
                    <p className="text-sm font-medium text-muted-foreground mb-2">Example:</p>
                    <p className="text-sm text-foreground italic">{item.example}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredTerms.length === 0 && (
            <Card className="shadow-card">
              <CardContent className="p-12 text-center">
                <p className="text-muted-foreground">No terms found matching your search.</p>
              </CardContent>
            </Card>
          )}
        </div>
      </main>
    </div>
  );
};

export default GlossaryPage;