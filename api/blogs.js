const app = require('../app')
const route = require('../routes/blogs')

app.use('/api/blogs', route)

module.exports = app;