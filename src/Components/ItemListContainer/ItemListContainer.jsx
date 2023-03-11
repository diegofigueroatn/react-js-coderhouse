import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ItemList } from "../ItemList/ItemList";

export const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    let fetchUrl = "https://fakestoreapi.com/products";
    fetch(categoryName ? `${fetchUrl}/category/${categoryName}` : fetchUrl)
      .then((res) => res.json())
      .then((res) => setItems(res))
      .catch((error) => {
        console.log(error);
      });
  }, [categoryName]);

  return (
    <div className="max-w-screen-lg">
      <ItemList items={items} />
    </div>
  );
};
