import { NextFunction, Request, Response } from 'express';
import { TodoService } from './todo.service';
import { RequestWithBody, RequestWithParamsAndBody } from '@/types/genericTypes';
import { CreateTodoDto } from './dto/input/createTodo';
import { succMessage } from '@/constant/language';
import { UpdateTodoDto } from './dto/input/updateTodo';
import { formatResponse } from '@/utils/helpers';

export class TodoController {
  private readonly todoService: TodoService;
  constructor() {
    this.todoService = new TodoService();
  }

  getTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todos = await this.todoService.getTodos(req.query as any);
      res.json(formatResponse(todos, succMessage.listedSuccessFully('Todo')));
    } catch (e) {
      next(e);
    }
  };

  getTodoById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todos = await this.todoService.getTodoById(req.params.id);
      res.json(formatResponse(todos, succMessage.listedSuccessFully('Todo')));
    } catch (e) {
      next(e);
    }
  };

  updateTodo = async (
    req: RequestWithParamsAndBody<{ id: string }, UpdateTodoDto>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const todos = await this.todoService.updateTodoById(req.params.id, req.body);
      res.json(formatResponse(todos, succMessage.listedSuccessFully('Todo')));
    } catch (e) {
      next(e);
    }
  };

  removeTodoById = async (
    req: RequestWithBody<{ id: string }>,
    res: Response,
    next: NextFunction,
  ) => {
    try {
      const todos = await this.todoService.removeTodoById(req.params.id);
      res.json(formatResponse(todos, succMessage.listedSuccessFully('Todo')));
    } catch (e) {
      next(e);
    }
  };

  createTodos = async (req: RequestWithBody<CreateTodoDto>, res: Response, next: NextFunction) => {
    try {
      const todo = await this.todoService.createTodos(req.body);
      res.json(formatResponse(todo, succMessage.createdSuccessFully('Todo')));
    } catch (e) {
      next(e);
    }
  };
}
