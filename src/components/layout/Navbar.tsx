import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Scale, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { language, setLanguage, t } = useLanguage();

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 bg-background/70 backdrop-blur-md border-b border-border shadow-md">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Left: Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Scale className="h-10 w-10 text-primary group-hover:scale-110 transition-transform duration-200" />
            <span className="text-3xl font-bold text-foreground tracking-tight">
              Legalyze
            </span>
          </Link>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { path: "/home", label: t("home") },
              { path: "/glossary", label: "Glossary" },
              { path: "/comparator", label: "Comparator" },
              { path: "/aboutus", label: t("aboutUs") },
              { path: "/faq", label: t("faq") },
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-lg font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? "text-primary bg-primary/10"
                    : "text-foreground hover:text-white hover:bg-blue-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right: Language Selector + Auth */}
          <div className="flex items-center space-x-4 ">
            {/* Language Selector */}
            <div className="flex items-center space-x-2 ">
              <Globe className="h-4 w-4 text-muted-foreground" />
              <Select value={language} onValueChange={setLanguage}>
                <SelectTrigger className="w-20 h-8 text-lg ">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">EN</SelectItem>
                  <SelectItem value="es">ES</SelectItem>
                  <SelectItem value="fr">FR</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Auth Buttons */}
            <Button
              variant="ghost"
              onClick={() => navigate("/login")}
              className="text-foreground hover:text-white text-lg hover:bg-blue-900  transition-colors duration-200"
            >
              {t("login")}
            </Button>
            <Button
              onClick={() => navigate("/signup")}
              className="bg-gradient-to-r from-blue-500 to-teal-400 text-white text-lg hover:opacity-90 shadow-lg transition-all duration-200"
            >
              {t("signUp")}
            </Button>
          </div>

        </div>
      </div>
    </nav>
  );
};
