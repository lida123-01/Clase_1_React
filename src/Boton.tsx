import { useState } from "react";

type Props = {
  onAdicionar: (texto: string) => void // void significa que no retorna nada 
};

export function Boton({onAdicionar}: Props){
  const [texto, setTexto] = useState('');

  const handleClick = () => {
    if (texto.trim() !== '') {
      onAdicionar(texto);
      setTexto('');
    } else {
      alert('Por favor ingresa una tarea');
    }
  };

  return (
    <div> 
      <input
      type= "text"
      value={texto}
      onChange={e => setTexto(e.target.value)}
      placeholder="Escribe una tarea nueva"
      />
      <button onClick={handleClick}>
        Adicionar tarea 
      </button>
    </div>
  );
}
