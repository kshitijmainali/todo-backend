import { Schema, Document, model } from 'mongoose';

export interface ITodo {
  name: string;
  description: string;
  dateTime: string;
}
export enum TodoStatus {
  upcoming = 'upcoming',
  done = 'done',
}

export default interface ITodoModel extends Document, ITodo {}

const todoSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      minlength: 3,
    },
    description: {
      type: String,
      required: true,
      maxlength: 500,
    },
    // this will be utc timestamp for todo deadline
    dateTime: {
      type: Date,
      default: Date.now,
    },
    status: {
      type: String,
      default: TodoStatus.upcoming,
      enum: TodoStatus,
    },
  },
  {
    timestamps: true,
  },
);

export const TodoModel = model<ITodoModel>('Store', todoSchema);
