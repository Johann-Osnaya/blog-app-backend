const app = require('../app')
const route = require('../routes/users')

app.use('/api/users', route)

module.exports = app;