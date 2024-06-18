import ItemList from "./ItemList";
import { products } from "../../products";
import { useEffect, useState } from "react";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [error, setError] = useState({});

  useEffect(() => {
    const getProducts = new Promise((response, reject) => {
      let x = true;
      if (x) {
        response(products);
      } else {
        reject({ message: "error", codigo: "404" });
      }
    });
    //manejar la promesa
    getProducts
      .then((res) => {
        setItems(res);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return <ItemList items={items} />;
};

export default ItemListContainer;
