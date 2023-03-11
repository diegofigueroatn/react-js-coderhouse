import { CartWidget } from "../CartWidget/CartWidget";
import { Logo } from "../Logo/Logo";
import { NavbarList } from "../NavbarList/NavbarList";

export const Navbar = () => {
  return (
    <div
      className={
        "flex justify-between items-center max-w-screen-xl w-full h-fit p-0 md:p-4 text-golden-800"
      }
    >
      <Logo />
      <NavbarList />
      <CartWidget />
    </div>
  );
};
