import { Item } from "../Item/Item";

export const ItemList = ({ items }) => {
  return (
    <ul className="grid grid-cols-4 gap-10">
      {items.map((item) => {
        return <Item key={item.id} item={item} />;
      })}
    </ul>
  );
};
