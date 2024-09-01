import { useEffect, useState } from "react";
import "./App.css";
import AllTodos from "./components /allTodos";
import Create from "./components /create";
import axios from "axios";
function App() {
  const [view, setView] = useState("AllTodos");
  const [todos, setTodos] = useState([]);
  const changeView = (v) => {
    console.log(" view", v);
    setView(v);
  };
  useEffect(() => {
    fetchTodos();
  }, []);
  const createTodo = async (todo, event) => {
    event.preventDefault();
    console.log("this my todo", todo);
   

    try {
      const { data } = await axios.post("http://localhost:5000/api/todo/add",todo);
      console.log(data);
      setView("AllTodos")
      // fetchTodos()
     
    } catch (error) {
      throw error;
    }
  };
  const toggleComplete=async(id)=>{
    try {
      const { data } = await axios.patch(`http://localhost:5000/api/todo/${id}`);
      console.log(data);
      fetchTodos()
     
    } catch (error) {
      throw error;
    }
  }
  const updateTodo=async(body,id,event)=>{
    event.preventDefault();
    console.log("this my todo", body,id);
    try {
      const { data } = await axios.put(`http://localhost:5000/api/todo/${id}`,body);
      console.log(data);
      fetchTodos()
     
    } catch (error) {
      throw error;
    }
  }
  const deleteTodo=async(id)=>{

    try {
      const { data } = await axios.delete(`http://localhost:5000/api/todo/${id}`);
      console.log(data);
      fetchTodos()
     
    } catch (error) {
      throw error;
    }
  }
  const fetchTodos = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/todo/getAll");
      console.log(data);
      setTodos(data);
    } catch (error) {
      throw error;
    }
  };
  return (
    <div>
      <ul>
        <li onClick={() => changeView("AllTodos")}>My tasks</li>
        <li onClick={() => changeView("Create")}>Create your todo</li>
      </ul>
      {view === "AllTodos" ? (
        <AllTodos deleteTodo={deleteTodo} updateTodo={updateTodo}toggleComplete={toggleComplete} todos={todos} />
      ) : (
        <Create createTodo={createTodo} />
      )}
    </div>
  );
}

export default App;
