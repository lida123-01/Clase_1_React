

import { useState } from 'react';
import { Boton } from './Boton';
import { ListasTareas } from './ListasTareas';
import UseState from './hooks/UseState';
import { FormularioNombre } from './FormularioNombre';
import { Reloj } from './hooks/useEffect';



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
  const eliminarTarea = (indice: number) => {
    setTareas (tareas.filter((_, i) => i !==indice));
    alert("Tarea eliminada correctamente");
  };
  

  return (
    <>
      <div className='container mt-5'>

        <h1>Mi Primera app con React</h1>
        <FormularioNombre />
        {/*Aqui se muestra el formulario de nombre*/}

        <div className='mt-2'>

          <ListasTareas tareas={tareas} onEliminar={eliminarTarea}/> 
        </div>

        <UseState />
        <div className='mt-4'>

          <Boton onAdicionar={adicionarTarea} />
        </div>

        <div className="card mt-3" style={{ width: '18rem' }}>

          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>

        <Reloj/>
      </div>

    </>
  );
}
export default App;

