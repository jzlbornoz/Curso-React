import React from "react";
import {useState} from "react";

function useLocalStorage(itemName , initialValue) {

    //Simulador de API para practicar el useEffect
    const [error , setError] = useState(false) ;
    const [loading , setLoading] = React.useState(true);
    const [item , setItem] = React.useState(initialValue);
    
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
      } catch (error) {// Este try-catch es para poder reaccinar a cualquier error dentro del codigo y no se crashed.
          setError(error);
        }
      }, 2000);
    },[]);
    
    
    
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
    
      return{item , saveItem , loading , error};
    
    };

    export { useLocalStorage };