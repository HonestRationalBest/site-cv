import React from "react";
import case_01 from "../../images/case_01.png";
import case_02 from "../../images/case_02.png";
import case_03 from "../../images/case_03.png";
import link_arrow from "../../icons/link-arrow.svg"
import "./index.scss";

const Cases = () => {
  return (
    <main className="cases">
      <div className="cases__container">
        <div className="cases__body body-cases">
          <div className="body-cases__text text-cases">
            <div className="text-cases__text">Hey! 👋 Nice to meet you...</div>
            <div className="text-cases__title">CASES</div>
          </div>
          <div className=" body-cases__content cases-content">
            <div className="cases-content__elem elem">
              <img src={case_01} alt="case_01" className="elem__img" />
              <div className="elem__link">
                <div className="elem__title">KJAERWEIST - online store</div>
                <button className="elem__button"><img src={link_arrow} alt="link_arrow"/></button>
              </div>
            </div>
            <div className="cases-content__elem elem _change-direction">
              <img src={case_02} alt="case_02" className="elem__img" />
              <div className="elem__link">
                <div className="elem__title">KJAERWEIST - online store</div>
                <button className="elem__button"><img src={link_arrow} alt="link_arrow"/></button>
              </div>
            </div>
            <div className="cases-content__elem elem">
              <img src={case_03} alt="case_01" className="elem__img" />
              <div className="elem__link">
                <div className="elem__title">KJAERWEIST - online store</div>
                <button className="elem__button"><img src={link_arrow} alt="link_arrow"/></button>
              </div>
            </div>
            <div className="cases-content__elem elem _change-direction">
              <img src={case_02} alt="case_02" className="elem__img" />
              <div className="elem__link">
                <div className="elem__title">KJAERWEIST - online store</div>
                <button className="elem__button"><img src={link_arrow} alt="link_arrow"/></button>
              </div>
            </div>
            <div className="cases-content__elem elem">
              <img src={case_01} alt="case_01" className="elem__img" />
              <div className="elem__link">
                <div className="elem__title">KJAERWEIST - online store</div>
                <button className="elem__button"><img src={link_arrow} alt="link_arrow"/></button>
              </div>
            </div>
            <div className="cases-content__elem elem _change-direction">
              <img src={case_02} alt="case_02" className="elem__img" />
              <div className="elem__link">
                <div className="elem__title">KJAERWEIST - online store</div>
                <button className="elem__button"><img src={link_arrow} alt="link_arrow"/></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Cases;
