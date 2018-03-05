
import express from 'express'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import router from './router'
import db from './db'

// create and run the server
const app = express()
// Use morgan to log requests to our express server to the console
app.use(morgan('dev'))
// Parse incoming request bodies as JSON
app.use(bodyParser.json())
// Parse incoming cookies
app.use(cookieParser())

// API router
app.use('/', router)

app.get('*', (req, res) => {
  res.status(404).json({ error: true, message: 'Not Found!' })
})

// Start the server!
const port = process.env.PORT || 5500

app.listen(port, (err) => {
  if (err) {
    console.error('error connecting: ' + err)
    return
  }
  console.log(`ˁᵒ͡ˑ̉ᵒˀ Server Started, listening @port: ${port}!`)
})

db.connect((err) => {
  if (err) {
    console.error(`DB Connection Error: ${err.stack}`)
    return
  }
  console.log(`ˁᵒ͡ˑ̉ᵒˀ DB Connected!`)
})
