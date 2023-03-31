import React, { useState } from "react";

import { addDoc, collection, updateDoc, doc } from "firebase/firestore";
import { db } from "../../firebaseConfig";

const FormCheckout = ({ cart, getTotalPrice, setOrderId, clearCart }) => {
  const [userData, setUserData] = useState({
    name: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    let total = getTotalPrice();
    let order = {
      buyer: userData,
      items: cart,
      total,
    };
    let orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        clearCart();
      })
      .catch((err) => console.log(err));

    cart.map((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
      return product;
    });
  };

  return (
    <div className="grid gap-6 justify-items-center text-neutral-100">
      <h2 className="font-medium text-3xl">Complete your purchase</h2>
      <form className="grid gap-6 w-80" onSubmit={handleSubmit}>
        <section className="grid gap-2">
          <label className="font-medium" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            className="bg-neutral-800 h-11 px-3 rounded-sm"
            type="text"
            placeholder="Enter your name"
            required
            onChange={(e) => setUserData({ ...userData, name: e.target.value })}
          />
        </section>
        <section className="grid gap-2">
          <label className="font-medium" htmlFor="lastName">
            Last name
          </label>
          <input
            name="lastName"
            className="bg-neutral-800 h-11 px-3 rounded-sm"
            type="text"
            placeholder="Enter your last name"
            required
            onChange={(e) =>
              setUserData({ ...userData, lastName: e.target.value })
            }
          />
        </section>
        <section className="grid gap-2">
          <label className="font-medium" htmlFor="phone">
            Phone
          </label>
          <input
            name="phone"
            className="bg-neutral-800 h-11 px-3 rounded-sm"
            type="text"
            placeholder="Enter your phone"
            required
            onChange={(e) =>
              setUserData({ ...userData, phone: e.target.value })
            }
          />
        </section>
        <section className="grid gap-2">
          <label className="font-medium" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            className="bg-neutral-800 h-11 px-3 rounded-sm"
            type="text"
            placeholder="Enter your email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onChange={(e) =>
              setUserData({ ...userData, email: e.target.value })
            }
          />
        </section>
        <section className="grid gap-2">
          <label className="font-medium" htmlFor="repeatEmail">
            Repeat email
          </label>
          <input
            name="repeatEmail"
            className="bg-neutral-800 h-11 px-3 rounded-sm"
            type="text"
            placeholder="Repeat your email"
            required
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onChange={(e) =>
              setUserData({ ...userData, repeatEmail: e.target.value })
            }
          />
        </section>
        <button
          type="submit"
          className="bg-golden-800 text-neutral-800 px-6 h-14 font-semibold rounded-sm mt-3 h-11"
        >
          Proceed to payment
        </button>
      </form>
    </div>
  );
};

export default FormCheckout;
