import React from "react";
//@ts-ignore
import Marquee from "react-double-marquee";
import { FaqItem } from "../../components/FaqItem/FaqItem";
import hash_code from "../../images/hash_code.png";
import about__img from "../../images/about__img.png";
import "./index.scss";

const About = () => {
  return (
    <main className="about">
      <div className="about__container">
        <section className="about__main main-about">
          <div className="main-about__photo"></div>
          <div className="main-about__content">
            <div className="main-about__title">ABOUT </div>
            <div className="main-about__text">
              I’m a ux/ui designer based in Poland. Core competencies are the
              creation of design for websites and applications.
            </div>
            <div className="main-about__text">
              I have an education in testing, which helps me to understand the
              capabilities of developers when creating a design.
            </div>
            <div className="main-about__text">
              I have experience working in two agencies Alavir and 69pixels,
              which are located in Belarus.
            </div>
          </div>
          <div className="main-about__background"></div>
        </section>
        <section className="about__description description-about">
          <div className="description-about__left">
            <div className="description-about__title">how i’m work?</div>
            <div className="description-about__text">
              Design is a complex work
            </div>
            <div className="description-about__photo"></div>
          </div>
          <div className="description-about__table table-about">
            <div className="table-about__item">
              <div className="table-about__number">01</div>
              <div className="table-about__text">
                BRIEF AND Competitor analysis
              </div>
            </div>
            <div className="table-about__item">
              <div className="table-about__number">01</div>
              <div className="table-about__text">
                BRIEF AND Competitor analysis
              </div>
            </div>
            <div className="table-about__item">
              <div className="table-about__number">01</div>
              <div className="table-about__text">
                BRIEF AND Competitor analysis
              </div>
            </div>
            <div className="table-about__item">
              <div className="table-about__number">01</div>
              <div className="table-about__text">
                BRIEF AND Competitor analysis
              </div>
            </div>
            <div className="table-about__item">
              <div className="table-about__number">01</div>
              <div className="table-about__text">
                BRIEF AND Competitor analysis
              </div>
            </div>
            <div className="table-about__item">
              <div className="table-about__number">01</div>
              <div className="table-about__text">
                BRIEF AND Competitor analysis
              </div>
            </div>
          </div>
        </section>
        <section className="about__ticket ticket-about">
          <div className="ticket-about__main main-ticket">
            <div className="main-ticket__content">
              <div className="main-ticket__title">formula for success</div>
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
                <div className="item-ticket__text">Your efforts afterwards</div>
              </div>
              <div className="main-ticket__item item-ticket">
                <div className="item-ticket__title">110%</div>
                <div className="item-ticket__text">Growing business</div>
              </div>
            </div>
          </div>
          <img className="ticket-about__img" src={hash_code} alt="hash_code" />
        </section>
      </div>

      <section className="about__running-string running-string">
        <div className="running-string__marquee">
          <Marquee direction="left" speed="0.3">
            While you are in doubt, someone has already taken the first step
          </Marquee>
        </div>
      </section>
      <div className="about__container">
        <section className="about__faq faq-about">
          <div className="faq-about__body">
            <div className="faq-about__title">Need to think?</div>
            <div className="faq-about__text">
              Marketing research has proven that our brain quickly and
              unconsciously combines several sources of information into a
              single whole at once, determining whether we like the landing page
              or not.
            </div>
            <img className="faq-about__img" src={about__img} alt="about__img" />
          </div>
          <div className="faq-about__table">
            <FaqItem />
            <FaqItem />
            <FaqItem />
            <FaqItem />
            <FaqItem />
          </div>
        </section>
      </div>
    </main>
  );
};

export default About;
