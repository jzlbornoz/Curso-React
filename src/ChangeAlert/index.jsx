import React from "react";
import { withStorageListener } from "./withStorageListener";
import { FaCogs } from 'react-icons/fa';
import "./ChangeAlert.css";

function ChangeAlert({show , toggleShow}) {
    if (show) {
        return (
        <div className="AllScreen">
        <div className="ChangeAlertWraper">
            <FaCogs size={60} className="iconoChange"/>
            <p>Se localizaron cambios en otra pagina.</p>
            <button
            onClick={() => toggleShow(false)} //GUIA DE ESTO EN EL C-Patrones de render y composicion. (14-15). "Sincronze" 

            >Obtener Cambios</button>
        </div>
        </div>
        )
    }else{
        return null
    }
}
        //Esto quiere decir With HOC
const ChangeAlertwithStorageListener = withStorageListener(ChangeAlert); //Al pasarle el ChangeAlert Como Props se convierte en el wrapped component del HOC

export { ChangeAlertwithStorageListener };