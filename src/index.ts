import mongoose from 'mongoose'
import app from './app'
import { APP_PORT, DB_NAME, DB_SERVER } from '@/config/config'
import logger from './config/logger'

let dbURI: string = `${DB_SERVER}${DB_NAME}`

const options = {
  useUnifiedTopology: true,
  autoIndex: true,
  connectTimeoutMS: 10000,
  socketTimeoutMS: 45000,
  authSource: 'admin',
}

logger.debug(dbURI)
logger.info('connecting to database...')

mongoose
  .connect(dbURI, options)
  .then(() => {
    logger.info('Mongoose connection done')
    app.listen(APP_PORT, () => {
      logger.info(`server listening on ${APP_PORT}`)
    })
  })
  .catch((e) => {
    logger.info('Mongoose connection error')
    logger.error(e)
  })

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', () => {
  logger.debug('Mongoose default connection open to ' + dbURI)
})

// If the connection throws an error
mongoose.connection.on('error', (err) => {
  logger.error('Mongoose default connection error: ' + err)
})

// When the connection is disconnected
mongoose.connection.on('disconnected', () => {
  logger.info('Mongoose default connection disconnected')
})

// If the Node process ends, close the Mongoose connection (ctrl + c)
process.on('SIGINT', () => {
  mongoose.connection
    .close()
    .then(() => {
      logger.info('Mongoose default connection disconnected through app termination')
      process.exit(0) // success exit
    })
    .catch((err) => {
      logger.error('Error occurred while closing Mongoose connection', err)
      process.exit(1) // failure exit
    })
})

process.on('uncaughtException', (err) => {
  logger.error('Uncaught Exception: ' + err)
})
