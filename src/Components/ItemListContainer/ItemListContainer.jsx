import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { ItemList } from "../ItemList/ItemList";

import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const itemsCollection = collection(db, "products");

    let customQuery = undefined;

    if (categoryName) {
      const auxQuery = query(
        itemsCollection,
        where("category", "==", categoryName)
      );
      customQuery = getDocs(auxQuery);
    } else {
      customQuery = getDocs(itemsCollection);
    }

    customQuery.then((res) => {
      let products = res.docs.map((product) => {
        return {
          ...product.data(),
          id: product.id,
        };
      });

      setItems(products);
    });
  }, [categoryName]);

  if (items.length === 0) {
    return <h1 className="text-4xl font-semibold">Loading products...</h1>;
  }

  return (
    <div className="max-w-screen-lg">
      <ItemList items={items} />
    </div>
  );
};
