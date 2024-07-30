import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
const Cart = () => {
  const { cart, clearCart, deleteProduct } = useContext(CartContext);
  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h2>{elemento.title}</h2>
            <h2>{elemento.quantity}</h2>
            <Button
              variant="contained"
              onClick={() => deleteProduct(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}

      <Button variant="contained" onClick={clearCart}>
        Borrar Carrito
      </Button>
      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>
    </div>
  );
};

export default Cart;