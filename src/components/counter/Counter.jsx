import { Button } from "@mui/material";
import "./counter.css";
export const Counter = ({ restar, contador, sumar, onAdd }) => {
  return (
    <div className="container">
      <Button variant="contained" onClick={restar}>
        Restar
      </Button>
      <h2> {contador} </h2>
      <Button variant="contained" onClick={sumar}>
        Sumar
      </Button>
      <Button variant="outlined" onClick={() => onAdd(contador)}>
        Agregar al carrito
      </Button>
    </div>
  );
};
