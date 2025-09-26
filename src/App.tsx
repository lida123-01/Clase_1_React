
//import { Saludo } from './Saludo'
//import { Usuario } from './Usuario'
//import { Boton } from './Boton';
import { ListasTareas } from './ListasTareas';
import UseState from './hooks/UseState';

function App() {
  const tareas = ["Aprender React", "Practicar TypeScript", "Crear mi primera app"];
  return (
    <div>
      <h1>Mi Primera app con React</h1>
      <ListasTareas tareas = {tareas}/> 
      <UseState/>
    </div>
  );
}
export default App;