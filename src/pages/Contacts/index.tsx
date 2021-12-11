import React, { ChangeEvent, useState } from "react";
import "./index.scss";

interface FromDataProps {
  name: string;
  email: string;
  projectType: string;
  project: string;
}

type onFormChangeProps = "name" | "email" | "projectType" | "project";

const Contacts = () => {
  const inirtialFormData = {
    name: "",
    email: "",
    projectType: "",
    project: "",
  };
  const [formData, setFormData] = useState<FromDataProps>(inirtialFormData);

  const onFormChange = (e: ChangeEvent, type: onFormChangeProps) => {
    //@ts-ignore
    const value = e.currentTarget.value;
    switch (type) {
      case "name":
        formData.name = value;
        setFormData(formData);
        break;
      case "email":
        formData.email = value;
        setFormData(formData);
        break;
      case "projectType":
        formData.projectType = value;
        setFormData(formData);
        break;
      case "project":
        formData.project = value;
        setFormData(formData);
        break;
    }
  };

  const onSubmitForm = () => {
    alert('Ну здарова, отец!')
  };

  return (
    <div className="contacts">
      <div className="contacts__container">
        <div className="contacts__body body-contacts">
          <div className="body-contacts__offer body-offer">
            <div className="body-offer__pretext">
              Let's cooperate! Send a message.
            </div>
            <div className="body-offer__title">Contact</div>
            <div className="body-offer__content">
              <div className="body-offer__text">E-mail</div>
              <div className="body-offer__pretext">
                angelinasachivko@gmail.com
              </div>
            </div>
          </div>
          <form
            className="body-contacts__form body-form"
            onSubmit={() => onSubmitForm()}
          >
            <input
              type="text"
              placeholder="Name"
              className="body-form__input"
              onChange={(e) => onFormChange(e, "name")}
            />
            <input
              type="email"
              placeholder="E-mail"
              className="body-form__input"
              onChange={(e) => onFormChange(e, "email")}
            />
            <input
              type="text"
              placeholder="Project type"
              className="body-form__input"
              onChange={(e) => onFormChange(e, "projectType")}
            />
            <input
              type="text"
              placeholder="Tell about the project"
              className="body-form__input"
              onChange={(e) => onFormChange(e, "project")}
            />
            <button type="submit" className="body-form__button">
              send message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
