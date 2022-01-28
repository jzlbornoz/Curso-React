import React from "react";

//HOC
function withStorageListener(WrappedComponent) {
    return function WrappedComponentWStorageListener(props) {

        const [storageChange , setStorageChange] = React.useState();

    window.addEventListener('storage' , (change)=>{
        if (change.key === 'ToDO_V1') {
            console.log('hubo cambio viejo')
            setStorageChange(true)
        }
    })

    const toggleShow = () => {
        props.sincronizeToDo();
        setStorageChange(false);
    };

    return (
        <WrappedComponent 
                        show={storageChange}
                        toggleShow={toggleShow} 
        />)
    }
};

export { withStorageListener };