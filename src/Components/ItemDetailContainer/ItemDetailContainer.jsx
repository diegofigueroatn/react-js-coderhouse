import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const [productSelected, setProductSelected] = useState({});
  const { addToCart, getQuantityById } = useContext(CartContext);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setProductSelected(res))
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const onAdd = (cantidad) => {
    let producto = {
      ...productSelected,
      quantity: cantidad,
    };

    addToCart(producto);
  };

  let quantity = getQuantityById(Number(id));

  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      quantity={quantity}
    />
  );
};
