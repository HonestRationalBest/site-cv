import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Home from "./pages/Home";
import Cases from "./pages/Cases";
import About from "./pages/About";
import Case from "./pages/Case";
import Contacts from "./pages/Contacts";
import "./style/app/App.scss";
import { LanguageProvider, languages } from "./context";

const App = () => {
  const [language, setLanguage] = useState<any>();

  const toggleLanguages = (currentLanguage: any) => {
    if(currentLanguage === "en"){
      setLanguage(languages.ru);
    }else if(currentLanguage === "ru"){
      setLanguage(languages.en);
    }
    // setLanguage(language === languages.en ? languages.ru : languages.en);
  };

  useEffect(() => {
    setLanguage(languages.en);
  }, []);

  return (
    <LanguageProvider value={language as any}>
      <Header toggleLanguages={toggleLanguages} />
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:case" element={<Case />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </>
      </Routes>
      <Footer />
    </LanguageProvider>
  );
};

export default App;
