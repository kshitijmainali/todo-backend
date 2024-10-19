import { NextFunction, Request, Response } from 'express'
import { TodoService } from './todo.service'

export class TodoController {
  private readonly todoService: TodoService
  constructor() {
    this.todoService = new TodoService()
  }

  async getTodos(req: Request, res: Response, next: NextFunction) {
    try {
      const todos = await this.todoService.getTodos()
      res.json(todos)
    } catch (e) {
      next(e)
    }
  }
}
