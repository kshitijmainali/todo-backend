import { CreateTodoDto } from './dto/input/createTodo';
import { TodoModel } from './models/todo.model';
import { TodoRepository } from './models/todo.repository';
import { UpdateTodoDto } from './dto/input/updateTodo';
import { Pagination } from '@/common/dto/pagination';

export class TodoService {
  private todoRepository: TodoRepository;

  constructor() {
    this.todoRepository = new TodoRepository(TodoModel);
  }

  async getTodos(params: Pagination) {
    const pipelineStage = [];

    if (params.search) {
      pipelineStage.push({
        $match: {
          $or: [
            { name: { $regex: params.search, $options: 'i' } },
            { description: { $regex: params.search, $options: 'i' } },
          ],
        },
      });
    }

    return await this.todoRepository.aggregatePaginate(pipelineStage, {
      limit: params.limit || 10,
      skip: params.skip || 0,
    });
  }

  async getTodoById(id: string) {
    return await this.todoRepository.findById(id);
  }

  async updateTodoById(id: string, body: UpdateTodoDto) {
    return await this.todoRepository.updateById(id, { ...body }, { new: true });
  }

  async removeTodoById(id: string) {
    return await this.todoRepository.deleteById(id);
  }

  async createTodos(body: CreateTodoDto) {
    return await this.todoRepository.create({
      name: body.name,
      description: body.description,
      dateTime: body.dateTime,
    });
  }
}
