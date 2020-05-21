import React, { useState } from 'react';
import { ItemList, NewItem } from "./components/Items";
import TodoContext from "./contexts/TodoContext"; // deze ook importeren
import './App.css';

const initialItems=["Setup basic components", "Add some styling"];

function App() {
    // useState hook returns two values. First is the state itself
    // and second is a function that we can use to update the state
    const [items, setItems]=useState(initialItems);

    function handleAddItem(item){ // ja die item moet dus tekst zijn en dat is het nog niet nan voorlopig!!!
        setItems([...items, item]); // die puntjes dat was zo'n verkorte notatie zo van "dat kan vanalles zijn" nog even checken om zeker te zijn
    }
    function handleRemoveItem(index){
        const copy=[...items];
        copy.splice(index, 1); // op de index gooi er eentje weg
        setItems(copy);
    }
  return (
      // hier de context hook van waarden voorzien
      <TodoContext.Provider value={{ items, add: handleAddItem, remove: handleRemoveItem }}>
    <div className="App">
        <header className="App-header">
            <h2>ToDo App</h2>
            <NewItem add={handleAddItem} />
            <ItemList items={items} remove={handleRemoveItem} />
        </header>
    </div>
      </TodoContext.Provider>
  );
}

export default App;
