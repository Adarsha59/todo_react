import React from 'react'
import Todo from '../Components/Todo';


const Todos = (props) => {
  return (
    
    <div className="container">
      <h1 className="text-center my-3">Todo List</h1>
      
      {props.todo.length===0?"No todos to display":props.todo.map((todo)=>{
        return(
      <Todo  key={todo.id} todo = {todo} onDelete ={props.onDelete} />)

      })}
      
      </div>
  )
}

export default Todos





