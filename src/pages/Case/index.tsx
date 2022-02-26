
import { NavLink } from "react-router-dom";
import chevron from "../../icons/chevron_down.svg"

import "./index.scss";

interface CaseProps{

}

const Case:React.FC<CaseProps> = () => {

  const screenWidth = document.documentElement.clientWidth;

  return (
    <main className="cases">
        <NavLink to="/cases"><img src={chevron} alt=""/>Back to the cases</NavLink>
    </main>
  );
};

export default Case;
