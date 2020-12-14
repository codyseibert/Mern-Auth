const dotenv = require('dotenv')
dotenv.config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const authRouter = require('./routes/authRoute')
const errorHandler = require('./middlewares/errorHandler')

const app = express()

const port = process.env.PORT || 8080

mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true, useUnifiedTopology:true})

app.use(cors())
app.use(express.json())


app.use('/api/auth/user', authRouter)

app.use(errorHandler)

app.listen(port, () => console.log(`App is running on port ${port}`))
