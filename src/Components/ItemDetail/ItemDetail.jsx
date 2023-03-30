import React from "react";
import { ItemCount } from "../ItemCount/ItemCount";

export const ItemDetail = ({ productSelected, onAdd, quantity }) => {
  return (
    <div className="grid justify-items-center gap-6 max-w-2xl text-center">
      <img
        src={productSelected.image}
        className={"rounded-t-sm max-h-80 w-80 object-contain"}
        alt="productImage"
      />
      <h3 className="text-neutral-300 font-semibold text-2xl">
        {productSelected.title}
      </h3>
      <p className="text-neutral-400">{productSelected.description}</p>
      <article className="flex gap-4 align-middle mt-2">
        <p className="font-semibold text-3xl mr-4">${productSelected.price}</p>
        <ItemCount
          onAdd={onAdd}
          stock={productSelected.stock}
          initial={quantity}
        />
      </article>
    </div>
  );
};
