import React from "react";


const TodoItem = ({ todo, onDelete, onEdit }) => {
    const { id, task } = todo;


  
   
    return (
        <li>
            {task} 
            <button onClick={() => onDelete(id)}>삭제</button>
            <button onClick={() => onEdit(id)}>편집</button>
        </li>
    );
}

export default TodoItem;