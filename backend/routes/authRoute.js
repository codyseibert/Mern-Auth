const authRouter = require('express').Router()
const { POST_REGISTER, POST_LOGIN } = require('../controllers/authController')

authRouter.post('/register', POST_REGISTER)

authRouter.post('/login', POST_LOGIN)
module.exports = authRouter