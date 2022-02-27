import { Link } from "react-router-dom";

import { scrollToTop } from "../../../../services";

import link_arrow from "../../../../icons/link-arrow.svg";

import "./index.scss";

interface SectionElemProps {
  img: string;
  alt: string;
  title: string;
  link?: string;
  to?: string;
  isReverse: boolean;
}

export const SectionElem: React.FC<SectionElemProps> = ({
  img,
  alt,
  title,
  link,
  to,
  isReverse,
}) => {
  return (
    <div className={isReverse ? "elem _change-direction" : "elem"}>
      <img src={img} alt={alt} className="elem__img" />
      {link && (
        <a href={link} rel="noreferrer" target="_blank" className="elem__link">
          <div className="elem__title">{title}</div>
          <button className="elem__button">
            <img src={link_arrow} alt="link_arrow" />
          </button>
        </a>
      )}
      {!link && to && (
        <Link to={to} onClick={scrollToTop}>
          <div className="elem__link">
            <div className="elem__title">{title}</div>
            <button className="elem__button">
              <img src={link_arrow} alt="link_arrow" />
            </button>
          </div>
        </Link>
      )}
    </div>
  );
};
