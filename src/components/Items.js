import React, {useContext, useState} from "react";
import TodoContext from "../contexts/TodoContext"; // deze hier ook importeren

export function NewItem(){
    const [text, setText] = useState("");
    // TodoContext is made available as a hook
    const todoContext = useContext(TodoContext);

    return(
        // hier de waarden uit de context hook halen via die values
        <div className="Item">
            <input type="text" placeholder="New Task" value={text} onChange={e => setText(e.target.value)}></input>
            <button onClick={() => todoContext.add(text)}>Add</button>
        </div>
    );
}
export function ItemList(){
    const todoContext = useContext(TodoContext);

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
// deze pagina nog even checken // not a number 0 of zo is niet duidelijk