import { useCallback, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { scrollToTop } from "../../services";
import { languages } from "../../context";
import LanguageContext from "../../context/LanguageContext";

import { ReactComponent as Hamburger } from "../../icons/mobile_menu.svg";
import { ReactComponent as Cross } from "../../icons/cross.svg";
import { ReactComponent as Logo } from "../../icons/logo.svg";

import "./Header.scss";

type TextColor = "white" | "black";

interface HeaderProps {
  toggleLanguages: (currentLanguage: any) => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleLanguages }) => {
  const [menuTextColor, setMenuTextColor] = useState<TextColor>();
  const [openMenu, setMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const language = useContext(LanguageContext);

  const screenHeight = document.documentElement.clientHeight;

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (location.pathname === "/" && screenHeight - 80 < window.scrollY) {
        setMenuTextColor("black");
      }
      if (location.pathname === "/" && screenHeight - 80 > window.scrollY) {
        setMenuTextColor("white");
      }
      if (location.pathname !== "/") {
        setMenuTextColor("black");
      }
    },
    [location, screenHeight]
  );

  const getCurrentLanguage = () => (language === languages.en ? "en" : "ru");

  const handleChangeLanguage = () => {
    toggleLanguages(getCurrentLanguage());
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setMenuTextColor("white");
    } else {
      setMenuTextColor("black");
    }
    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, [handleNavigation, location]);

  return (
    <header className={getCurrentLanguage() === "ru" ? "header ru" : "header"}>
      <div className="header__container">
        <div
          className={
            menuTextColor === "black"
              ? "header__body body-header _active_body"
              : "header__body body-header"
          }
        >
          <div className="body-header__languages header-languages">
            <ul className="header-languages__list">
              <li
                className={
                  getCurrentLanguage() === "en"
                    ? "header-languages__item"
                    : "header-languages__item _not-active"
                }
                onClick={() => handleChangeLanguage()}
              >
                EN{" "}
              </li>
              <li
                className={
                  getCurrentLanguage() === "ru"
                    ? "header-languages__item"
                    : "header-languages__item _not-active"
                }
                onClick={() => handleChangeLanguage()}
              >
                RU{" "}
              </li>
            </ul>
          </div>
          <div className="body-header__main header-main">
            <ul className="header-main__list">
              <li className="header-main__item">
                <NavLink to="/cases" onClick={scrollToTop}>
                  {language?.header.cases}
                </NavLink>
              </li>
              <li className="header-main__item about">
                <NavLink to="/about" onClick={scrollToTop}>
                  {language?.header.about}
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="body-header__logo">
            <NavLink to="/" onClick={scrollToTop}>
              {menuTextColor === "black" ? (
                <Logo fill="#000" />
              ) : (
                <Logo fill="#fff" />
              )}
            </NavLink>
          </div>
          <div className="body-header__contacts">
            <NavLink
              to="/about"
              className="body-header__contacts-about"
              onClick={scrollToTop}
            >
              {language?.header.about}
            </NavLink>
            <NavLink to="/contacts" onClick={scrollToTop}>
              {language?.header.contacts}
            </NavLink>
          </div>
          <div
            className="body-header__hamburger__wrapper"
            onClick={() => setMenuOpen(!openMenu)}
          >
            <Hamburger
              className="body-header__hamburger"
              fill={menuTextColor === "black" ? "#000" : "#fff"}
            />
          </div>
          {openMenu && (
            <div
              className={
                menuTextColor === "black"
                  ? "body-header__menu menu-header _white"
                  : "body-header__menu menu-header"
              }
            >
              <div className="menu-header__wrapper">
                <Cross
                  fill={menuTextColor === "black" ? "#AAAAAA" : "#545454"}
                  className="menu-header__cross"
                  onClick={() => setMenuOpen(!openMenu)}
                />
                <div className="menu-header__list">
                  <ul>
                    <li onClick={() => setMenuOpen(!openMenu)}>
                      <NavLink to="/" onClick={scrollToTop}>
                        {language.header.main}
                      </NavLink>
                    </li>
                    <li onClick={() => setMenuOpen(!openMenu)}>
                      <NavLink to="/cases" onClick={scrollToTop}>
                        {language.header.cases}
                      </NavLink>
                    </li>
                    <li onClick={() => setMenuOpen(!openMenu)}>
                      <NavLink to="/about" onClick={scrollToTop}>
                        {language.header.about}
                      </NavLink>
                    </li>
                    <li onClick={() => setMenuOpen(!openMenu)}>
                      <NavLink to="/contacts" onClick={scrollToTop}>
                        {language.header.contacts}
                      </NavLink>
                    </li>
                  </ul>
                </div>
                <div className="menu-header__footer">
                  {language.header.menu}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
