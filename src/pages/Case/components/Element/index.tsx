
import { NavLink } from "react-router-dom";
import { Node } from "typescript";
import chevron from "../../icons/chevron_down.svg"

import "./index.scss";

export interface ElementProps{
    src: string;
    alt: string;
}

const Element:React.FC<ElementProps> = ({src, alt}) => {

  const screenWidth = document.documentElement.clientWidth;

  return (
    <div className="creative">
        <img src={src} alt={alt} />
    </div>
  );
};

export default Element;
