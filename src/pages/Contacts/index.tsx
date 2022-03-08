import { useContext } from "react";

import LanguageContext from "../../context/LanguageContext";
import { languages } from "../../context";

import chevron from "../../icons/chevron_down.svg";

import "./index.scss";

const Contacts = () => {
  const language = useContext(LanguageContext);

  const getCurrentLanguage = () => (language === languages.en ? "en" : "ru");

  return (
    <div className={getCurrentLanguage() === "ru" ? "contacts ru" : "contacts"}>
      <div className="contacts__container">
        <div className="contacts__body body-contacts">
          <h1 className="body-contacts__title">{language?.contacts.title}</h1>
          <img src={chevron} alt="chevron" />
          <div className="body-contacts__text">angelinasachivko@gmail.com</div>
          <div className="body-contacts__text">
            <span>Telegram</span>
            @a_sa_ch
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
