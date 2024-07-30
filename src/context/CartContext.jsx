import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (producto) => {
    let existe = cart.some((el) => el.id === producto.id);
    if (existe) {
      let newArray = cart.map((x) => {
        if (x.id === producto.id) {
          return { ...x, quantity: producto.quantity + x.quantity };
        } else {
          return x;
        }
      });
      setCart(newArray);
    } else {
      setCart([...cart, producto]);
    }
  };
  const clearCart = () => {
    setCart([]);
  };

  const deleteProduct = (id) => {
    let newArr = cart.filter((element) => element.id !== id);
    setCart(newArr);
  };
  let data = { cart, addToCart, clearCart, deleteProduct };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
