

import { useState } from 'react';
import { Boton } from './Boton';
import { ListasTareas } from './ListasTareas';
import UseState from './hooks/UseState';

function App() {
  const [tareas, setTareas] = useState([
    "Aprender React",
    "Practicar TypeScript",
    "Crear mi primera app"

  ]);

  // Función para adicionar una tarea
  const adicionarTarea = (texto: string) => {
    setTareas([...tareas, texto]);
    alert("Tarea adicionada de forma correcta");
  };

  return (
    <div>
      <h1>Mi Primera app con React</h1>
      <ListasTareas tareas = {tareas}/> 
      <UseState/>
      <Boton onAdicionar={adicionarTarea}/>
    </div>
  );
}
export default App;

