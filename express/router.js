const express = require('express')
const aboutRoutes = require('./aboutRoutes')
const app = express()
const port = 3000

app.use('/about', aboutRoutes)

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
}) 

