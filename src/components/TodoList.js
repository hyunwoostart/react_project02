import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [id, seteId] = useState(0);

  const addTodo = () => {
    seteId(id + 1);
    setTodos([...todos, {id, task: todo }]);
    setTodo("");
  };

  const handleDelete = (id) => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);

    console.log(todos);
  };

   const handleEdit = (id) => {
        console.log('dddd')
    }

  return (
    <div>
      <h2>할일 목록</h2>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="할 일을 입력하세요"
      />
      <button onClick={addTodo}>추가</button>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} onEdit={handleEdit} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
