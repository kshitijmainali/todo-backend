import express from 'express';
import { TodoController } from './todo.controller';
import validationMiddleware from '@/middlewares/validation';
import { createTodoSchema } from './dto/input/createTodo';

const todoRouter = express.Router();

const todoController = new TodoController();

todoRouter.get('/', todoController.getTodos);

todoRouter.post('/', validationMiddleware(createTodoSchema), todoController.createTodos);

export default todoRouter;
