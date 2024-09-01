const { Sequelize, DataTypes } = require("sequelize");
const connection = new Sequelize("newTodo", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  logging:false
});


// You can use the .authenticate() function to test if the connection is OK
// finish implementing the database logic


connection.authenticate()
.then(()=>{
  console.log("database connected")

})
.catch((error)=>{
  throw error
})


const Todo= require("./todo.model") (connection,DataTypes)








module.exports = {Todo}

// connection.sync({force:true,alter:true})
