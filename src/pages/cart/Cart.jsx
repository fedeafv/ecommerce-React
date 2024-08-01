import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";

const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } =
    useContext(CartContext);
  let total = getTotalPrice();

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Seguro que querer borrar?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "Borrar producto",
      denyButtonText: `No borrar`,
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Eliminado", "", "success");
        deleteProduct(id);
      } else if (result.isDenied) {
        Swal.fire("No se ha eliminado", "", "info");
      }
    });
    //deleteProduct(id);
  };
  return (
    <div>
      {cart.map((elemento) => {
        return (
          <div key={elemento.id}>
            <h2>{elemento.title}</h2>
            <h2>{elemento.quantity}</h2>
            <h2>{elemento.price}</h2>
            <Button
              variant="contained"
              onClick={() => handleDelete(elemento.id)}
            >
              Eliminar
            </Button>
          </div>
        );
      })}
      <h2>El total a pagar es ${total}</h2>
      {cart.lenght > 0 && (
        <Button variant="contained" onClick={clearCart}>
          Borrar Carrito
        </Button>
      )}

      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>
    </div>
  );
};

export default Cart;
