import React, { useState } from 'react'
import { FaTrashCan } from "react-icons/fa6";
import { v4 as uuidv4 } from 'uuid';


import Todos from './Todos'
import Newtodo from './Newtodo'
  

const Home = () => {
    const [todos , setTodos] = useState([]);

    const handleNewTodo = (newTodo) =>{
        setTodos((prevTodos) =>{
          return [...prevTodos, {id: uuidv4(), newTodo}];
        });
    
    };
     const handleRemoveTodo = (id) =>{
         const filteredTodos = todos.filter((todo)=> todo.id !== id );
         setTodos(filteredTodos)
     }
  return (
    <div className='bg-cyan-500 min-h-[100vh] flex flex-col gap-4 items-center justify-center'>
        <h2 className='font-bold text-center text-[40px]'>Todo App</h2>
        <Newtodo onTodo={handleNewTodo}/>
        <Todos todos={todos} onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}

export default Home