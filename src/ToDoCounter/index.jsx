import React  from "react";
import { ToDoContext } from "../ToDoContext";
import "./ToDoCounter.css" ;

function ToDoCounter() {
const {totalToDo , completedToDo} = React.useContext(ToDoContext);

    return(
        <section className="wrapper"
        ><h2 className="h2">Has completado {completedToDo} de {totalToDo}</h2>
        </section>
        
    )
}

export {ToDoCounter};