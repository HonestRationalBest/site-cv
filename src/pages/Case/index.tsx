import { useContext } from "react";
import { NavLink, useParams } from "react-router-dom";

import { scrollToTop } from "../../services";
import Section from "./components/Section";
import { languages } from "../../context";
import LanguageContext from "../../context/LanguageContext";

import { ReactComponent as Arrow } from "../../icons/white_arrow.svg";
import chevron from "../../icons/chevron_down.svg";

import "./index.scss";

interface CaseProps {}

const Case: React.FC<CaseProps> = () => {
  const params = useParams();
  const language = useContext(LanguageContext);

  const getCurrentLanguage = () => (language === languages.en ? "en" : "ru");

  return (
    <main className={getCurrentLanguage() === "ru" ? "case ru" : "case"}>
      <div className="case__container">
        <div className="case__content">
          <div className="case__return return">
            <NavLink to="/cases" className="return-link">
              <img src={chevron} alt="" />
              <div>{language?.case.back}</div>
            </NavLink>
          </div>
          <div className="case__title">
            {language?.case.data.case01Data.title}
          </div>
          {params.case === "networks_01" &&
            language?.case.data.case01Data.data.map((section, i) => (
              <Section {...section} isFirst={i === 0} />
            ))}
          {params.case === "networks_02" &&
            language?.case.data.case02Data.data.map((section, i) => (
              <Section {...section} isFirst={i === 0} />
            ))}
          <div className="case__contacts contacts-case">
            <div className="contacts-case__text">{language?.case.footer}</div>
            <NavLink to="/contacts" onClick={scrollToTop}>
              <button className="contacts-case__button">
                {language?.case.button} <Arrow stroke="#000" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Case;
