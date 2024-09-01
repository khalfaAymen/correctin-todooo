import React from 'react'
import Todo from './todo'
export default function AllTodos({todos,deleteTodo,toggleComplete,updateTodo}) {
  return (

    <div>
        {todos.map((element)=>{
            return <Todo updateTodo={updateTodo} deleteTodo={deleteTodo} toggleComplete={toggleComplete}key={element.id} todo={element}/>
        })}
    </div>
  )
}
