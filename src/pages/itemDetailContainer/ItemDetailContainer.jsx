import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import { db } from "../../firebaseConfig";
import { collection, doc, getDoc } from "firebase/firestore";

const ItemDetailContainer = () => {
  const { addToCart, getCantidadById } = useContext(CartContext);
  const { id } = useParams();

  const [item, setItem] = useState({});
  let i = getCantidadById(+id);
  useEffect(() => {
    let collectionProd = collection(db, "products");
    let refDoc = doc(collectionProd, id);
    let getProd = getDoc(refDoc);
    getProd.then((res) => {
      setItem({ ...res.data(), id: res.id });
    });
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
