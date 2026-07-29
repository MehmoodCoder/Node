import express from 'express'
import { SignUp } from '../controllers/user.js'

const routes = express.Router()

routes.post('/', SignUp)

export default routes