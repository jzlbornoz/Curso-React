import React, { useEffect, useState } from 'react';
import './App.css';
import{ useToDo } from "./useToDo";
import { Header } from "../Header";
import {ToDoCounter} from "../ToDoCounter";
import {ToDoSearch} from "../ToDoSearch";
import {ToDoList} from "../ToDoList";
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { ToDoContext } from ".";
import { Modal } from "../Modal";
import { ToDoForm } from "../ToDoForm";
import { Spinner } from "../Spinner";
import { Blind } from "../NoFound";


function App() {

  const { error , 
    loading , 
    searchedToDo ,
    toCompleteToDo , 
    toDeleteToDo , 
    openModal , 
    setOpenModal,
    totalToDo, 
    completedToDo,
    searchValue , 
    setSearchValue,
    addToDo, } = useToDo();

  return(
<section className='section'>
    <Header>

    <ToDoCounter totalToDo ={totalToDo} completedToDo ={completedToDo}/>
    <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>
    
    </Header>
    
    <ToDoList>
        {error && <p>Se ha producido un Error...</p>}
        {loading && <Spinner/>}
        {(!loading && !searchedToDo.length) && <Blind/>}

        {searchedToDo.map( todo =>(
        <ToDoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          onComplete={() => toCompleteToDo(todo.text) }
          onDelete={() => toDeleteToDo(todo.text) }
        />
        ))}
    </ToDoList>

    {!!openModal && (
        <Modal>
            <ToDoForm addToDo={addToDo} setOpenModal={setOpenModal}/>
        </Modal>
    )}

    <CreateToDoButton setOpenModal={setOpenModal}/>
</section>
    )
};


export default App;