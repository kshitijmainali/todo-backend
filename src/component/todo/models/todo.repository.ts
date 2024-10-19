import { BaseRepo } from '@/utils/baseRepo';
import ITodoModel from './todo.model';
import { Model } from 'mongoose';

export class TodoRepository extends BaseRepo<ITodoModel> {
  private projection: object;

  constructor(private todoModel: Model<ITodoModel>) {
    super(todoModel);

    this.projection = {
      _id: 1,
      updatedAt: 1,
      createdAt: 1,
    };
  }
}