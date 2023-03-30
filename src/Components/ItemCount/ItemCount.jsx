import { useState } from "react";

export const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const add = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const substract = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="grid">
      <section className="flex justify-between gap-4">
        <article className="flex">
          <button
            className="bg-transparent hover:bg-golden-800 text-golden-800 font-medium hover:text-neutral-800 py-2 px-4 border border-golden-800 hover:border-transparent rounded"
            onClick={substract}
          >
            -
          </button>
          <h1 className="bg-transparent text-neutral-100 font-medium py-2 px-4">
            {counter}
          </h1>
          <button
            className="bg-transparent hover:bg-golden-800 text-golden-800 font-medium hover:text-neutral-800 py-2 px-4 border border-golden-800 hover:border-transparent rounded"
            onClick={add}
          >
            +
          </button>
        </article>
        <button
          className="bg-transparent hover:bg-golden-800 text-golden-800 font-medium hover:text-neutral-800 py-2 px-4 border border-golden-800 hover:border-transparent rounded"
          onClick={() => onAdd(counter)}
        >
          Add to cart
        </button>
      </section>
      <button className="bg-golden-800 text-neutral-800 px-6 py-2 font-medium rounded-sm">
        Proceed to purchase
      </button>
    </div>
  );
};
