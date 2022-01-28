import "./ToDoList.css";

function ToDoList(props) {
    const renderChange = props.children || props.render  //Se esta usando la manera children. (Se puede usar cualquiera mediante el operador ||)
    return(
    
        <section>
            {props.error && props.onError()}
            {props.loading && props.onLoading()}
            {(!props.loading && !props.totalToDo) && props.onEmpty()}
            {(!!props.totalToDo && !props.searchedToDo.length ) && props.onEmptyResult(props.searchText)}

            {(!props.loading && !props.error) && props.searchedToDo.map(renderChange)}
        </section>
    )
};

export {ToDoList};