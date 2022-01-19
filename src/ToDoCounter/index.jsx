import React  from "react";
import "./ToDoCounter.css" ;

function ToDoCounter({ completedToDo , totalToDo }) {
    return(
        <section className="wrapper"
        ><h2 className="h2">Has completado {completedToDo} de {totalToDo}</h2>
        </section>
        
    )
}

export {ToDoCounter};