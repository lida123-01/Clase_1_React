type Props = {
    nombre  : string; 
};

export function Saludo ( {nombre}: Props){
    return <h2>
        Hola {nombre}, bienvenido al mundo pequeña cosita fea jsijsij
    </h2>
}
