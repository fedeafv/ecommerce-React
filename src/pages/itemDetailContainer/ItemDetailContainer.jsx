import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../products";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
const ItemDetailContainer = () => {
  const { addToCart, getCantidadById } = useContext(CartContext);
  const { id } = useParams();

  const [item, setItem] = useState({});
  let i = getCantidadById(+id);
  useEffect(() => {
    let product = products.find((product) => product.id === +id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  const onAdd = (quantity) => {
    let prodFinal = { ...item, quantity };
    addToCart(prodFinal);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Producto agregado exitosamente",
      showConfirmButton: false,
      timer: 1000,
    });
  };
  return <ItemDetail item={item} onAdd={onAdd} i={i} />;
};

export default ItemDetailContainer;
