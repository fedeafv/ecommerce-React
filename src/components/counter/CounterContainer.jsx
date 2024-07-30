import { useState } from "react";
import { Counter } from "./Counter";

const CounterContainer = ({ onAdd, stock, i = 1 }) => {
  const [contador, setContador] = useState(i);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    } else {
      alert("stock maximo");
    }
  };

  const restar = () => {
    if (contador > 1) {
      setContador(contador - 1);
    } else {
      alert("Stock minimo");
    }
  };

  return (
    <Counter contador={contador} sumar={sumar} restar={restar} onAdd={onAdd} />
  );
};

export default CounterContainer;
