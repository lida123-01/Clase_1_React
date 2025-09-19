import { useState, useEffect } from "react";


export default function UseState() {

    const [contador, setContador] = useState(0);
    useEffect(()=>{
        if(contador >0 && contador  % 10 ===0){
            alert ("Has llego a " + contador + "Clics");
        }
    },[contador]);

    return (
        <div>
            <p>Has hecho click {contador} veces</p>
            <button onClick={() => setContador(contador + 1)}>Incrementar</button>
        </div>
    );


}
