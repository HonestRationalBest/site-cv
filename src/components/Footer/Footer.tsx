import React from "react";
import "./Footer.scss";
import {ReactComponent as Arrow} from "../../icons/white_arrow.svg";
import { NavLink } from "react-router-dom";
import * as Scroll from 'react-scroll';

export const Footer = () => {

  const scrollToTop = () => {
    Scroll.animateScroll.scrollToTop()
  }

  return (
    <footer className="footer">
      <div className="footer__container">
          <div className="footer__title">
        <NavLink to="/contacts" onClick={scrollToTop}>
          <h1>
            Let's talk
            <Arrow stroke="#fff"/>
          </h1>
        </NavLink>
          </div>
        <div className="footer__body">
          <div className="footer__menu menu-footer">
            <div className="menu-footer__elem">
              <ul className="menu-footer__list">
                <li className="menu-footer__item" onClick={scrollToTop}>
                  <NavLink to="/cases" >cases</NavLink>
                </li>
                <li className="menu-footer__item" onClick={scrollToTop}>
                  <NavLink to="/about" >about</NavLink>
                </li>
                <li className="menu-footer__item" onClick={scrollToTop}>
                  <NavLink to="/contacts" >contact</NavLink>
                </li>
              </ul>
            </div>
            <div className="menu-footer__elem">
              <ul className="menu-footer__list">
                <li className="menu-footer__item"><a href="https://www.instagram.com/a_sa_ch/">instagram</a></li>
                <li className="menu-footer__item"><a href="https://www.behance.net/angelinsachivk">behance</a></li>
                <li className="menu-footer__item"><a href="https://www.linkedin.com/in/angelina-sachivko-3467111b7/">linkedin</a></li>
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
