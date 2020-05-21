import React, { createContext, useState, useContext } from 'react';

// this is the context hook page
export const TodoContext= createContext(); // dit wordt globaal aangemaakt en een constante is zowiezo globaal

const initialItems=["Wash dishes", "Do the dusting"];

//which will hold the state and provide methods to update the state
function TodoProvider(props) {
    const [items, setItems] = useState(initialItems);

    function add(item) {
        setItems([...items, item]); // die puntjes dat was zo'n verkorte notatie zo van "dat kan vanalles zijn dat ervoor komt"
    }

    function remove(index) {
        const copy = [...items];
        copy.splice(index, 1); // op de index gooi er eentje weg
        setItems(copy);
    }
    const todoData={items, add, remove};

    return <TodoContext.Provider value={todoData} {...props} />; // hier geeft ie nog een foutje op  een scope fout maar volgens mij zit de scope toch 'ok'
}
//Here we create a custom hook that allows us to consume the todo context
function useTodoContext(){
    return useContext(TodoContext);
}
export { TodoProvider, useTodoContext };