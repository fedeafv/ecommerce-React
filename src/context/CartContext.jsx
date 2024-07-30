import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (producto) => {
    let existe = cart.some((el) => el.id === producto.id);
    if (existe) {
      let newArray = cart.map((x) => {
        if (x.id === producto.id) {
          return { ...x, quantity: x.quantity };
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

  const getCantidadById = (id) => {
    let productoEncontrado = cart.find((product) => product.id === id);

    return productoEncontrado?.quantity;
  };
  const getTotalPrice = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.price * element.quantity;
    }, 0);
    return total;
  };

  const getTotalItems = () => {
    let total = cart.reduce((acc, element) => {
      return acc + element.quantity;
    }, 0);
    return total;
  };
  let data = {
    cart,
    addToCart,
    clearCart,
    deleteProduct,
    getCantidadById,
    getTotalPrice,
    getTotalItems,
  };

  return <CartContext.Provider value={data}>{children}</CartContext.Provider>;
};

export default CartContextProvider;
