import React from 'react'
import { FaTrashCan } from "react-icons/fa6";


const Todo = (props) => {
  const {title,desc} = props.todo;
  const {id} = props;
  const handleClick = (id) =>{
    props.onRemoveTodo(id)
  }
  console.log(props)
  return (
    <article className='flex items-center justify-center'>
      <div className='bg-cyan-800 w-full  px-[40px] py-2 flex justify-between text-white gap-5 mt-2 shadow-xl'>
        <div>
        <h2 className='font-bold'>Title : {title}</h2>
        <p>Description : {desc}</p>
        </div>
        <button onClick={()=>{handleClick(id)}}>
      <FaTrashCan className='hover:text-red-500'/>
        </button>
    </div>

    
    </article>
  )
}

export default Todo