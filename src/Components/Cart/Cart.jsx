import { useContext, useState } from "react";
import {
  MdOutlineCancel,
  MdOutlineShoppingBag,
  MdOutlineShoppingCart,
} from "react-icons/md";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import FormCheckout from "../FormCheckout/FormCheckout";

export const Cart = () => {
  const { cart, clearCart, getTotalPrice, deleteProductById } =
    useContext(CartContext);

  const [showForm, setShowForm] = useState(false);
  const [orderId, setOrderId] = useState(null);

  const totalPrice = getTotalPrice();

  if (cart.length === 0 && !orderId) {
    return (
      <div className="grid gap-2 justify-items-center text-neutral-100">
        <MdOutlineShoppingCart className="text-9xl text-center text-golden-800" />
        <h2 className="font-medium text-4xl">Your cart is empty</h2>
        <p className="text-lg text-neutral-400">
          Add something to make me happy
        </p>
      </div>
    );
  }

  if (orderId) {
    return (
      <div className="grid gap-3 justify-items-center text-neutral-100">
        <MdOutlineShoppingBag className="text-9xl text-center text-golden-800" />
        <h2 className="font-medium text-4xl">Thank you for your purchase</h2>
        <p className="text-lg text-neutral-400">
          Your purchase order is: {orderId}
        </p>
        <Link to="/">
          <button className="mt-3 bg-transparent hover:bg-golden-800 text-golden-800 font-medium hover:text-neutral-800 py-3 px-4 border border-golden-800 hover:border-transparent rounded">
            Continue shopping
          </button>
        </Link>
      </div>
    );
  }

  return (
    <>
      {!showForm ? (
        <div className="grid gap-12">
          <h1 className="text-center font-medium text-4xl">
            Your shopping cart
          </h1>
          <div className="flex max-w-5xl w-full gap-10 justify-between">
            <section className="rounded-sm w-2/3">
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
                      <tr
                        className="border-b border-b-neutral-700"
                        key={item.id}
                      >
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
              <h1 className="text-2xl font-semibold">
                Total price ${Number(totalPrice.toFixed(2))}
              </h1>
              <button
                className="bg-golden-800 text-neutral-800 px-6 py-3 font-medium rounded-sm"
                onClick={() => setShowForm(true)}
              >
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
        </div>
      ) : (
        <FormCheckout
          cart={cart}
          getTotalPrice={getTotalPrice}
          setOrderId={setOrderId}
          clearCart={clearCart}
        />
      )}
    </>
  );
};
