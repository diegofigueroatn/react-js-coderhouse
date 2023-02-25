import { CartWidget } from "../CartWidget/CartWidget";
import { Logo } from "../Logo/Logo";
import { NavbarList } from "../NavbarList/NavbarList";

export const Navbar = () => {
  return (
    <div className={"flex justify-between items-center max-w-screen-xl w-full h-fit"}>
      <Logo />
      <NavbarList />
      <CartWidget />
    </div>
  );
};
