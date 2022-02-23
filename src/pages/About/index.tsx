import React from "react";
//@ts-ignore
import Marquee from "react-double-marquee";
import { FaqItem } from "../../components/FaqItem/FaqItem";
import hash_code from "../../images/hash_code.png";
import about__img from "../../images/about__img.png";
import main__about_img from "../../images/main_about_img.png";
import main_about_picture from "../../images/main__about_picture.png";
import about_main from "../../images/about_main.png";
import eye from "../../images/eye_img.png";
import loop_img from "../../images/loop_img.png";
import "./index.scss";

const About = () => {
  const screenWidth = document.documentElement.clientWidth;

  const questionsData = [
    {
      text: `We should think through all the elements that make up the first impression of the site so that they support the image you create. You will not achieve this effect with the help of templates.
      Your website or social network is your face on the Internet. 
      Let's make it professional and trusting.`,
      title: "Do I really need a website design?",
    },
    {
      text: `In fact, it will be great, wonderful and amazing. Check it.`,
      title: "Why should I choose you?",
    },
    {
      text: `If at the moment you do not have funds for development, but the product requires the intervention of a designer, we can always discuss a solution that suits you.`,
      title: "Startups, let's do it.",
    },
    {
      text: `Noting i'm really bad designer and i forgot to paste the text there:(`,
      title: "When do I need to provide materials for the site?",
    },
  ];

  return (
    <main className="about">
      <section className="about__main main-about">
        <div className="container">
          <div className="main-about__content">
            <div className="main-about__title">About Me</div>
            <div className="main-about__text">
              I’m a ux/ui designer based in Poland. Core competencies are the
              creation of design for websites and applications.
              <br />
              <br /> I have an education in testing, which helps me to
              understand the capabilities of developers when creating a design.
              <br />
              <br /> I have experience working in two agencies Alavir and
              69pixels, which are located in Belarus. Now I work as a
              freelancer.
            </div>
          </div>
          <div className="main-about__images">
            <div className="main-about__photo">
              <img src={main__about_img} alt="main__about_img" />
            </div>
            {screenWidth > 600 && (
              <div className="main-about__picture">
                <img src={main_about_picture} alt="main_about_picture" />
              </div>
            )}
          </div>
        </div>
      </section>
      <section className="about__description">
        <div className="container">
          <div className="description-about">
            <div className="description-about__left">
              <div className="description-about__title">How I’m Work?</div>
              <div className="description-about__text">
                Design is a complex work
              </div>
            </div>
            <div className="description-about__table table-about">
              <div className="table-about__item">
                <div className="table-about__number">01</div>
                <div className="table-about__text">
                  Brief and Competitor analysis
                </div>
              </div>
              <div className="table-about__item">
                <div className="table-about__number">02</div>
                <div className="table-about__text">
                  Research&Collecting references
                </div>
              </div>
              <div className="table-about__item">
                <div className="table-about__number">03</div>
                <div className="table-about__text">Prototyping</div>
              </div>
              <div className="table-about__item">
                <div className="table-about__number">04</div>
                <div className="table-about__text">Visual Design</div>
              </div>
              <div className="table-about__item">
                <div className="table-about__number">05</div>
                <div className="table-about__text">Responsive Versions</div>
              </div>
              <div className="table-about__item">
                <div className="table-about__number">06</div>
                <div className="table-about__text">Design review</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="about__ticket ticket-about">
        <div className="container">
          <div className="ticket-about__content">
            <div className="ticket-about__main main-ticket">
              <div className="main-ticket__content">
                <div className="main-ticket__title">Formula For Success</div>
                <div className="main-ticket__text">
                  A designer is also a marketer and a psychologist who, based on
                  the predicted behavior of users, is able to select effective
                  elements to achieve the company's goals.
                </div>
              </div>
              <div className="main-ticket__grid">
                <div className="main-ticket__item item-ticket">
                  <div className="item-ticket__title">01</div>
                  <div className="item-ticket__text">My design and support</div>
                </div>
                <div className="main-ticket__item item-ticket">
                  <div className="item-ticket__title">02</div>
                  <div className="item-ticket__text">
                    Your efforts afterwards
                  </div>
                </div>
                <div className="main-ticket__item item-ticket">
                  <div className="item-ticket__title">110%</div>
                  <div className="item-ticket__text">Growing business</div>
                </div>
              </div>
            </div>
            {screenWidth > 900 && (
              <img
                className="ticket-about__img"
                src={hash_code}
                alt="hash_code"
              />
            )}
          </div>
        </div>
      </section>
      <section className="about__running-string running-string">
        <div className="running-string__marquee">
          <Marquee direction="left" speed="0.3">
            While you are in doubt, someone has already taken the first step
          </Marquee>
        </div>
      </section>
      <section className="about__faq">
        <div className="container">
          <div className="faq-about">
            <div className="faq-about__body">
              <div className="faq-about__title">Need To Think?</div>
              <div className="faq-about__text">
                Marketing research has proven that our brain quickly and
                unconsciously combines several sources of information into a
                single whole at once, determining whether we like the landing
                page or not.
              </div>
            </div>
            <div className="faq-about__table">
              {questionsData.map((elem) => (
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
