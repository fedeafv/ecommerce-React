import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbarContainer">
      <h2>Comision 57785</h2>
      <ul style={{ display: "flex", gap: "20px" }}>
        <li style={{ listStyle: "none" }}>Todas</li>
        <li style={{ listStyle: "none" }}>Urbanas</li>
        <li style={{ listStyle: "none" }}>Deportivas</li>
      </ul>
      <h2>Carrito</h2>
    </div>
  );
};
