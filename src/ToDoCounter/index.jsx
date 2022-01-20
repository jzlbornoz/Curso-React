import React  from "react";
import "./ToDoCounter.css" ;

function ToDoCounter({ completedToDo , totalToDo, loading }) {
    return(
        <section className={`wrapper ${!!loading && 'ModeDisable'}`}
        ><h2 className="h2">Has completado {completedToDo} de {totalToDo}</h2>
        </section>
        
    )
}

export {ToDoCounter};