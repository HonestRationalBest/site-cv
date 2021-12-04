import React, { useCallback, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./style/Header.scss";
import { useLocation } from "react-router-dom";

type TextColor = "white" | "black";

export const Header = () => {
  const [menuTextColor, setMenuTextColor] = useState<TextColor>();
  const location = useLocation();

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
      if(location.pathname !== "/"){
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
          <div className="body-header__main header-main">
            <ul className="header-main__list">
              <li className="header-main__item">
                <NavLink to="/cases">Cases</NavLink>
              </li>
              <li className="header-main__item">
                <NavLink to="/about">About</NavLink>
              </li>
            </ul>
          </div>
          <div className="body-header__logo"><NavLink to="/">Paranoja</NavLink></div>
          <div className="body-header__contacts">
            <NavLink to="/contacts">Contact</NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};
