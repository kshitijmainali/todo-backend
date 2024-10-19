import { TodoModel } from './models/todo.model'
import { TodoRepository } from './models/todo.repository'

export class TodoService {
  private todoRepository: TodoRepository

  constructor() {
    this.todoRepository = new TodoRepository(TodoModel)
  }

  async getTodos() {
    return await this.todoRepository.find({})
  }
}
