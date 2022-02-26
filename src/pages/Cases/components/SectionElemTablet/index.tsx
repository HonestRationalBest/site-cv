import { Link } from "react-router-dom";

import "./index.scss";

interface SectionElemTabletProps {
  img: string;
  alt: string;
  title: string;
  to?: string;
  link?: string;
}

export const SectionElemTablet: React.FC<SectionElemTabletProps> = ({
  img,
  alt,
  title,
  to,
  link,
}) => {
  return (
    <>
      {link && (
        <a href={link} className="elem-tablet">
          <div >
            <img src={img} alt={alt} />
            <h3>{title}</h3>
          </div>
        </a>
      )}
      {to && (
        <Link to={to} className="elem-tablet">
          <div>
            <img src={img} alt={alt} />
            <h3>{title}</h3>
          </div>
        </Link>
      )}
    </>
  );
};
