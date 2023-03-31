import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

import { CartContext } from "../../context/CartContext";
import { ItemDetail } from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [productSelected, setProductSelected] = useState({});

  console.log(productSelected);
  useEffect(() => {
    const itemCollection = collection(db, "products");
    const ref = doc(itemCollection, id);
    getDoc(ref).then((res) => {
      setProductSelected({
        ...res.data(),
        id: res.id,
      });
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

  if (Object.keys(productSelected).length === 0) {
    return (
      <h1 className="text-4xl font-semibold">Loading product information...</h1>
    );
  }

  return (
    <ItemDetail
      productSelected={productSelected}
      onAdd={onAdd}
      quantity={quantity}
    />
  );
};
