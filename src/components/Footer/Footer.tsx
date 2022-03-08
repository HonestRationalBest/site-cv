import { useContext } from "react";
import { NavLink } from "react-router-dom";

import { scrollToTop } from "../../services";
import LanguageContext from "../../context/LanguageContext";
import { languages } from "../../context";

import { ReactComponent as Arrow } from "../../icons/white_arrow.svg";

import "./Footer.scss";

export const Footer = () => {

  const language = useContext(LanguageContext);
  
  const getCurrentLanguage = () => (language === languages.en ? "en" : "ru");

  return (
    <footer className={getCurrentLanguage() === "ru" ? "footer ru" : "footer"}>
      <div className="footer__container">
        <div className="footer__title">
          <NavLink to="/contacts" onClick={scrollToTop}>
            <h1>
              {language?.footer.title}
              <Arrow stroke="#fff" />
            </h1>
          </NavLink>
        </div>
        <div className="footer__body">
          <div className="footer__menu menu-footer">
            <div className="menu-footer__elem">
              <ul className="menu-footer__list">
                <li className="menu-footer__item" onClick={scrollToTop}>
                  <NavLink to="/cases">{language?.footer.cases}</NavLink>
                </li>
                <li className="menu-footer__item" onClick={scrollToTop}>
                  <NavLink to="/about">{language?.footer.about}</NavLink>
                </li>
                <li className="menu-footer__item" onClick={scrollToTop}>
                  <NavLink to="/contacts">{language?.footer.contacts}</NavLink>
                </li>
              </ul>
            </div>
            <div className="menu-footer__elem">
              <ul className="menu-footer__list">
                <li className="menu-footer__item">
                  <a href="https://www.instagram.com/a_sa_ch/" rel="noreferrer" target="_blank">{language?.footer.instagram}</a>
                </li>
                <li className="menu-footer__item">
                  <a href="https://www.behance.net/angelinsachivk" rel="noreferrer" target="_blank">{language?.footer.behance}</a>
                </li>
                <li className="menu-footer__item">
                  <a href="https://www.linkedin.com/in/angelina-sachivko-3467111b7/" rel="noreferrer" target="_blank">
                  {language?.footer.whatsapp}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__info info-footer">
            <div className="info-footer__elem">
            {language?.footer.copyright}
            </div>
            <div className="info-footer__elem">{language?.footer.privacy}</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
