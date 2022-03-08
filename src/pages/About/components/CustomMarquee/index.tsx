//@ts-ignore
import Marquee from "react-double-marquee";

import "./index.scss";

interface CustomMarqueeProps{
  text: string;
}

export const CustomMarquee:React.FC<CustomMarqueeProps> = ({text}) => {
  return (
    <div className="running-string__marquee">
      <Marquee direction="left" speed="0.3">
        {text}
      </Marquee>
    </div>
  );
};
