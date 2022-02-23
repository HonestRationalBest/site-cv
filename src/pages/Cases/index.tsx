import React from "react";
import case_01 from "../../images/case_01.png";
import case_02 from "../../images/case_02.png";
import case_03 from "../../images/case_03.png";
import tablet_01 from "../../images/tablet_01.png";
import tablet_02 from "../../images/tablet_02.png";
import tablet_03 from "../../images/tablet_03.png";
import tablet_04 from "../../images/tablet_04.png";
import link_arrow from "../../icons/link-arrow.svg"
import "./index.scss";

const Cases = () => {

  const screenWidth = document.documentElement.clientWidth;

  return (
    <main className="cases">
      <div className="cases__container">
        <div className="cases__body body-cases">
          <div className="body-cases__text text-cases">
            <div className="text-cases__text">Hey! 👋 Nice to meet you...</div>
            <div className="text-cases__title">Cases</div>
          </div>
          {screenWidth > 900 && <div className=" body-cases__content cases-content">
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
          </div>}
          { screenWidth < 900 && 
          <div className="body-cases__tabletcontent tablet-content">
              <div className="tablet-content__elem">
                <img src={tablet_01} alt="01"/>
                <h3>KJAERWEIST - online store</h3>
              </div>
              <div className="tablet-content__elem">
                <img src={tablet_02} alt="02"/>
                <h3>KJAERWEIST - online store</h3>
              </div>
              <div className="tablet-content__elem">
                <img src={tablet_03} alt="03"/>
                <h3>KJAERWEIST - online store</h3>
              </div>
              <div className="tablet-content__elem">
                <img src={tablet_04} alt="04"/>
                <h3>KJAERWEIST - online store</h3>
              </div>
            </div>
            }
        </div>
      </div>
    </main>
  );
};

export default Cases;
