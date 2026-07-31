import express from 'express'
import { SignUp, LogIn } from '../controllers/user.js'

const routes = express.Router()

routes.post('/', SignUp)
routes.post('/login', LogIn)

export default routes