const express = require('express')
const path = require('path')
const app = express()

const LogsController = require('./logsController')

// Allow the server to parse JSON
app.use(express.json({ limit: '5mb' }))

// Log each request the server receives
app.use('*', (req, _, next) => {
  console.log(`HTTP request received: ${req.method} -> ${req.originalUrl}`)
  next()
})

// Log all errors
app.use((error, req, res, next) => {
  console.error(`Express error: ${JSON.stringify(error)}`)
  res.sendStatus(error.status || 500)
})

// Load frontend on request
app.use(express.static(path.join(__dirname, './client/build')))
app.get(/^\/(?!api).*/, (req, res) => {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.post('/api/logs', LogsController.saveIncomingLogs)

const port = process.env.PORT || 3000
app.listen(port)

console.log(`The Password Tester is listening on port ${port}.`)
