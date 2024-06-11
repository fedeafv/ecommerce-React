export const ProductCard = (props) => {
  const { title, description, price } = props;
  return (
    <div style={{ border: "2px solid steelblue" }}>
      <h2>{title}</h2>
      <h3>{description}</h3>
      <h3>{price}</h3>
    </div>
  );
};
