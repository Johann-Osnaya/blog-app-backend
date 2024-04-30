const app = require('../app')
const route = require('../routes/login')

app.use('/api/login', route)

module.exports = app;