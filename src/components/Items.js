import React, {useContext, useState} from "react";
import TodoContext from "../contexts/TodoContext"; // hier nog ergens op de pagina een probleempje oplossen maar op het moment heb ik het even té warm 15.11 en ik denk dat het veertig graden is . . . pfff

export function NewItem(){
    const [text, setText] = useState("");
    // TodoContext is made available as a hook
    const todoContext =TodoContext;

    return(
        <div className="Item">
            <input type="text" placeholder="New Task" value={text} onChange={e => setText(e.target.value)}></input>
            <button onClick={() => todoContext.add(text)}>Add</button>
        </div>
    );
}
export function ItemList(){
    // TodoContext is made available as a hook
    const todoContext =TodoContext;

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
