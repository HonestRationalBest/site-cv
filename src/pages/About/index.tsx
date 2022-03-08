import { useContext } from "react";

import LanguageContext from "../../context/LanguageContext";
import { FaqItem, TableRow, CustomMarquee } from "./components";
import { languages } from "../../context";

import hash_code from "../../images/hash_code.png";
import main__about_img from "../../images/main_about_img.png";
import main_about_picture from "../../images/main__about_picture.png";

import "./index.scss";

const About = () => {
  const language = useContext(LanguageContext);

  const getCurrentLanguage = () => (language === languages.en ? "en" : "ru");

  return (
    <main className={getCurrentLanguage() === "ru" ? "about ru" : "about"}>
      <section className="about__main main-about">
        <div className="container">
          <div className="main-about__content">
            <div className="main-about__title">
              {language?.about.header.title}
            </div>
            <div className="main-about__text">{language?.about.header.text}</div>
          </div>
          <div className="main-about__images">
            <div className="main-about__photo">
              <img src={main__about_img} alt="main__about_img" />
            </div>
            <div className="main-about__picture">
              <img src={main_about_picture} alt="main_about_picture" />
            </div>
          </div>
        </div>
      </section>
      <section className="about__description">
        <div className="container">
          <div className="description-about">
            <div className="description-about__left">
              <div className="description-about__title">
                {language?.about.process.title}
              </div>
              <div className="description-about__text">
                {language?.about.process.text}
              </div>
            </div>
            <div className="description-about__table table-about">
              {language?.about.process.data.map((row) => (
                <TableRow {...row} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="about__ticket ticket-about">
        <div className="container">
          <div className="ticket-about__content">
            <div className="ticket-about__main main-ticket">
              <div className="main-ticket__content">
                <div className="main-ticket__title">
                  {language?.about.ticket.title}
                </div>
                <div className="main-ticket__text">
                  {language?.about.ticket.text}
                </div>
              </div>
              <div className="main-ticket__grid">
                <div className="main-ticket__item item-ticket">
                  <div className="item-ticket__title">
                    {language?.about.ticket.item1.title}
                  </div>
                  <div className="item-ticket__text">
                    {language?.about.ticket.item1.text}
                  </div>
                </div>
                <div className="main-ticket__item item-ticket">
                  <div className="item-ticket__title">
                    {language?.about.ticket.item2.title}
                  </div>
                  <div className="item-ticket__text">
                    {language?.about.ticket.item2.text}
                  </div>
                </div>
                <div className="main-ticket__item item-ticket">
                  <div className="item-ticket__title">
                    {language?.about.ticket.item3.title}
                  </div>
                  <div className="item-ticket__text">
                    {language?.about.ticket.item3.text}
                  </div>
                </div>
              </div>
            </div>
            <img
              className="ticket-about__img"
              src={hash_code}
              alt="hash_code"
            />
          </div>
        </div>
      </section>
      <section className="about__running-string running-string">
        <div className="running-string__marquee">
          <CustomMarquee text={language?.about.marquee.text} />
        </div>
      </section>
      <section className="about__faq">
        <div className="container">
          <div className="faq-about">
            <div className="faq-about__body">
              <div className="faq-about__title">{language?.about.faq.title}</div>
              <div className="faq-about__text">{language?.about.faq.text}</div>
            </div>
            <div className="faq-about__table">
              {language?.about.faq.data.map((elem) => (
                <FaqItem {...elem} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
