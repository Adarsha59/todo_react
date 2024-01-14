import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import Todo from "./Components/Todo";
import Todos from "./Components/Todos";
import Footer from "./Components/Footer";
import React, { useEffect, useState } from "react";
import AddTodo from "./Components/AddTodo";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  let initodo;
  
  if(localStorage.getItem("todos")===null){
    initodo = [];
  }
  else {
     initodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    setTodo((item) => item.filter((e) => e.id !== todo.id));
    localStorage.setItem("todos",JSON.stringify(todo));
  };

  const [todo, setTodo] = useState(initodo);

  const todos=(title,desc)=>{
    console.log("i am added",title,desc);
    // let id = ([todo.length]);
    let id = todo.length + 1;
    console.log(id);
    if (todo.length==0){
      id = 0;
    }

    let mynewtodo={
      id:id,
      title:title,
      description :desc,
    }
    setTodo([...todo,mynewtodo]);
    console.log(mynewtodo);
    localStorage.setItem("todos",JSON.stringify(todo));
    
    

  }
  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todo));
      
    
     
    }, [todo])
  // return (
  //   <>
  //     <NavBar title="Todo-App" searchBar={false} />
  //     <Todo />
  //     <AddTodo  todos={todos}/>
  //     <Todos todo={todo} onDelete={onDelete} />
  //     <Footer />
  //   </>
  // );
  const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
      <NavBar title="Todo-App" searchBar={false} />
      <Todo />
      <AddTodo  todos={todos}/>
       <Todos todo={todo} onDelete={onDelete} />
      <Footer />
      </>
    ),
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
}

export default App;
