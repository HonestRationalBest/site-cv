import { NavLink } from "react-router-dom";

import { scrollToTop } from "../../services";

import { ReactComponent as Arrow } from "../../icons/white_arrow.svg";

import "./Footer.scss";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__title">
          <NavLink to="/contacts" onClick={scrollToTop}>
            <h1>
              Let's talk
              <Arrow stroke="#fff" />
            </h1>
          </NavLink>
        </div>
        <div className="footer__body">
          <div className="footer__menu menu-footer">
            <div className="menu-footer__elem">
              <ul className="menu-footer__list">
                <li className="menu-footer__item" onClick={scrollToTop}>
                  <NavLink to="/cases">cases</NavLink>
                </li>
                <li className="menu-footer__item" onClick={scrollToTop}>
                  <NavLink to="/about">about</NavLink>
                </li>
                <li className="menu-footer__item" onClick={scrollToTop}>
                  <NavLink to="/contacts">contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="menu-footer__elem">
              <ul className="menu-footer__list">
                <li className="menu-footer__item">
                  <a href="https://www.instagram.com/a_sa_ch/" rel="noreferrer" target="_blank">instagram</a>
                </li>
                <li className="menu-footer__item">
                  <a href="https://www.behance.net/angelinsachivk" rel="noreferrer" target="_blank">behance</a>
                </li>
                <li className="menu-footer__item">
                  <a href="https://www.linkedin.com/in/angelina-sachivko-3467111b7/" rel="noreferrer" target="_blank">
                    linkedin
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__info info-footer">
            <div className="info-footer__elem">
              Copyright © 2021. All rights reserved.
            </div>
            <div className="info-footer__elem">Privacy policy</div>
          </div>
        </div>
      </div>
    </footer>
  );
};
