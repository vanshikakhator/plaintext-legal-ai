import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/layout/Navbar";
import { MessageCircle, Send, User, Bot, HelpCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const Assistant = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const { toast } = useToast();

  const suggestedQuestions = [
    "What should I look for in a rental agreement?",
    "Can you explain liability clauses in contracts?",
    "What are my rights if the other party breaches the contract?",
    "How do I know if a contract is fair?",
    "What questions should I ask before signing?",
    "Can you help me understand arbitration clauses?"
  ];

  const handleSendMessage = async () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateAIResponse(inputMessage),
        isUser: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, aiResponse]);
      setIsTyping(false);
    }, 2000);
  };

  const generateAIResponse = (question: string) => {
    const responses: { [key: string]: string } = {
      "rental": `When reviewing a rental agreement, pay attention to these key areas:

• **Rent and Payment Terms**: Confirm the monthly rent, due date, late fees, and acceptable payment methods.

• **Security Deposit**: Understand how much is required and under what conditions it will be returned.

• **Lease Duration**: Check the start and end dates, and understand renewal terms.

• **Maintenance Responsibilities**: Know what repairs you're responsible for versus the landlord.

• **Termination Clauses**: Understand how to end the lease early and any associated penalties.

• **Pet and Guest Policies**: Review any restrictions on pets or long-term guests.

Would you like me to explain any of these points in more detail?`,
      
      "liability": `Liability clauses determine who is responsible for damages or losses. Here's what to know:

• **Limitation of Liability**: These clauses cap how much one party can be held responsible for damages.

• **Mutual vs. One-sided**: Fair contracts often have mutual liability limitations, not just protecting one party.

• **Types of Damages**: Some clauses exclude certain types of damages like consequential or punitive damages.

• **Red Flags**: Be cautious of clauses that completely eliminate one party's liability for negligence.

• **Industry Standards**: Liability terms should be reasonable for your industry and situation.

Would you like help reviewing a specific liability clause?`,
      
      "default": `I'm here to help you understand legal documents and contracts. I can assist with:

• Explaining contract terms and clauses
• Identifying potential risks or red flags
• Providing guidance on common legal concepts
• Helping you prepare questions for attorneys
• Breaking down complex legal language

Please note that I provide educational information only and cannot substitute for professional legal advice. For specific legal matters, always consult with a qualified attorney.

What specific legal question can I help you with today?`
    };

    const lowerQuestion = question.toLowerCase();
    
    if (lowerQuestion.includes('rental') || lowerQuestion.includes('lease')) {
      return responses.rental;
    } else if (lowerQuestion.includes('liability')) {
      return responses.liability;
    } else {
      return responses.default;
    }
  };

  const handleSuggestedQuestion = (question: string) => {
    setInputMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              AI Legal Assistant
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Get instant answers to your legal questions. Our AI assistant is trained 
              to help you understand contracts, legal terms, and your rights.
            </p>
          </div>

          {/* Chat Interface */}
          <Card className="shadow-card mb-6">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center">
                <MessageCircle className="mr-2 h-5 w-5 text-primary" />
                Legal Assistant Chat
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Messages */}
              <div className="h-96 overflow-y-auto mb-4 space-y-4 p-4 bg-gradient-card rounded-lg">
                {messages.length === 0 ? (
                  <div className="text-center text-muted-foreground">
                    <Bot className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium mb-2">How can I help you today?</p>
                    <p className="text-sm">Ask me anything about legal documents, contracts, or your rights.</p>
                  </div>
                ) : (
                  messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                          message.isUser
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-background border border-border'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {!message.isUser && (
                            <Bot className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                          )}
                          {message.isUser && (
                            <User className="h-4 w-4 mt-0.5 text-primary-foreground flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                            <p className="text-xs opacity-70 mt-1">
                              {message.timestamp.toLocaleTimeString()}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))
                )}
                
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-background border border-border px-4 py-2 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Bot className="h-4 w-4 text-primary" />
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                          <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="flex space-x-2">
                <Textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me anything about legal documents..."
                  className="resize-none"
                  rows={2}
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim() || isTyping}
                  className="bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-button"
                  size="sm"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Suggested Questions */}
          <Card className="shadow-card">
            <CardHeader>
              <CardTitle className="flex items-center">
                <HelpCircle className="mr-2 h-5 w-5 text-accent" />
                Suggested Questions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {suggestedQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="text-left h-auto p-4 border-border hover:bg-primary/5 hover:border-primary"
                    onClick={() => handleSuggestedQuestion(question)}
                  >
                    <span className="text-sm">{question}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Disclaimer */}
          <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
            <h3 className="font-semibold text-foreground mb-2">Important Disclaimer</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              This AI assistant provides general educational information about legal concepts and should not be considered as legal advice. 
              The information provided is not a substitute for professional legal counsel. For specific legal matters, always consult 
              with a qualified attorney who can provide advice tailored to your particular situation.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Assistant;