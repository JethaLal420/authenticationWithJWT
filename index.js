const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')

const authRoute = require('./routes/auth')
const postRoute = require('./routes/post')

const app = express()

// dotenv config
dotenv.config()

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, () => {
   console.log('Connected to DB...')
})

// Middlewares
app.use(express.json())

// Config Routes
app.use('/api/user', authRoute)
app.use('/api/post', postRoute)

app.listen(3000, () => console.log('running'))