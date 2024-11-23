import { useState } from "react"

const Newtodo = (props) => {

    const [todo,setTodo] = useState({title:"", desc: ""});
    const handleInputChange = (e) => {
      const name = e.target.name
        setTodo((oldtodo) => {
          return {...oldtodo, [name]:e.target.value}
        })
    }

    const handleSubmit = (e) => {
         e.preventDefault();
         setTodo({title:"",desc:""})

         props.onTodo(todo);
    }
  return (
    <div className="bg-slate-400 px-[80px] w-[50%] rounded-lg">
        <form onSubmit={handleSubmit} className="p-4 flex flex-col">
          <div className="flex mb-3 w-full">
          <label htmlFor="title">Title : </label>
          <input type="text" id="Title" name="title" value={todo.title} onChange={handleInputChange} className="ml-20 w-[250px] px-2"/>
          </div>
            <div className="flex gap-8">
            <label htmlFor="desc">Description :</label>
            <textarea type="text" id="desc" name="desc" value={todo.desc} onChange={handleInputChange} className="w-[250px]"/>
            </div>
            <button type="submit" className="bg-black hover:bg-red-500 text-white p-2 mt-4 ">Add todo</button>
        </form>
    </div>
  )
}

export default Newtodo