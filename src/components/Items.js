import React, { useState } from "react";
import { useTodoContext } from "../contexts/TodoContext";

export function NewItem(){
    const [text, setText] = useState("");

    // todoContext containe a selfmade hook
    const todoContext = useTodoContext();

    return(
        <div className="Item">
            <input type="text" placeholder="New Task" value={ text } onChange={e => setText(e.target.value)}></input>
            <button onClick={() => todoContext.add(text)}>Add</button>
        </div>
    );
}
export function ItemList(){
    // TodoContext is made available as a hook
    const todoContext = useTodoContext();

    return todoContext.items.map((item, i) => <Item text={item} index={i} key={i} remove={todoContext.remove} />);
}
export function Item({ text, index, remove }){
    return(
        <div className="Item">
            {index +1} {text}
            <span onClick={()=>remove(index)}>Done</span>
        </div>
    )
}
