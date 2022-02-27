import { NavLink, useParams } from "react-router-dom";

import { scrollToTop } from "../../services";
import { case01Data, case02Data } from "./constants";
import Section from "./components/Section";

import { ReactComponent as Arrow } from "../../icons/white_arrow.svg";
import chevron from "../../icons/chevron_down.svg";

import "./index.scss";

interface CaseProps {}

const Case: React.FC<CaseProps> = () => {
  const params = useParams();

  return (
    <main className="case">
      <div className="case__container">
        <div className="case__content">
          <div className="case__return return">
            <NavLink to="/cases" className="return-link">
              <img src={chevron} alt="" />
              <div>Back to the cases</div>
            </NavLink>
          </div>
          <div className="case__title">
            {params.case === "networks_01" && "Creatives For Social Networks"}
            {params.case === "networks_02" && "Social Media For EdMe"}
          </div>
          {params.case === "networks_01" &&
            case01Data.map((section) => <Section {...section} />)}
          {params.case === "networks_02" &&
            case02Data.map((section) => <Section {...section} />)}
          <div className="case__contacts contacts-case">
            <div className="contacts-case__text">
              If you want to improve the quality of your social networks,
              contact me
            </div>
            <NavLink to="/contacts" onClick={scrollToTop}>
              <button className="contacts-case__button">
                View contacts <Arrow stroke="#000" />
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Case;
