import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Home from "./pages/Home";
import Cases from "./pages/Cases";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import "./style/app/App.scss";
import "./style/fonts/Fonts.scss";

const App = () => {
  const [menuStatus, setMenuStatus] = useState(false)

  const handleNavigation = async (e: any) => {
    const window = e.currentTarget;
    if (document.documentElement.clientHeight - 80 < window.scrollY) {
      setMenuStatus(true)
    }else{
      setMenuStatus(false)
    }
  };

  useEffect(()=>{
    window.addEventListener('scroll',(e)=> handleNavigation(e));
  }, [])

  return (
    <>
      <Header menuStatus={menuStatus}/>
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </>
      </Routes>
      <Footer />
    </>
  );
};

export default App;
