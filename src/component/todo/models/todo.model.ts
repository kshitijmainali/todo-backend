import { Schema, Document, model } from 'mongoose'

export interface ITodo {
  name: string
  description: string
  image: string
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
    image: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

export const TodoModel = model<ITodoModel>('Store', todoSchema)
