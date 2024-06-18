import { ProductCard } from "../../components/productCard/productCard";

const ItemList = (items) => {
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      {items.map((elemento) => {
        return (
          <ProductCard
            key={elemento.id}
            title={elemento.title}
            description={elemento.description}
            price={elemento.price}
          />
        );
      })}
    </div>
  );
};

export default ItemList;
