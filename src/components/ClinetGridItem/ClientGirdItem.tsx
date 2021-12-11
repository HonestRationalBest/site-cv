import React from "react";
import "./ClientGridItem.scss"

export const ClientGirdItem = ({img}:any) => {
  return <div className="client-grid-item"><img src={img} alt="img"/></div>;
};
