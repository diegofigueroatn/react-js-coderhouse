import { useContext } from "react";
import { MdOutlineCancel, MdOutlineShoppingCart } from "react-icons/md";
import { CartContext } from "../../context/CartContext";

export const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const totalPrice = getTotalPrice();

  if (cart.length === 0) {
    return (
      <div className="grid gap-2 justify-items-center text-neutral-100">
        <MdOutlineShoppingCart className="text-9xl text-center" />
        <h2 className="font-medium text-4xl">Your cart is empty</h2>
        <p className="text-lg text-neutral-400">
          Add something to make me happy
        </p>
      </div>
    );
  }

  return (
    <div className="flex max-w-4xl w-full gap-10 justify-between">
      <section className="rounded-sm">
        <table className="table-auto text-left">
          <thead className="bg-neutral-700">
            <tr>
              <th className="px-6 py-3" scope="col"></th>
              <th className="px-6 py-3" scope="col">
                Name
              </th>
              <th className="px-6 py-3" scope="col">
                Quantity
              </th>
              <th className="px-6 py-3" scope="col">
                Price
              </th>
              <th className="px-6 py-3" scope="col">
                Total
              </th>
              <th className="px-6 py-3" scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => {
              return (
                <tr className="border-b border-b-neutral-700" key={item.id}>
                  <td className="px-6 py-4">
                    <img
                      className="w-16 max-w-max rounded-sm object-cover"
                      src={item.image}
                      alt=""
                    />
                  </td>
                  <td className="px-6 py-4 font-medium">
                    <h2>{item.title}</h2>
                  </td>
                  <td className="px-6 py-4">
                    <h3>{item.quantity}</h3>
                  </td>
                  <td className="px-6 py-4 font-medium">
                    <h3>${item.price}</h3>
                  </td>
                  <td className="px-6 py-4 font-medium">
                    <h3>${Number(item.price * item.quantity)}</h3>
                  </td>
                  <td className="px-6 py-4 font-medium">
                    <MdOutlineCancel
                      className="text-3xl cursor-pointer fill-red-500"
                      onClick={() => deleteProductById(item.id)}
                    />
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </section>
      <section className="w-px bg-neutral-700"></section>
      <section className="grid gap-4 auto-rows-min">
        <h1 className="text-3xl font-semibold">
          Total price ${Number(totalPrice.toFixed(2))}
        </h1>
        <button className="bg-golden-800 text-neutral-800 px-6 py-3 font-medium rounded-sm">
          Proceed to checkout
        </button>
        <button
          className="bg-transparent hover:bg-golden-800 text-golden-800 font-medium hover:text-neutral-800 py-3 px-4 border border-golden-800 hover:border-transparent rounded"
          onClick={clearCart}
        >
          Clear cart
        </button>
      </section>
    </div>
  );
};
