const express = require("express");
const App = express();
const cors =require("cors")
const port = 5000;
const db = require("./models/index")
const todoRouter = require("./routers/todo.router")
App.use(cors())
App.use(express.json())
App.use("/api/todo",todoRouter)



App.listen(port, () => {
  console.log(`app listening on http://127.0.0.1:${port}`);
});
