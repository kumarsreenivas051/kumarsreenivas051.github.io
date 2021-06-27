import React from "react"

function TodoItem(props){
    return (
        <div className="todo-item">
            <input type = "checkbox" />
            {console.log(props.item)}
            <p>{props.item.toString()}</p>
        </div>
    )
}

export default TodoItem