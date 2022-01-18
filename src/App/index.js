import React, { useEffect, useState } from 'react';
import './App.css';
import { AppUI } from './AppUI';
import{ ToDoProvider } from "../ToDoContext";




function App() {
  return (
    <ToDoProvider>
      <AppUI/>
    </ToDoProvider>
  );
}

export default App;