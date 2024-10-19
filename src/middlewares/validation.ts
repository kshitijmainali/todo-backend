import logger from '@/config/logger';
import { Request, Response, NextFunction } from 'express';
import Joi from 'joi';

export enum ValidationSource {
  body = 'body',
  query = 'query',
  params = 'params',
}

const validationMiddleware = (
  schema: Joi.ObjectSchema,
  data: ValidationSource = ValidationSource.body,
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req[data]) {
      logger.debug('Request validation failed: request data not found');
      return res.status(400).json({
        status: 'error',
        message: 'Invalid request data',
      });
    }

    const { error } = schema.validate(req.body, { abortEarly: false });

    if (error) {
      return res.status(400).json({
        status: 'error',
        message: error.details.map((err) => err.message).join(', '),
      });
    }

    next();
  };
};

export default validationMiddleware;
