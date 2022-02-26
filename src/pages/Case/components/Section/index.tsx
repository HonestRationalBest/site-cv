import { NavLink } from "react-router-dom";
import chevron from "../../icons/chevron_down.svg";
import Element, { ElementProps } from "../Element";

import "./index.scss";

interface SectionProps {
  title: string;
  data: Array<ElementProps>;
  isFirst?: boolean;
}

const Section: React.FC<SectionProps> = ({ title, data, isFirst }) => {
  const screenWidth = document.documentElement.clientWidth;

  return (
    <div className={isFirst? "section__first" : "section"}>
      <div className="section__title">{title}</div>
      <div className="section__grid">
        {data.map((elem) => (
          <Element {...elem} />
        ))}
      </div>
    </div>
  );
};

export default Section;
