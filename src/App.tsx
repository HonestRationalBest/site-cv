import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import Home from "./pages/Home";
import Cases from "./pages/Cases";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import "./style/app/App.scss";
import "./style/fonts/Fonts.scss";
import * as Scroll from 'react-scroll';

const App = () => {

  useEffect(()=>{
    Scroll.Events.scrollEvent.register('begin', function(to, element) {
      console.log('begin', arguments);
    });

    Scroll.Events.scrollEvent.register('end', function(to, element) {
      console.log('end', arguments);
    });

    Scroll.scrollSpy.update();

    return ()=>{
      Scroll.Events.scrollEvent.remove('begin');
      Scroll.Events.scrollEvent.remove('end');
    }
  },[])

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
      <Footer />
    </>
  );
};

export default App;
