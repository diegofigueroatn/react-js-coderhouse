import { useContext } from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

export const CartWidget = () => {
  const { getTotalQuantity } = useContext(CartContext);

  const total = getTotalQuantity();

  return (
    <Link to="cart">
      <section className="flex relative p-4 text-3xl">
        <MdOutlineShoppingCart />
        <article className="absolute flex items-center justify-center rounded-full top-2 right-2 text-sm bg-golden-800 text-neutral-900 w-5 h-5">
          <span>{total}</span>
        </article>
      </section>
    </Link>
  );
};
