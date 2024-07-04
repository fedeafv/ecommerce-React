import { Badge } from "@mui/material";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <Link to="/cart">
      <Badge badgeContent={0} color="primary" showZero={true}>
        <FaShoppingCart color="white" size="30px" />
      </Badge>
    </Link>
  );
};

export default CartWidget;
