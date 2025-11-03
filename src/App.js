import React, { useState } from 'react';
import './App.css';
import FORMTODO from './Components/Formtodo/FORMTODO';
import TODO from './Components/TODO/TODO';

const App = () => {
  let [todos, setTodos] = useState([]);
  const [todoShow,setTodoshow]=useState("all")

  // إضافة مهمة جديدة
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  // حذف مهمة
  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const toggleComplete=(id)=>{

  }
  if (todoShow==="active"){
    todos=todos.filter((todo)=>!todo.complete)
  }else if(todoShow==='complete'){
    todos=todos.filter((todo)=>todo.complete)
  }
  const updataTodo=(s)=>{
    setTodoshow(s)

  }

  return (
    <>
      <FORMTODO onSubmit={addTodo} />
      {todos.map((todo) => (
        <TODO key={todo.id} todo={todo} onDelete={handleDelete} />
      ))}
      <div>
        <button className='updata_all_btn' onclick={()=>updataTodo("all")}>All</button>
        <button className='updata_all_btn' onclick={()=>updataTodo("active")}>Active</button>
        <button className='updata_all_btn' onclick={()=>updataTodo("complete")}>Complete</button>

      </div>
    </>
  );
};

export default App;
