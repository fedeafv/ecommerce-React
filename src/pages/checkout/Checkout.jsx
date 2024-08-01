import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Checkout = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  const [idOrden, setIdOrden] = useState("");
  let total = getTotalPrice();

  const checkOut = (evento) => {
    evento.preventDefault();
    let orden = {
      comprador: user,
      items: cart,
      total: total,
    };
    let ordenCollection = collection(db, "ordenes");
    let prodCollection = collection(db, "products");
    cart.forEach((element) => {
      let refDoc = doc(prodCollection, element.id);
      updateDoc(refDoc, { stock: element.stock - element.quantity });
    });
    addDoc(ordenCollection, orden)
      .then((res) => {
        setIdOrden(res.id);
        toast.success(`Gracias por tu compra, tu ticket es ${idOrden}`);
      })
      .catch()
      .finally(() => {
        clearCart();
        navigate("/");
      });
  };
  const handleChange = (evento) => {
    let { name, value } = evento.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      {idOrden ? (
        <h2>Gracias por su compra. Ticket: {idOrden}</h2>
      ) : (
        <form onSubmit={checkOut}>
          <input
            type="text"
            placeholder="Ingrese su nombre"
            onChange={handleChange}
            name="nombre"
          />
          <input
            type="text"
            placeholder="Ingrese su email"
            name="email"
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Ingrese su telefono"
            name="telefono"
            onChange={handleChange}
          />
          <button>Enviar</button>
          <button type="button">Cancelar</button>
        </form>
      )}
    </div>
  );
};
export default Checkout;
