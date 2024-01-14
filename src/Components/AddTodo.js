import React, { useState } from "react";

export default function AddTodo(props) {
    const[title,newTitle]=useState('hey ')
    
    const[desc,newDesc]=useState('desccccccccccc ')
    let submit=(e)=>{
        e.preventDefault();
        if(!title || !desc)
        {
            alert("why????")
        }
        props.todos( title,desc);
    }
  return (
    <>
      <div className="container">
        <h3>Add new Todo</h3>
        <form onSubmit={submit}>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="title"
              value={title}
              onChange={(e)=>{newTitle(e.target.value)}}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label for="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              value={desc}
              onChange={(e)=>{newDesc(e.target.value)}}


              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" className="btn btn-sm btn-success">
            Submit
          </button>
        </form>
      </div>
    </>
  );
}
