import React from "react";
import {useState} from "react";

function useLocalStorageGUIA(itemName , initialValue) {

    //Simulador de API para practicar el useEffect
    const [error , setError] = useState(false) ;
    const [loading , setLoading] = React.useState(true);
    const [item , setItem] = React.useState(initialValue);

    const [sincronizedItem , setSincronizedItem] = React.useState(true);
    
    React.useEffect(()=>{
      setTimeout(() => {
        try {
              const localStorageItem = localStorage.getItem(itemName);
    
              let parsedItem;
    
              //Verificacion
              if (!localStorageItem) {
                localStorage.setItem(itemName , JSON.stringify(initialValue));
                parsedItem= initialValue;
              }else{
                parsedItem = JSON.parse(localStorageItem);
              };
              setItem(parsedItem);
              setLoading(false);
              setSincronizedItem(true)
      } catch (error) {// Este try-catch es para poder reaccinar a cualquier error dentro del codigo y no se crashed.
          setError(error);
        }
      }, 2000);
    },[sincronizedItem]);
    
    
    
    //PUENTE
    
    const saveItem = (newItem) =>{
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName , stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    
    };
    
    const sincronize = () =>{
      setLoading(true)
      setSincronizedItem(false)
    };

      return{item , saveItem , loading , error , sincronize};
    
    };

    export { useLocalStorageGUIA };