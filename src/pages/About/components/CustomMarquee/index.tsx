//@ts-ignore
import Marquee from "react-double-marquee";

import "./index.scss";

export const CustomMarquee = () => {
  return (
    <div className="running-string__marquee">
      <Marquee direction="left" speed="0.3">
        While you are in doubt, someone has already taken the first step
      </Marquee>
    </div>
  );
};
