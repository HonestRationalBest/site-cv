//@ts-nocheck
import { useState } from "react";
import { NavLink } from "react-router-dom";
import ItemsCarousel from "react-items-carousel";

import { gridData, servicesData } from "./constants";
import { ClientGirdItem, Service } from "./components";
import { scrollToTop } from "../../services";

import { ReactComponent as Arrow } from "../../icons/white_arrow.svg";
import { ReactComponent as SliderArrow } from "../../icons/slider_arrow.svg";
import slider_img_1 from "../../images/slider_img_1.jpg";
import slider_img_2 from "../../images/slider_img_2.jpg";

import "./index.scss";

const Home = () => {
  let [activeItem, setActiveItem] = useState(0);
  const countSlides = 5;
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
    <main className="main">
      <section className="main__header main-header">
        <div className="main__container">
          <div className="main-header__body tablet-body-header-main">
            <div className="main-header__offer offer-header">
              <h1 className="offer-header__title">
                Hello, My name is Angelina. I’m UI/UX designer
              </h1>
              <div className="offer-header__text">
                I create website and application design
              </div>
              <button className="offer-header__button">
                Let's talk <Arrow stroke="#fff" />
              </button>
            </div>
            <div className="main-header__img"></div>
          </div>
        </div>
      </section>
      <section className="main__cases cases-main">
        <div className="main__container">
          <div className="cases-main__content">
            <div className="cases-main__offer cases-offer">
              <div className="cases-offer__text">
                Hey! 👋 Nice to meet you...
              </div>
              <div className="cases-offer__title">Cases</div>
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
            <div className="cases-slider__elem">
              <img src={slider_img_1} alt="slider_img_1" />
            </div>
            <div className="cases-slider__elem">
              <img src={slider_img_2} alt="slider_img_2" />
            </div>
            <div className="cases-slider__elem">
              <img src={slider_img_2} alt="slider_img_2" />
            </div>
            <div className="cases-slider__elem">
              <img src={slider_img_2} alt="slider_img_2" />
            </div>
            <div className="cases-slider__elem">
              <img src={slider_img_1} alt="slider_img_1" />
            </div>
          </ItemsCarousel>
        </div>
      </section>
      <section className="main__services services-main">
        <div className="main__container">
          <div className="services-main__title">Design services</div>
          <div className="services-main__table table-services">
            {servicesData.map((service) => (
              <Service {...service} key={service.text} />
            ))}
          </div>
        </div>
      </section>
      <section className="main__about about-main">
        <div className="main__container">
          <div className="main-about__body about-body">
            <div className="about-body__content">
              <div className="about-body__title">About me</div>
              <div className="about-body__text">
                I’m a ux/ui designer based in Poland. Core competencies are the
                creation of design for websites and applications.
              </div>
              <div className="about-body__text">
                I have experience working in two agencies Alavir and 69pixels,
                which are located in Belarus.
              </div>
              <NavLink to="/about" onClick={scrollToTop}>
                <button className="about-body__button">
                  Read more <Arrow stroke="#000" />
                </button>
              </NavLink>
            </div>
            <div className="about-body__img"></div>
          </div>
        </div>
      </section>
      <section className="main__clients clients-main">
        <div className="main__container">
          <div className=" clients-main__title">Clients</div>
          <div className=" clients-main__grid clients-grid">
            {gridData.map((elem) => (
              <ClientGirdItem {...elem} key={elem.img} />
            ))}
          </div>
        </div>
      </section>
      <section className="main__quote quote-main">
        <div className="main__container">
          <div className="quote-main__text">
            “My mission as a designer is to create memorable and convenient
            products. Approach the solution of each product respectfully and
            uniquely”
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
