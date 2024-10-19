import express from 'express';
import { TodoController } from './todo.controller';
import validationMiddleware from '@/middlewares/validation';
import { createTodoSchema } from './dto/input/createTodo';

const todoRouter = express.Router();

const todoController = new TodoController();

todoRouter
  .route('/')
  .get(todoController.getTodos)
  .post(validationMiddleware(createTodoSchema), todoController.createTodos);

todoRouter.route('/:id').get(todoController.getTodoById).patch(todoController.updateTodo);

export default todoRouter;
