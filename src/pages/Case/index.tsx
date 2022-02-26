import { NavLink, Params, useParams } from "react-router-dom";
import chevron from "../../icons/chevron_down.svg";
import Section from "./components/Section";
import { case01Data } from "./constants";
import * as Scroll from 'react-scroll';

import "./index.scss";

interface CaseProps {}

const Case: React.FC<CaseProps> = () => {
  const screenWidth = document.documentElement.clientWidth;

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

          <div className="case__title">Creatives For Social Networks</div>
          {case01Data.map((section) => (
            <Section {...section} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Case;
