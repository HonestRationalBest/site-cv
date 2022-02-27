import chevron from "../../icons/chevron_down.svg";

import "./index.scss";

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__body body-contacts">
        <h1 className="body-contacts__title">
          Let's Cooperate! Send Me A Message
        </h1>
        <img src={chevron} alt="chevron" />
        <div className="body-contacts__text">angelinasachivko@gmail.com</div>
        <div className="body-contacts__text">
          <span>Telegram</span>
          @a_sa_ch
        </div>
      </div>
    </div>
  );
};

export default Contacts;
