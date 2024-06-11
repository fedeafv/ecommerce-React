import { useState } from "react";

export const Counter = () => {
  const [contador, setContador] = useState(0); //[undefined, function ]
  console.log(contador);
  //let contador = 0;
  const restar = () => {
    setContador(contador - 1);
  };
  const sumar = () => {
    setContador(contador + 1);
  };
  return (
    <div>
      <button onClick={restar}>Restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};
