import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.scss";
import { useLocation } from "react-router-dom";
import hamburger from "../../icons/hamburger.svg";

type TextColor = "white" | "black";

export const Header = () => {
  const [menuTextColor, setMenuTextColor] = useState<TextColor>();
  const [openMenu, setMenuOpen] = useState<boolean>(false)
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
    <header className={menuTextColor === "black" ? "header _active" : "header"}>
      <div className="header__container">
        <div className="header__body body-header">
          <div className="body-header__languages header-languages">
            <ul className="header-languages__list">
              <li className="header-languages__item">EN </li>
              <li className="header-languages__item _not-active">PL </li>
            </ul>
          </div>
          {screenWidth > 700 ? (
            <div className="body-header__main header-main">
              <ul className="header-main__list">
                <li className="header-main__item">
                  <NavLink to="/cases">Cases</NavLink>
                </li>
                {screenWidth > 1050 ? (
                  <li className="header-main__item">
                    <NavLink to="/about">About</NavLink>
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
            <NavLink to="/">Paranoja</NavLink>
          </div>
          {screenWidth > 700 ? (
            <div className="body-header__contacts">
              {screenWidth < 1050 ? (
                <NavLink to="/about" className="body-header__contacts-about">
                  About
                </NavLink>
              ) : (
                ""
              )}
              <NavLink to="/contacts">Contact</NavLink>
            </div>
          ) : (
            <img src={hamburger} alt="hamburger" className="body-header__hamburger" onClick={()=>setMenuOpen(!openMenu)}/>
          )}
        </div>
      </div>
    </header>
  );
};
