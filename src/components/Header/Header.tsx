import { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { scrollToTop } from "../../services";

import { ReactComponent as Hamburger } from "../../icons/hamburger.svg";
import { ReactComponent as Cross } from "../../icons/cross.svg";
import blackLogo from "../../images/logo_black.png";
import whiteLogo from "../../images/logo_white.png";

import "./Header.scss";

type TextColor = "white" | "black";

export const Header = () => {
  const [menuTextColor, setMenuTextColor] = useState<TextColor>();
  const [openMenu, setMenuOpen] = useState<boolean>(false);
  const location = useLocation();
  const screenWidth = document.documentElement.clientWidth;

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (
        location.pathname === "/" &&
        document.documentElement.clientHeight - 80 < window.scrollY
      ) {
        setMenuTextColor("black");
      }
      if (
        location.pathname === "/" &&
        document.documentElement.clientHeight - 80 > window.scrollY
      ) {
        setMenuTextColor("white");
      }
      if (location.pathname !== "/") {
        setMenuTextColor("black");
      }
    },
    [location]
  );


  useEffect(() => {
    if (location.pathname === "/") {
      setMenuTextColor("white");
    } else {
      setMenuTextColor("black");
    }
    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, [handleNavigation, location]);

  return (
    <header className="header">
      <div className="header__container">
        <div className={menuTextColor === "black" ? "header__body body-header _active_body" :"header__body body-header"}>
          <div className="body-header__languages header-languages">
            <ul className="header-languages__list">
              <li className="header-languages__item">EN </li>
              <li className="header-languages__item _not-active">RU </li>
            </ul>
          </div>
          {screenWidth > 700 ? (
            <div className="body-header__main header-main">
              <ul className="header-main__list">
                <li className="header-main__item">
                  <NavLink to="/cases" onClick={scrollToTop}>
                    Cases
                  </NavLink>
                </li>
                {screenWidth > 1050 ? (
                  <li className="header-main__item">
                    <NavLink to="/about" onClick={scrollToTop}>
                      About
                    </NavLink>
                  </li>
                ) : (
                  ""
                )}
              </ul>
            </div>
          ) : (
            ""
          )}
          <div className="body-header__logo">
            <NavLink to="/" onClick={scrollToTop}>
              {menuTextColor === "black" ? (
                <img src={blackLogo} alt="blackLogo" />
              ) : (
                <img src={whiteLogo} alt="whiteLogo" />
              )}
            </NavLink>
          </div>
          {screenWidth > 700 ? (
            <div className="body-header__contacts">
              {screenWidth < 1050 ? (
                <NavLink
                  to="/about"
                  className="body-header__contacts-about"
                  onClick={scrollToTop}
                >
                  About
                </NavLink>
              ) : (
                ""
              )}
              <NavLink to="/contacts" onClick={scrollToTop}>
                Contact
              </NavLink>
            </div>
          ) : (
            <div
              className="body-header__hamburger__wrapper"
              onClick={() => setMenuOpen(!openMenu)}
            >
              MENU
              <Hamburger
                className="body-header__hamburger"
                fill={menuTextColor === "black" ? "#000" : "#fff"}
              />
            </div>
          )}
          {openMenu && (
            <div
              className={
                menuTextColor === "black"
                  ? "body-header__menu menu-header _white"
                  : "body-header__menu menu-header"
              }
            >
              <Cross
                fill="#A0A0A0"
                className="menu-header__cross"
                onClick={() => setMenuOpen(!openMenu)}
              />
              <div className="menu-header__list">
                <ul>
                  <li onClick={() => setMenuOpen(!openMenu)}>
                    <NavLink to="/" onClick={scrollToTop}>
                      MAIN
                    </NavLink>
                  </li>
                  <li onClick={() => setMenuOpen(!openMenu)}>
                    <NavLink to="/cases" onClick={scrollToTop}>
                      CASES
                    </NavLink>
                  </li>
                  <li onClick={() => setMenuOpen(!openMenu)}>
                    <NavLink to="/about" onClick={scrollToTop}>
                      ABOUT
                    </NavLink>
                  </li>
                  <li onClick={() => setMenuOpen(!openMenu)}>
                    <NavLink to="/contacts" onClick={scrollToTop}>
                      CONTACT
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="menu-header__footer">MENU</div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
