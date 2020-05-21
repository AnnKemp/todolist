import React, { createContext, useState, useContext } from 'react';

// this is the context hook page
export const TodoContext= createContext();

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

    return <TodoContext.Provider value={todoData} {...props} />;
}
//Here we create a custom hook that allows us to consume the todo context
function useTodoContext(){
    return useContext(TodoContext);
}
export { TodoProvider, useTodoContext };