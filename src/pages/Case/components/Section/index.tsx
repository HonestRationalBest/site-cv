
import { NavLink } from "react-router-dom";
import chevron from "../../icons/chevron_down.svg"

import "./index.scss";

interface SectionProps{
    title: string;
    data: Array<Object>
}

const Section:React.FC<SectionProps> = ({title}) => {

  const screenWidth = document.documentElement.clientWidth;

  return (
    <div className="cases">
        <div>{title}</div>
        
    </div>
  );
};

export default Section;
