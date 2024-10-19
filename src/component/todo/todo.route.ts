import express from 'express'
import { TodoController } from './todo.controller'

const todoRouter = express.Router()

const todoController = new TodoController()

todoRouter.get('/', async (req, res, next) => {
  todoController.getTodos(req, res, next)
})

export default todoRouter
