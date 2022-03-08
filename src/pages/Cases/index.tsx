import { useContext } from "react";

import LanguageContext from "../../context/LanguageContext";
import { SectionElem, SectionElemTablet } from "./components";
import { casesData, casesDataTablet } from "./constants";
import { languages } from "../../context";

import "./index.scss";

const Cases = () => {
  const screenWidth = document.documentElement.clientWidth;
  const language = useContext(LanguageContext);

  const getCurrentLanguage = () => (language === languages.en ? "en" : "ru");

  return (
    <main className={getCurrentLanguage() === "ru" ? "cases ru" : "cases"}>
      <div className="cases__container">
        <div className="cases__body body-cases">
          <div className="body-cases__text text-cases">
            <div className="text-cases__text">{language?.cases.text}</div>
            <div className="text-cases__title">{language?.cases.title}</div>
          </div>
          {screenWidth > 900 && (
            <div className=" body-cases__content cases-content">
              {casesData.map((elem) => (
                <SectionElem {...elem} />
              ))}
            </div>
          )}
          {screenWidth < 900 && (
            <div className="body-cases__tabletcontent tablet-content">
              {casesDataTablet.map((elem) => (
                <SectionElemTablet {...elem} />
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  );
};

export default Cases;
