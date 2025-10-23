import { useState } from "react";

export function FormularioNombre (){ //estad para guardar el nombre que sera ingresado 
    const [nombre, setNombre] = useState(''); //estado para mostrar el nombre que es enviado 
    //const [nombreEnviado, setNombreEnviado] = useState ('');
    

    //funcion que se ejecuta al enviar el formulario
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();//esto evita que la paguina se recargue
        if (nombre.trim() !== ''){
           alert(`El nombre ingresado es: ${nombre}`); //Muestra el alert con el nombre 
            setNombre(''); //Limpia el input 
        } else {
            alert('por favor ingresa un nombre');
        }
    };
    //renderiza el formulario 
    return (
        <form onSubmit={handleSubmit}>
            {/*Input controlado para escribir el nombre*/}
            <input
            type= "text"
            value={nombre}
            onChange={e => setNombre(e.target.value)}
            placeholder="Escribe tu nombre"
            />
            {/*Boton para que sirve para enviar el formulario*/ }
            <button type="submit">Enviar</button>
        </form>
    )
        
}