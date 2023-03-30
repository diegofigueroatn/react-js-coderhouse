import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

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
        <button className="bg-transparent hover:bg-golden-800 text-golden-800 font-medium hover:text-neutral-800 py-2 px-4 border border-golden-800 hover:border-transparent rounded">
          Add to cart
        </button>
        <button className="bg-golden-800 text-neutral-800 px-6 py-2 font-medium rounded-sm">
          Proceed to purchase
        </button>
      </article>
    </div>
  );
};
