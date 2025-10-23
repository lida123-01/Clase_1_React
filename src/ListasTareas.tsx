type Props = {
    tareas : string [] // este tipo de corchetes es para hacer arreglos 
    onEliminar?: (indice: number) => void;
};

export function ListasTareas ( {tareas, onEliminar}: Props){

    
    return (
        <>
            <h1>Tareas</h1>
            <ul>
                    {tareas.map((tarea, index) => ( //map: es una funcion que se encarga de permitirno de recorrer arreglos 
                        <li key={index}>
                            {tarea}
                            {onEliminar && (
                                <button onClick={() => onEliminar(index)} style={{marginLeft: '10px'}}> 
                                eliminar
                                </button>
                            )}
                            </li> //li: es lo que va ir la informacion de la lista o lo que en el codigo hace entender que es una lista 
                    ))}
            </ul>
        </>
    );
}
