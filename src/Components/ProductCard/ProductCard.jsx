import React from "react";

export const ProductCard = ({ title, description, price }) => {
  return (
    <div>
      <h3>{title}</h3>
      <h3>{description}</h3>
      <h3>{price}</h3>
    </div>
  );
};
