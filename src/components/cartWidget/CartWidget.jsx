import { Badge } from "@mui/material";
import { useContext } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {
  const { getTotalItems } = useContext(CartContext);
  let total = getTotalItems();
  return (
    <Link to="/cart">
      <Badge badgeContent={total} color="primary" showZero={true}>
        <FaShoppingCart color="white" size="30px" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
