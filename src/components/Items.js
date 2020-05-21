import React, { useState } from "react";
import TodoContext from "../contexts/TodoContext"; // deze hier ook importeren

export function NewItem(){
    const [text, setText] = useState("");

    return(
        // hier de waarden uit de context hook halen
        <TodoContext.Consumer>
            {values => (
        <div className="Item">
            <input type="text" placeholder="New Task" value={text} onChange={e => setText(e.target.value)}></input>
            <button onClick={() => values.add(text)}>Add</button>
        </div>
            )}
        </TodoContext.Consumer>
    );
}
export function ItemList(){
    return (
        // hier de waarden uit de context hook halen
        <TodoContext.Consumer>
            {values =>
        values.items.map((item, i) => <Item text={item} key={i} remove={values.remove} />)
            }
        </TodoContext.Consumer>
        );
}
export function Item({ text, index, remove }){
    return(
        <div className="Item">
            {index +1} {text}
            <span onClick={()=>remove(index)}>Done</span>
        </div>
    )
}
// deze pagina nog even checken // not a number 0 of zo is niet duidelijk