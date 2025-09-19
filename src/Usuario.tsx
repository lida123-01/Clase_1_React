type Props = {
    nombre  : string; 
    edad : number;
};

export function Usuario ( {nombre, edad}: Props){
    return <h2>
        mi nombre es {nombre}, y mi edad es {edad}, mucho gusto..
    </h2>
}
