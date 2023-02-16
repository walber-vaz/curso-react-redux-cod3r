import React, { useState } from 'react';

function Input() {
  const [valor, setValor] = useState('inicial');

  function handleChange(e) {
    setValor(e.target.value);
  }

  return (
    <form>
      <h1>Componente Controlado</h1>
      <h2>{valor}</h2>
      <input
        type="text"
        name="nome"
        id="nome"
        defaultValue={valor}
        onChange={handleChange}
      />
    </form>
  );
}

export default Input;
