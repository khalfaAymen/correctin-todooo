import React,{useState} from 'react'

export default function Create({createTodo}) {
const [todo,setTodo]=useState({
    title:"",
    description:""

})

const handleChange=(event)=>{
setTodo((prev)=>{
    console.log(prev);
    
return {
   ...prev,
   [event.target.name]:event.target.value
}
})
}
  return (
    <form onSubmit={(event)=>createTodo(todo,event)} >
  <label for="fname" >Title:</label><br/>
  <input type="text" id="fname" name="title" onChange={handleChange}/><br/>
  <label for="lname">Description:</label><br/>
  <input type="text" id="lname" name="description" onChange={handleChange}/><br/>
  <input type='submit' value='add to do'/>
</form>

  )
}
