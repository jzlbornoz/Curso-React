import "./ToDoCreateButton.css";

function CreateToDoButton(props) {

    const click = () => {
        props.setOpenModal(prevState => !prevState);
    };
    return(
     <button onClick={click} className="mainButton">
         +
    </button>
    )
}

export {CreateToDoButton};