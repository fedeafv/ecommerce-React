import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <>
        <div className="navbarContainer">
          <Link style={{ color: "beige" }} to="/">
            Shopping Umpire
          </Link>
          <ul className="filtro">
            <Link className="tipo" to="/">
              Todo
            </Link>
            <Link className="tipo" to="/category/accesorios">
              Accesorios
            </Link>
            <Link className="tipo" to="/category/indumentaria">
              Indumentaria
            </Link>
          </ul>
          <CartWidget />
        </div>
      </>
    </div>
  );
};
