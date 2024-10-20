export const ENVIRONMENT = process.env.APP_ENV || 'dev'
export const IS_PRODUCTION = ENVIRONMENT === 'production'
export const IS_TEST = ENVIRONMENT === 'test'
export const APP_PORT = Number(process.env.APP_PORT) || 9000
export const APP_PREFIX_PATH = process.env.APP_PREFIX_PATH || '/'
export const DB_SERVER = process.env.DB_SERVER || 'mongodb://localhost:27017/'
export const DB_NAME = process.env.DB_NAME || 'core'
