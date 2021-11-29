import React from "react";
import arrow_link from "../../icons/link-arrow.svg";
import "./style/Home.scss";

const Home = () => {
  return (
    <main className="main">
      <section className="main__header main-header">
        <div className="main__container">
          <div className="main-header__body">
            <div className="main-header__offer offer-header">
              <h1 className="offer-header__title">
                HELLO, My name is Angelina. I’M UI/UX DESIGNER
              </h1>
              <div className="offer-header__text">
                I create website and application design
              </div>
              <img src={arrow_link} alt="arrow_link" />
            </div>
            <div className="main-header__img"></div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
