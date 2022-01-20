import {FaBlind} from 'react-icons/fa';
import {FaEyeSlash} from 'react-icons/fa';
import "./Blind.css";

function Blind() {
    return (
        <div className='Blind'>
            <FaBlind size={60}/>
            <p>Crea tu Primer toDo</p>
        </div>
    
        )
};

function NoFound(props) {
    const texto = props.text;
    return(
        <div className='NoFound'>
            <FaEyeSlash size={60}/>
            <p>No hay hay resultados para:{" " + texto}</p>
        </div>
    )
}

export { Blind };
export { NoFound};