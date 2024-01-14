// Todo.js
import React from "react";

const Todo = ({ todo,onDelete }) => {
  if (!todo) {
    return null; // Return null or any fallback UI if todo is undefined
  }

  return (
    <div className="container">
      <hr />
      <h4  >{todo.title}</h4>
      <p>{todo.description}</p>
      <button type="button" key={todo.id} onClick={()=>{onDelete(todo)}} className="btn btn-sm btn-danger">Danger</button>
      <hr />
    </div>
  );
};

export default Todo;
