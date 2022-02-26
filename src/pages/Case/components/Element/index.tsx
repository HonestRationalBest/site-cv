
import { NavLink } from "react-router-dom";
import { Node } from "typescript";
import chevron from "../../icons/chevron_down.svg"

import "./index.scss";

interface ElementProps{
    Img: Node;
}

const Element:React.FC<ElementProps> = ({Img}) => {

  const screenWidth = document.documentElement.clientWidth;

  return (
    <div className="cases">
        {/* <Img /> */}
        
    </div>
  );
};

export default Element;
