import React, { useState } from "react";

export const Form = () => {
  const [userData, setUserData] = useState({ name: "", phone: "", email: "" });
  const [errors, setErrors] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (userData.name.length > 40) {
      setErrors({
        ...errors,
        name: "Name is too long (maximum is 40 characters)",
      });
    }
  };

  return (
    <div>
      <form className="grid gap-6 w-80" onSubmit={handleSubmit}>
        <section className="grid gap-2">
          <label className="font-medium" htmlFor="name">
            Full name
          </label>
          <input
            name="name"
            className="bg-neutral-800 h-11 px-3 rounded-sm"
            type="text"
            placeholder="Enter your full name"
            onChange={handleChange}
          />
          <span className="text-red-500">{errors.name}</span>
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
            onChange={handleChange}
          />
        </section>
        <button
          type="submit"
          className="bg-golden-800 text-neutral-800 px-6 py-2 font-semibold rounded-sm mt-3 h-11"
        >
          Proceed to payment
        </button>
      </form>
    </div>
  );
};
