import { Link } from "react-router-dom";

export const Logo = () => {
  return (
    <Link to="/" className="font-bold text-xl p-4">
      <img
        className="w-16"
        srcSet="https://s3.amazonaws.com/appforest_uf/f1678548750381x814289089444177400/logo.svg"
        alt="Logo"
      />
    </Link>
  );
};
