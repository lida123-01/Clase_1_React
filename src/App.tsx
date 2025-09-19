
//import { Saludo } from './Saludo'
//import { Usuario } from './Usuario'
import { ListasTareas } from './ListasTareas';
import { Boton } from './Boton';

function App() {
  const tareas = ["Aprender React", "Practicar TypeScript", "Crear mi primera app"];
  return (
    <div>
      <h1>Mi Primera app con React</h1>
      <ListasTareas tareas = {tareas}/> 
        <Boton />
    </div>
  );
}
export default App;
