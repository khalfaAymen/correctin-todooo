const express = require("express");
const Router = express.Router();
const {getAllTodos,addTodo,deleteTodo,updateTodo,toggleComplete}=require('../controllers/todo.controller')
Router.get("/getAll",getAllTodos)
Router.post("/add",addTodo)
Router.delete("/:id",deleteTodo)
Router.put("/:id",updateTodo)
Router.patch("/:id",toggleComplete)




module.exports = Router;
