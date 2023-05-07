import { Router } from "express"
import { getTodos, addTodo, updateTodo, deleteTodo } from "../controllers/todos"

const routes: Router = Router()

routes.get("/todos", getTodos)

routes.post("/add-todo", addTodo)

routes.put("/edit-todo/:id", updateTodo)

routes.delete("/delete-todo/:id", deleteTodo)

export default routes

