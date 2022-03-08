import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";

import { ClientGirdItem, Service, Slider } from "./components";
import { scrollToTop } from "../../services";
import LanguageContext from "../../context/LanguageContext";
import { languages } from "../../context";

import { ReactComponent as Arrow } from "../../icons/white_arrow.svg";
import chevron from "../../icons/chevron_down.svg";

import "./index.scss";

const Home = () => {
  let [clientsCount, setClientsCount] = useState(3);
  const screenWidth = document.documentElement.clientWidth;

  const language = useContext(LanguageContext);

  const getCurrentLanguage = () => (language === languages.en ? "en" : "ru");

  return (
    <main className={getCurrentLanguage() === "ru" ? "main ru" : "main"}>
      <section className="main__header main-header">
        <div className="main__container">
          <div className="main-header__body tablet-body-header-main">
            <div className="main-header__offer offer-header">
              <h1 className="offer-header__title">
                {language?.home.header.title}
              </h1>
              <div className="offer-header__text">
                {language?.home.header.text}
              </div>
              <button className="offer-header__button">
                {language?.home.header.button} <Arrow stroke="#fff" />
              </button>
            </div>
            <div className="main-header__img"></div>
          </div>
        </div>
      </section>
      <section>
        <Slider/>
      </section>
      <section className="main__services services-main">
        <div className="main__container">
          <div className="services-main__title">{language?.home.services.title}</div>
          <div className="services-main__table table-services">
            {language?.home.services.data.map((service) => (
              <Service {...service} key={service.text} />
            ))}
          </div>
        </div>
      </section>
      <section className="main__about about-main">
        <div className="main__container">
          <div className="main-about__body about-body">
            <div className="about-body__content">
              <div className="about-body__title">
                {language?.home.about.title}
              </div>
              <div className="about-body__text">{language?.home.about.text}</div>
              <NavLink to="/about" onClick={scrollToTop}>
                <button className="about-body__button">
                  {language?.home.about.button} <Arrow stroke="#000" />
                </button>
              </NavLink>
            </div>
            <img className="about-body__img" src="https://res.cloudinary.com/ds8hydjea/image/upload/v1646586696/Site-cv/about_main_cyaoz3.png" alt="about img"/> 
          </div>
        </div>
      </section>
      <section className="main__clients clients-main">
        <div className="main__container">
          <div className="clients-main__title">
            {language?.home.clients.title}
          </div>
          <div className="clients-main__grid clients-grid">
            {screenWidth > 500 &&
              language?.home.clients.data.map((elem) => (
                <ClientGirdItem {...elem} key={elem.img} />
              ))}
            {screenWidth < 500 &&
              language?.home.clients.data
                .slice(0, clientsCount)
                .map((elem) => <ClientGirdItem {...elem} key={elem.img} />)}
          </div>
          {clientsCount !== 9 && screenWidth < 500 && (
            <button
              className="clients-main__button"
              onClick={() => setClientsCount(clientsCount + 3)}
            >
              see more
              <img src={chevron} alt="chevron" className="clients-main__icon" />
            </button>
          )}
        </div>
      </section>
      <section className="main__quote quote-main">
        <div className="main__container">
          <div className="quote-main__text">{language?.home.quote.text}</div>
        </div>
      </section>
    </main>
  );
};

export default Home;
