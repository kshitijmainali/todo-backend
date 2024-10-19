import Joi from 'joi';
import { CreateTodoDto } from './createTodo';

// Define validation schema for updating a todo item
export const updateTodoSchema = Joi.object({
  name: Joi.string().min(3),
  description: Joi.string().max(500),
  dateTime: Joi.date().iso(),
});

export interface UpdateTodoDto extends Partial<CreateTodoDto> {}
