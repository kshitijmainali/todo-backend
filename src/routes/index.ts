import todoRouter from '@/component/todo/todo.route'
import express from 'express'

const router = express.Router()

router.use('/todo', todoRouter)

export default router
