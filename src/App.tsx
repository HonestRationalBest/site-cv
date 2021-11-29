import React from "react";
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
  return (
    <>
      <Header />
      <Routes>
        <>
          <Route path="/" element={<Home />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/about" element={<About />} />
          <Route path="/contacts" element={<Contacts />} />
        </>
      </Routes>
      {/* <Footer /> */}
    </>
  );
};

export default App;
