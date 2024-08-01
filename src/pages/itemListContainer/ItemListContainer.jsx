import ItemList from "./ItemList";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    let collectionProd = collection(db, "products");
    let filtro = collectionProd;

    if (name) {
      filtro = query(collectionProd, where("category", "==", name));
    }

    let getProducts = getDocs(filtro);

    getProducts.then((res) => {
      let arraySalvado = res.docs.map((prod) => {
        return { ...prod.data(), id: prod.id };
      });
      setItems(arraySalvado);
    });
  }, [name]);

  return <ItemList items={items} />;
};

export default ItemListContainer;
