import "./ToDoList.css";

function ToDoList(props) {
    
    return(
    
        <section>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.searchedToDo.length) && props.onEmpty()}

            {props.searchedToDo.map(props.render)}
                
                <ul>
                    {props.children}
                </ul>
        </section>
    )
};

export {ToDoList};