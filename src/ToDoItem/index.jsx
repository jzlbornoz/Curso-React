import "./ToDoItem.css";

function ToDoItem(props) {

    return(
        <li className="ToDoItem">
            <span 
            className={`Icon IconCheck ${props.completed && 'iconCheckAct'}`}
            onClick={props.onComplete}  
            >
            ✓
            </span>
            <p 
            className={`ToDoItemP ${props.completed && 'ToDoItemPComplete'}`} 
            >
                {props.text}
            </p>
            
            <span className='Icon IconX'
                  onClick={props.onDelete}  
            >
                X
            </span>
        </li>
        
    )
};
export {ToDoItem};