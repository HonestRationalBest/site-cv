import React from "react";
import "./style/Header.scss";

export const Header = () => {
  return (
    <header className="header">
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
              <li className="header-main__item">Cases</li>
              <li className="header-main__item">About</li>
            </ul>
          </div>
          <div className="body-header__logo">Paranoja</div>
          <div className="body-header__contacts">Contact</div>
        </div>
      </div>
    </header>
  );
};
