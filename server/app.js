
import path from 'path'
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import db from './db'

// defining the main router of the app
// const router = require('./routes/apiRouter.js')

// We're in development or production mode
// create and run a real server.
const app = express()
// Use morgan to log requests to our express server to the console
app.use(morgan('dev'))
// Parse incoming request bodies as JSON
app.use(bodyParser.json())
// Parse incoming cookies
app.use(cookieParser())

// API router
// app.use('/api', router)

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../index.html'))
})

// Start the server!
const port = process.env.PORT || 5500

app.listen(port, (err) => {
  if (err) {
    console.error('error connecting: ' + err)
    return
  }
  console.log(`ˁᵒ͡ˑ̉ᵒˀ Server Started, listening @port: ${port}`)
})

db.connect((err) => {
  if (err) {
    console.error(`DB Connection Error: ${err.stack}`)
    return
  }
  console.log(`ˁᵒ͡ˑ̉ᵒˀ DB Connected: ${db.threadId}`)
})
