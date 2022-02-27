import { NavLink } from "react-router-dom";

import { scrollToTop } from "../../../../services";

import "./index.scss";

interface ClientGirdItemProps {
  img?: string;
  alt?: string;
  text?: string;
  isEmpty: boolean;
}

export const ClientGirdItem: React.FC<ClientGirdItemProps> = ({
  img,
  alt,
  text,
  isEmpty,
}) => {
  return (
    <>
      {isEmpty ? (
        <NavLink to="/contacts" onClick={scrollToTop}>
          <div className="clients-grid__item _empty-clients-grid-item">
            {text}
          </div>
        </NavLink>
      ) : (
        <div className="client-grid-item">
          <img src={img} alt={alt} />
        </div>
      )}
    </>
  );
};
