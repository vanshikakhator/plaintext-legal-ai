import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "@/contexts/LanguageContext";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import Upload from "./pages/Upload";
import AboutUs from "./pages/AboutUs";
import Translator from "./pages/Translator";
import Assistant from "./pages/Assistant";
import Glossary from "./pages/Glossary";
import ClauseComparator from "./pages/ClauseComparator";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Faq from "./pages/Faq"
import NotFound from "./pages/NotFound";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <LanguageProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/home" element={<Home />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/translator" element={<Translator />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/assistant" element={<Assistant />} />
            <Route path="/glossary" element={<Glossary />} />
            <Route path="/comparator" element={<ClauseComparator />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/faq" element={<Faq />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
