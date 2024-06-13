import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <h2>Solo Arbitros</h2>
      <ul>
        <li>Inicio</li>
        <li>Indumentaria</li>
        <li>Accesorios</li>
      </ul>
      <CartWidget />
    </div>
  );
};
