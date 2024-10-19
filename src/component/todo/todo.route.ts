import express from 'express';
import { TodoController } from './todo.controller';
import validationMiddleware, { ValidationSource } from '@/middlewares/validation';
import { createTodoSchema } from './dto/input/createTodo';
import { paginationSchema } from '@/common/dto/pagination';

const todoRouter = express.Router();

const todoController = new TodoController();

todoRouter
  .route('/')
  .get(validationMiddleware(paginationSchema, ValidationSource.query), todoController.getTodos)
  .post(validationMiddleware(createTodoSchema), todoController.createTodos);

todoRouter.route('/:id').get(todoController.getTodoById).patch(todoController.updateTodo);

export default todoRouter;
