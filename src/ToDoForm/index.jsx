import React from "react";
import {ToDoContext} from "../ToDoContext";
import "./ToDoForm.css";

 function ToDoForm() {

    const [newValue , setNewValue] = React.useState("");
    const {addToDo , setOpenModal} = React.useContext(ToDoContext);

    const onChange = (event) =>{
        setNewValue(event.target.value);
    };

    const onCancel = () =>{
        setOpenModal(false);
    };
    const onAdd = (event) =>{
        event.preventDefault();
        addToDo(newValue);
        setOpenModal(false);
    };
    return(
         <section className="wrapperF">
            <button type="button" onClick={onCancel} className="buttonX">X</button>
             <form onSubmit={onAdd} className="FormM">
                <label >Ingrese la Tarea a Realizar</label>
                <textarea placeholder="Ingresa tu Tarea por hacer" 
                          value={newValue}
                          onChange={onChange}
                />
                <div className="WrapperButton">
                    <button type="submit" onClick={onAdd} className="buttonAdd">Agregar Tarea</button>
                </div>
             </form>
         </section>
     )
 };
export{ ToDoForm };