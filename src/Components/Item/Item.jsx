import { Link } from "react-router-dom";

export const Item = ({ item }) => {
  return (
    <li className="grid bg-neutral-800 border border-neutral-800 shadow rounded-sm object-cover">
      <img
        src={item.image}
        className={"rounded-t-sm h-60 w-full"}
        alt="productImage"
      />
      <section className="p-4 grid gap-1 text-center">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-neutral-300">${item.price}</p>
        <Link to={`/itemDetail/${item.id}`}>
          <button className="bg-golden-800 text-neutral-800 px-6 py-2 font-medium rounded-sm mt-3">
            View details
          </button>
        </Link>
      </section>
    </li>
  );
};
