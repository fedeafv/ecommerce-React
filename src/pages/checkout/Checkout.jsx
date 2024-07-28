import { useState } from "react";

const Checkout = () => {
  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });

  const checkOut = (evento) => {
    evento.preventDefault();
    console.log(user);
  };
  const handleChange = (evento) => {
    let { name, value } = evento.target;
    setUser({ ...user, [name]: value });
  };
  return (
    <div>
      <h1>Aca va el formulario</h1>
      <form onSubmit={checkOut}>
        <input
          type="text"
          placeholder="Ingrese su nombre"
          onChange={handleChange}
          name="nombre"
        />
        <input
          type="text"
          placeholder="Ingrese su email"
          name="email"
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Ingrese su telefono"
          name="telefono"
          onChange={handleChange}
        />
        <button>Enviar</button>
        <button type="button">Cancelar</button>
      </form>
    </div>
  );
};
export default Checkout;
