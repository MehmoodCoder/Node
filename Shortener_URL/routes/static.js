import express from 'express'
import { HomeUI, SignUp, LogIn, AdminUser } from '../controllers/static.js'
import { RestrictTo } from '../middlewares/auth.js'

const router = express.Router()

router.get('/admin', RestrictTo(['Admin']), AdminUser)

router.get("/", RestrictTo(['Normal', 'Admin']), HomeUI)

router.get('/signup', SignUp)

router.get('/login', LogIn)

export default router