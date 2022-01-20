import React from "react";

function Header( {children , loading} ) {
    return (
        <header>
            {React.Children.toArray(children).map(child => ( 
                React.cloneElement(child , {loading})))} 
        </header>
    )
};

export {Header};

//Aca se reparte el loading en los hijos del header ( ToDOCounter y ToDoSearch) 
//con Children para que pueda funcionar el cloneElement 
//ya que si no se mapea los hijos no puede funcionar con varios hijos
///////////////////////////////
//React.Children tiene varias herramientas y la que se implemento ayuda para poder enviarle varios hijos al cloneElement