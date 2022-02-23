import React, { useState } from "react";
import "./FaqItem.scss";
import plus from "../../icons/plus.svg";

export const FaqItem = () => {
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <div className={isActive? "item  _isActive" : "item"}>
      <div className="item__title">
        Do I really need a website design?
        {isActive ? (
          <div className="item__textwrapper">
            <div className="item__text">
              We should think through all the elements that make up the first
              impression of the site so that they support the image you create.
              You will not achieve this effect with the help of templates.
            </div>
            <div className="item__text">
              Your website or social network is your face on the Internet. Let's
              make it professional and trusting.
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
      <div className={isActive? "item__button  _acvtive__button" : "item__button"} onClick={() => setIsActive(!isActive)}>
        <img src={plus} alt="plus" />
      </div>
    </div>
  );
};
