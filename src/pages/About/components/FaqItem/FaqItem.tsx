import React, { useState } from "react";
import "./FaqItem.scss";
import plus from "../../../../icons/plus.svg";

interface FaqItemProps {
  title: string;
  text: string;
}

export const FaqItem: React.FC<FaqItemProps> = ({ text, title }) => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className={isActive ? "item  _isActive" : "item"}>
      <div className="item__title">
        {title}
        {isActive ? (
          <div className="item__textwrapper">
            <div className="item__text">{text}</div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div
        className={isActive ? "item__button  _acvtive__button" : "item__button"}
        onClick={() => setIsActive(!isActive)}
      >
        <img src={plus} alt="plus" />
      </div>
    </div>
  );
};
