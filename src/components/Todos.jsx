import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
  return (
    <div className='bg-cyan-300 w-[50%]'>
        {props.todos.map((todo) => (
            <Todo key={todo.id} todo={todo.newTodo} id={todo.id} onRemoveTodo={props.onRemoveTodo}/>
        ))}
    </div>
  )
}

export default Todos