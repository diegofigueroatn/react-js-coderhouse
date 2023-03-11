export const NavbarList = () => {
  const categories = [
    { name: "Women", url: "/category/women" },
    { name: "Men", url: "/category/men" },
    { name: "Jewelery", url: "/category/jewelery" },
    { name: "Electronics", url: "/category/women" },
  ];
  const listCategories = categories.map((category) => (
    <li key={category.name}>
      <a href={category.url} className="p-4">
        {category.name}
      </a>
    </li>
  ));

  return <ul className={"flex gap-3 font-medium text-lg"}>{listCategories}</ul>;
};
