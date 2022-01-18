import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const ToDoContext = React.createContext();

function ToDoProvider(props) {

const {item: ToDo , saveItem: saveToDo , loading , error} = useLocalStorage('ToDO_V1' , []);

const [searchValue , setSearchValue] = React.useState('');

const [openModal , setOpenModal] = React.useState(false);

//contador
const completedToDo = ToDo.filter(ToDo => !! ToDo.completed).length;
const totalToDo = ToDo.length;

//filtro de busqueda 
let searchedToDo = [];

if (!searchValue >= 1) {
  searchedToDo = ToDo;
}else{
  searchedToDo = ToDo.filter(ToDo =>{
    const ToDoText = ToDo.text.toLowerCase();
    const searchText = searchValue.toLowerCase();

    return ToDoText.includes(searchText);
  })
};



const toCompleteToDo = (text) => {
  const ToDoIndex = ToDo.findIndex(ToDo => ToDo.text === text);
  const newToDo = [...ToDo];

  newToDo[ToDoIndex].completed = true ;
  saveToDo(newToDo);
  };

const toDeleteToDo = (text) => {
  const ToDoIndex = ToDo.findIndex(ToDo => ToDo.text === text);
  const newToDo = [...ToDo];
  
  newToDo.splice(ToDoIndex , 1);
  saveToDo(newToDo);
  };

  const addToDo = (text) => {
    
    const newToDo = [...ToDo];
    newToDo.push({
      completed: false,
      text,
    });
    saveToDo(newToDo);
    };

    return (
        <ToDoContext.Provider value={{
            completedToDo,
            totalToDo,
            searchValue,
            setSearchValue,
            searchedToDo,
            toCompleteToDo,
            toDeleteToDo,
            loading,
            error,
            openModal, 
            setOpenModal,
            addToDo,
        }}>
            {props.children}
        </ToDoContext.Provider>
    )
};

export {ToDoContext , ToDoProvider};