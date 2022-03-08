import { useContext, useState } from "react";
//@ts-ignore
import ItemsCarousel from "react-items-carousel";
import { NavLink } from "react-router-dom";

import LanguageContext from "../../../../context/LanguageContext";

import { ReactComponent as SliderArrow } from "../../../../icons/slider_arrow.svg";
import { scrollToTop } from "../../../../services";

import "./index.scss";

export const Slider = () => {
  const language = useContext(LanguageContext);
  let [activeItem, setActiveItem] = useState(0);
  const countSlides = 7;
  const screenWidth = document.documentElement.clientWidth;

  const changeActiveItem = (type: string) => {
    if (type === "+" && countSlides - 2 > activeItem) {
      setActiveItem(++activeItem);
    }
    if (type === "-" && activeItem > 0) {
      setActiveItem(--activeItem);
    }
  };

  return (
    <div className="main__cases cases-main">
      <div className="main__container">
        <div className="cases-main__content">
          <div className="cases-main__offer cases-offer">
            <div className="cases-offer__text">{language?.home.cases.text}</div>
            <div className="cases-offer__title">
              {language?.home.cases.title}
            </div>
          </div>
          {/* <NavLink to="/cases"> */}
          <div className="cases-main__link">
            {activeItem === 0 ? (
              <SliderArrow
                stroke="#C5C5C5"
                className={"cases-main__left"}
                onClick={() => changeActiveItem("-")}
              />
            ) : (
              <SliderArrow
                stroke="#171717"
                className={"cases-main__left"}
                onClick={() => changeActiveItem("-")}
              />
            )}
            {countSlides - 2 === activeItem ? (
              <SliderArrow
                stroke="#C5C5C5"
                className={
                  countSlides === activeItem
                    ? "cases-main__right _disabled"
                    : "cases-main__right"
                }
                onClick={() => changeActiveItem("+")}
              />
            ) : (
              <SliderArrow
                stroke="#171717"
                className={
                  countSlides === activeItem
                    ? "cases-main__right _disabled"
                    : "cases-main__right"
                }
                onClick={() => changeActiveItem("+")}
              />
            )}
          </div>
          {/* </NavLink> */}
        </div>
        <ItemsCarousel
          activeItemIndex={activeItem}
          // requestToChangeActive={(index: any)=>setActiveItem(index)}
          numberOfCards={screenWidth < 650 ? 1 : 2}
          showSlither={true}
          gutter={20}
          firstAndLastGutter={false}
          freeScrolling={false}
          activePosition={"left"}
          className="cases-main__slider cases-slider"
        >
          <a href="https://www.behance.net/gallery/129543095/Kjaer-Weis-redesign-website">
            <div className="cases-slider__elem">
              <img
                src="https://res.cloudinary.com/ds8hydjea/image/upload/v1646678813/Rectangle_670_nsu8yj.png"
                alt="slider_img_1"
              />
            </div>
          </a>
          <a href="https://www.behance.net/gallery/135525347/WorkHub-website-design">
            <div className="cases-slider__elem">
              <img
                src="https://res.cloudinary.com/ds8hydjea/image/upload/v1646679089/Rectangle_671_grqpyh.png"
                alt="slider_img_3"
              />
            </div>
          </a>
          <a href="https://www.behance.net/gallery/131807507/WEB-SITE-FOR-STUDIO">
            <div className="cases-slider__elem">
              <img
                src="https://res.cloudinary.com/ds8hydjea/image/upload/v1646678814/Rectangle_672_sbhuc4.png"
                alt="slider_img_4"
              />
            </div>
          </a>
          <NavLink to="/cases/networks_01" onClick={scrollToTop}>
            <div className="cases-slider__elem">
              <img
                src="https://res.cloudinary.com/ds8hydjea/image/upload/v1646585543/Site-cv/Group_190638_ug7wmq.png"
                alt="slider_img_5"
              />
            </div>
          </NavLink>
          <NavLink to="/cases/networks_02" onClick={scrollToTop}>
            <div className="cases-slider__elem">
              <img
                src="https://res.cloudinary.com/ds8hydjea/image/upload/v1646585544/Site-cv/Group_190625_z5dpql.png"
                alt="slider_img_6"
              />
            </div>
          </NavLink>
          <a href="https://dribbble.com/shots/16503583-ASO-for-medical-center">
            <div className="cases-slider__elem">
              <img
                src="https://res.cloudinary.com/ds8hydjea/image/upload/v1646585543/Site-cv/Group_190626_wmgeia.png"
                alt="slider_img_7"
              />
            </div>
          </a>
          <a href="https://www.behance.net/gallery/118590177/UXUI-Sberhouse-app">
            <div className="cases-slider__elem">
              <img
                src="https://res.cloudinary.com/ds8hydjea/image/upload/v1646585544/Site-cv/Rectangle_674_byy4kr.png"
                alt="slider_img_1"
              />
            </div>
          </a>
        </ItemsCarousel>
      </div>
    </div>
  );
};
