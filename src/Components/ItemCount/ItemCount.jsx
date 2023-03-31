import { useState } from "react";

export const ItemCount = ({ stock = 20, initial = 1, onAdd }) => {
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
      <section className="flex justify-between gap-4 items-center">
        <article className="flex justify-between items-center rounded border border-golden-800">
          <button
            className="text-xl bg-transparent hover:bg-golden-800 text-golden-800 font-medium hover:text-neutral-800 rounded w-12 h-12"
            onClick={substract}
          >
            -
          </button>
          <h1 className="w-16 bg-transparent text-neutral-100 font-medium py-2 px-4">
            {counter}
          </h1>
          <button
            className="text-xl bg-transparent hover:bg-golden-800 text-golden-800 font-medium hover:text-neutral-800 rounded w-12 h-12"
            onClick={add}
          >
            +
          </button>
        </article>
        <button
          className="bg-golden-800 text-neutral-800 px-6 py-3 font-medium rounded-sm"
          onClick={() => onAdd(counter)}
        >
          Add to cart
        </button>
      </section>
    </div>
  );
};
