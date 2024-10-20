import Joi from 'joi';

// Define validation schema for updating a todo item
export const paginationSchema = Joi.object({
  limit: Joi.number().default(10),
  skip: Joi.number().default(0),
  search: Joi.string().optional(),
  statusFilter: Joi.string().optional(),
}).prefs({ convert: true });

export interface Pagination {
  limit: number;
  skip: number;
  search?: string;
  statusFilter?: string;
}
