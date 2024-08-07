import { ProductCard } from "../../components/productCard/ProductCard";

const ItemList = ({ items }) => {
  return (
    <div style={{ display: "flex", gap: "20px", margin: "5px" }}>
      {items.map((elemento) => {
        return (
          <ProductCard
            key={elemento.id}
            title={elemento.title}
            description={elemento.description}
            price={elemento.price}
            img={elemento.img}
            id={elemento.id}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
