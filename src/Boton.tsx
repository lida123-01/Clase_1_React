//import React from 'react';

export function Boton() {
  const handleClick = () => {
    alert('Hiciste click!');
  };

  return (
    <button onClick={handleClick}>
      Adicionar tarea
    </button>
  );
}
