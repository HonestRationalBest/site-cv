import React from "react";
import "./Footer.scss";
import arrow from "../../icons/white_arrow.svg";
import { NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <NavLink to="/contacts">
          <h1 className="footer__title">
            let's talk
            <img src={arrow} alt="arrow" />
          </h1>
        </NavLink>
        <div className="footer__body">
          <div className="footer__menu menu-footer">
            <div className="menu-footer__elem">
              <ul className="menu-footer__list">
                <li className="menu-footer__item">
                  <NavLink to="/cases">cases</NavLink>
                </li>
                <li className="menu-footer__item">
                  <NavLink to="/about">about</NavLink>
                </li>
                <li className="menu-footer__item">
                  <NavLink to="/contacts">contacts</NavLink>
                </li>
              </ul>
            </div>
            <div className="menu-footer__elem">
              <ul className="menu-footer__list">
                <li className="menu-footer__item"><a href="">instagram</a></li>
                <li className="menu-footer__item"><a href="">behance</a></li>
                <li className="menu-footer__item"><a href="">whatsapp</a></li>
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
