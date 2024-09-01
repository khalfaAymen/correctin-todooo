import React, { useState } from 'react'
import Update  from "./update"
export default function Todo({todo,deleteTodo,toggleComplete,updateTodo}) {
    const [change,setChange]=useState(false)
  return (
  <div className='card'>
    <h5 className='header'> {todo.title} </h5>
    <p className='para'>{todo.description}</p>
    <input onChange={()=>toggleComplete(todo.id)} type='checkbox' defaultChecked={todo.isComplete}/>
    <button onClick={()=>deleteTodo(todo.id)}>delete</button>
    <button onClick={()=>setChange(!change)}>update</button>
   {change&&<Update todo={todo} updateTodo={updateTodo}/>}
  </div>
  )
}
