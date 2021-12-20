import React from "react";
import arrow_link from "../../icons/link-arrow.svg";
import arrow from "../../icons/arrow.svg";
import slider_img_1 from "../../images/slider_img_1.jpg";
import slider_img_2 from "../../images/slider_img_2.jpg";
import star__img from "../../images/star_img.png";
import about__main from "../../images/about_main.png";
import "./index.scss";
import { NavLink } from "react-router-dom";
import client_img_01 from "../../images/client_img_01.png";
import client_img_02 from "../../images/client_img_02.png";
import client_img_03 from "../../images/client_img_03.png";
import client_img_04 from "../../images/client_img_04.png";
import client_img_05 from "../../images/client_img_05.png";
import client_img_06 from "../../images/client_img_06.png";
import { ClientGirdItem } from "../../components/ClinetGridItem/ClientGirdItem";

const Home = () => {

  const screenWidth = document.documentElement.clientWidth;

  return (
    <main className="main">
      <section className="main__header main-header">
        <div className="main__container">
          <div className={screenWidth > 1000 ? "main-header__body" : "main-header__body tablet-body-header-main"}>
            <div className="main-header__offer offer-header">
              <h1 className="offer-header__title">
                HELLO, My name is Angelina. I’M UI/UX DESIGNER  
              </h1>
              <div className="offer-header__text">
                I create website and application design
              </div>
              <img src={arrow_link} alt="arrow_link" />
              <img src={star__img} alt="star" className="offer-header__img" />
            </div>
            {screenWidth > 1000 ? <div className="main-header__img"></div>: ""}
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
            <NavLink to="/cases">
              <div className="cases-main__link">
                View all
                <img src={arrow} alt="arrow" />
              </div>
            </NavLink>
          </div>
          <div className="cases-main__slider cases-slider">
            <div className="cases-slider__elem">
              <img src={slider_img_1} alt="slider_img_1" />
            </div>
            <div className="cases-slider__elem">
              <img src={slider_img_2} alt="slider_img_2" />
            </div>
          </div>
        </div>
      </section>
      <section className="main__services services-main">
        <div className="main__container">
          <div className="services-main__title">Design services</div>
          <div className="services-main__table table-services">
            <div className="table-services__elem">
              <div className="table-services__text">Landing page</div>
              <div className="table-services__price">from 120$</div>
            </div>
            <div className="table-services__elem">
              <div className="table-services__text">Online store</div>
              <div className="table-services__price">from 240$</div>
            </div>
            <div className="table-services__elem">
              <div className="table-services__text">Corporate website</div>
              <div className="table-services__price">from 240$</div>
            </div>
            <div className="table-services__elem">
              <div className="table-services__text">Application</div>
              <div className="table-services__price">from 280$</div>
            </div>
            <div className="table-services__elem">
              <div className="table-services__text">
                Creatives for social networks
              </div>
              <div className="table-services__price">from 40$</div>
            </div>
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
                creation of design for websites and applications.{" "}
              </div>
              <div className="about-body__text">
                I have experience working in two agencies Alavir and 69pixels,
                which are located in Belarus.
              </div>
              <NavLink to="/about">
                <div className="about-body__button">
                  Read more <img src={arrow} alt="arrow" />
                </div>
              </NavLink>
            </div>
            <div className="about-body__img">
            </div>
          </div>
        </div>
      </section>
      <section className="main__clients clients-main">
        <div className="main__container">
          <div className=" clients-main__title">clients</div>
          <div className=" clients-main__grid clients-grid">
            <ClientGirdItem img={client_img_01} />
            <ClientGirdItem img={client_img_02} />
            <div className="clients-grid__item _empty-clients-grid-item">
              THIS IS THE PLACE FOR YOU
            </div>
            <div className="clients-grid__item _empty-clients-grid-item">
              OR, IF YOU LIKE - IT
            </div>
            <ClientGirdItem img={client_img_03} />
            <ClientGirdItem img={client_img_04} />
            <ClientGirdItem img={client_img_05} />
            <ClientGirdItem img={client_img_06} />
            <div className="clients-grid__item _empty-clients-grid-item"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
