const {Todo}= require("../models/index")



module.exports = {
  getAllTodos:async (req, res) => {
    // res.send("hello");
   
    try {
      const todos = await Todo.findAll()
      res.send(todos)
    } catch (error) {
      throw error
      // res.status(500).send(error)
    }
  },

  addTodo: async (req, res) => {
    // res.send("hello");
   
    try {
      
      const todos = await Todo.create(req.body)
      res.status(201).send(todos)
    } catch (error) {
      throw error
      // res.status(500).send(error)
    }},


    toggleComplete: async (req, res) => {
      // res.send("hello");
     const id = req.params.id
      try {
        const getTodo =await Todo.findByPk(id)

        const todos = await Todo.update({isComplete:!getTodo.isComplete},{where:{id}})
        res.send(getTodo)
      } catch (error) {
        throw error
        // res.status(500).send(error)
      }},

      deleteTodo: async (req, res) => {
        // res.send("hello");
       const id = req.params.id
        try {
          
          const todos = await Todo.destroy({where:{id:id}})
          res.send("deleted")
        } catch (error) {
          throw error
          // res.status(500).send(error)
        }},

        updateTodo: async (req, res) => {
          // res.send("hello");
         const id = req.params.id
         const body = req.body
          try {
            
            const todos = await Todo.update(body,{where:{id:id}})
            res.send(todos)
          } catch (error) {
            throw error
            // res.status(500).send(error)
          }},






};
