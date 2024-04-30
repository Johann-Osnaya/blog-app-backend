const express = require('express')
const app = express()
require('express-async-errors')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const logger = require('./utils/logger')
const middleware = require('./utils/middleware')


mongoose.connect(config.MONGODB_URI)
	.then(() => {
		logger.info('connected to MongoDB')
	})
	.catch(error => {
		logger.error('error connecting to MongoDB:', error.message)
	})

app.use(cors())
app.use(express.json())
app.use(middleware.TokenExtractor)
app.use(middleware.requestLogger)

if (process.env.NODE_ENV === 'test') {
	const testingRouter = require('./api/testing')
	app.use('/api/testing', testingRouter)
}

app.use(middleware.errorHandler)
module.exports = app
