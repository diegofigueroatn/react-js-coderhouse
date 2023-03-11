import { Link } from "react-router-dom";

export const NavbarList = () => {
  const categories = [
    { name: "All", url: "/" },
    { name: "Women", url: "/category/women's clothing" },
    { name: "Men", url: "/category/men's clothing" },
    { name: "Jewelery", url: "/category/jewelery" },
    { name: "Electronics", url: "/category/electronics" },
  ];
  const listCategories = categories.map((category) => (
    <li key={category.name}>
      <Link to={category.url} className="p-4">
        {category.name}
      </Link>
    </li>
  ));

  return <ul className={"flex gap-3 font-medium text-lg"}>{listCategories}</ul>;
};
