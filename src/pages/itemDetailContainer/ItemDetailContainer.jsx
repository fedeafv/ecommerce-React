import { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { products } from "../../products";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();

  const [item, setItem] = useState({});

  useEffect(() => {
    let product = products.find((product) => product.id === +id);
    if (product) {
      setItem(product);
    }
  }, [id]);

  const onAdd = (quantity) => {
    let prodFinal = { ...item, quantity };
    console.log(prodFinal);
  };
  return <ItemDetail item={item} onAdd={onAdd} />;
};

export default ItemDetailContainer;
