import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: string;
  setLanguage: (lang: string) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    home: 'Home',
    aboutUs: 'About Us',
    faq: 'FAQ',
    login: 'Login',
    signUp: 'Sign Up',
    // Upload page
    documentAnalysis: 'Document Analysis',
    uploadDocument: 'Upload Document',
    analysisOptions: 'Analysis Options',
    viewMode: 'View Mode',
    explanationLevel: 'Explanation Level',
    readingLevel: 'Reading Level',
    analyzeDocument: 'Analyze Document',
    riskAssessment: 'Risk Assessment',
    documentRisk: 'Document Risk',
    fairnessScore: 'Fairness Score',
    lowRisk: 'Low Risk',
    moderateRisk: 'Moderate Risk',
    highRisk: 'High Risk',
    // Common
    language: 'Language',
  },
  es: {
    // Navbar
    home: 'Inicio',
    aboutUs: 'Acerca de',
    faq: 'Preguntas',
    login: 'Iniciar Sesión',
    signUp: 'Registrarse',
    // Upload page
    documentAnalysis: 'Análisis de Documentos',
    uploadDocument: 'Subir Documento',
    analysisOptions: 'Opciones de Análisis',
    viewMode: 'Modo de Vista',
    explanationLevel: 'Nivel de Explicación',
    readingLevel: 'Nivel de Lectura',
    analyzeDocument: 'Analizar Documento',
    riskAssessment: 'Evaluación de Riesgo',
    documentRisk: 'Riesgo del Documento',
    fairnessScore: 'Puntuación de Equidad',
    lowRisk: 'Riesgo Bajo',
    moderateRisk: 'Riesgo Moderado',
    highRisk: 'Riesgo Alto',
    // Common
    language: 'Idioma',
  },
  fr: {
    // Navbar
    home: 'Accueil',
    aboutUs: 'À Propos',
    faq: 'FAQ',
    login: 'Connexion',
    signUp: 'S\'inscrire',
    // Upload page
    documentAnalysis: 'Analyse de Documents',
    uploadDocument: 'Télécharger Document',
    analysisOptions: 'Options d\'Analyse',
    viewMode: 'Mode d\'Affichage',
    explanationLevel: 'Niveau d\'Explication',
    readingLevel: 'Niveau de Lecture',
    analyzeDocument: 'Analyser Document',
    riskAssessment: 'Évaluation des Risques',
    documentRisk: 'Risque du Document',
    fairnessScore: 'Score d\'Équité',
    lowRisk: 'Risque Faible',
    moderateRisk: 'Risque Modéré',
    highRisk: 'Risque Élevé',
    // Common
    language: 'Langue',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const t = (key: string): string => {
    return translations[language as keyof typeof translations]?.[key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};