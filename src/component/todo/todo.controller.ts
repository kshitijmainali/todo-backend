import { NextFunction, Request, Response } from 'express';
import { TodoService } from './todo.service';
import { RequestWithBody } from '@/types/genericTypes';
import { CreateTodoDto } from './dto/input/createTodo';
import { formatResponse } from '@/utils/response';
import { succMessage } from '@/constant/language';

export class TodoController {
  private readonly todoService: TodoService;
  constructor() {
    this.todoService = new TodoService();
  }

  getTodos = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const todos = await this.todoService.getTodos();
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
