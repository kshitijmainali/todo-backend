import Joi from 'joi';

// Define validation schema for creating a todo item
export const createTodoSchema = Joi.object({
  name: Joi.string().min(3).required().messages({
    'string.empty': 'Name is required',
    'string.min': 'Name must be at least 3 characters long',
  }),
  description: Joi.string().max(500).required().messages({
    'string.max': 'Description cannot exceed 500 characters',
  }),
  dateTime: Joi.date().iso().required().messages({
    'date.base': 'Invalid date format. Please use ISO 8601 format',
  }),
});

export interface CreateTodoDto {
  name: string;
  description: string;
  dateTime: Date;
}
