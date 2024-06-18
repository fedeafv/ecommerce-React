export const ProductCard = (title, description, price) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p>{price}</p>
    </div>
  );
};

export default ProductCard;
