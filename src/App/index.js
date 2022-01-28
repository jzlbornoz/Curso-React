import React, { useEffect, useState } from 'react';
import './App.css';
import{ useToDo } from "./useToDo";
import { Header } from "../Header";
import {ToDoCounter} from "../ToDoCounter";
import {ToDoSearch} from "../ToDoSearch";
import {ToDoList} from "../ToDoList";
import { ToDoItem } from '../ToDoItem';
import { CreateToDoButton } from '../CreateToDoButton';
import { Modal } from "../Modal";
import { ToDoForm } from "../ToDoForm";
import { Spinner } from "../Spinner";
import { Blind } from "../NoFound";
import { NoFound } from '../NoFound';
import { OnError } from "../OnError";
import { ChangeAlertwithStorageListener } from "../ChangeAlert";


function App() {

  const { 
    error , 
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
    addToDo,
    sincronizeToDo } = useToDo();

  return(
<section className='section'>
    <Header loading={loading}>
      <ToDoCounter totalToDo ={totalToDo} completedToDo ={completedToDo} />
      <ToDoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
    </Header>
    
    <ToDoList
              error = {error}
              loading = {loading}
              searchedToDo = {searchedToDo}
              totalToDo = {totalToDo}
              searchText = {searchValue}
              onError = {() => <OnError/>} 
              onLoading = {() => <Spinner/>} 
              onEmpty = {() => <Blind/>}
              onEmptyResult = {(searchText) => <NoFound text={searchText}/>}
              // render = { todo => (
              //   <ToDoItem key={todo.text} 
              //              text={todo.text}
              //              completed={todo.completed}
              //              onComplete={() => toCompleteToDo(todo.text) }
              //              onDelete={() => toDeleteToDo(todo.text) }
              //   />)} este codigo se comenta porque se esta pasando el de abajo (es el mismo codigo pero se pasa como children)
    >
      { todo => (
                <ToDoItem key={todo.text} 
                           text={todo.text}
                           completed={todo.completed}
                           onComplete={() => toCompleteToDo(todo.text) }
                           onDelete={() => toDeleteToDo(todo.text) }
                />)}
    </ToDoList>

    {!!openModal && (
        <Modal>
            <ToDoForm addToDo={addToDo} setOpenModal={setOpenModal}/>
        </Modal>
    )}

    <CreateToDoButton setOpenModal={setOpenModal}/>

      <ChangeAlertwithStorageListener sincronizeToDo={sincronizeToDo} />

</section>
    )
};


export default App;