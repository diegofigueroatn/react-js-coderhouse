export const Item = ({ item }) => {
  return (
    <li className="bg-neutral-800 border border-neutral-800 shadow rounded-lg object-cover">
      <img
        src={item.image}
        className={"rounded-t-lg h-60 w-full"}
        alt="productImage"
      />
      <section className="p-4 grid gap-1 text-center">
        <h3 className="font-semibold text-lg">{item.title}</h3>
        <p className="text-neutral-300">${item.price}</p>
      </section>
    </li>
  );
};
