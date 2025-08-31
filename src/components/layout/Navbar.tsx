import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Scale, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-background border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <Scale className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold text-primary">Legalyze</span>
            </Link>
            
            <div className="hidden md:flex space-x-6">
              <Link
                to="/home"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/home')
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {t('home')}
              </Link>
              <Link
                to="/glossary"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/glossary')
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                Glossary
              </Link>
              <Link
                to="/comparator"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/comparator')
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                Comparator
              </Link>
              <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/about')
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {t('aboutUs')}
              </Link>
              <Link
                to="/faq"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive('/faq')
                    ? 'text-primary bg-primary/10'
                    : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
              >
                {t('faq')}
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-20 h-8 text-xs">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">EN</SelectItem>
                  <SelectItem value="es">ES</SelectItem>
                  <SelectItem value="fr">FR</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button 
              variant="ghost" 
              onClick={() => navigate('/login')}
              className="text-foreground hover:text-primary"
            >
              {t('login')}
            </Button>
            <Button 
              onClick={() => navigate('/signup')}
              className="bg-gradient-hero text-primary-foreground hover:opacity-90 shadow-button"
            >
              {t('signUp')}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};