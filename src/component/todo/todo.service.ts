import { CreateTodoDto } from './dto/input/createTodo';
import { TodoModel } from './models/todo.model';
import { TodoRepository } from './models/todo.repository';
import { UpdateTodoDto } from './dto/input/updateTodo';

export class TodoService {
  private todoRepository: TodoRepository;

  constructor() {
    this.todoRepository = new TodoRepository(TodoModel);
  }

  async getTodos() {
    return await this.todoRepository.find({});
  }

  async getTodoById(id: string) {
    return await this.todoRepository.findById(id);
  }

  async updateTodoById(id: string, body: UpdateTodoDto) {
    return await this.todoRepository.updateById(id, { ...body }, { new: true });
  }

  async createTodos(body: CreateTodoDto) {
    return await this.todoRepository.create({
      name: body.name,
      description: body.description,
      dateTime: body.dateTime,
    });
  }
}
