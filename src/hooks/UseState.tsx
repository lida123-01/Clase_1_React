import { useState, useEffect } from "react";

//componente funcional que muestra un contador y un boton para incrementarlo 
export default function UseState() {

    //hook useState para crear una variable de estado llamada 'contador' y su funcion para actualizar 
   //inicializa el contador en 0
    const [contador, setContador] = useState(0);

    //hook Effect para ejecutar codigo cada vez que el valor de 'contador' cambie
    //si el contador es mayor a 0 y es multiplo de 10, muestra una alerta 
    useEffect(()=>{
        if(contador > 0 && contador  % 10 ===0){
            alert ("Has llego a " + contador + "Clics");
        }


    },[contador]);//el efecto depende de 'contador'

    //renderiza el contador y el boton 
    return (
        <div>
            {/*muestra el numero de clics realizados */ }
            <p>Has hecho click {contador} veces</p>
            {/* boton que incrementa el contador el contador en 1 cada vez que se presiona */}
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
            {/* boton que incrementa el contador el contador en 1 cada vez que se presiona */}
            <button onClick={() => setContador(contador - 1)}>Decrementar</button>
        </div>
    );


}
