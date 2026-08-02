import express from 'express'
import { HomeUI, SignUp, LogIn } from '../controllers/static.js'
import { RestrictTo } from '../middlewares/auth.js'

const router = express.Router()


router.get("/", RestrictTo(['Normal']), HomeUI)

router.get('/signup', SignUp)

router.get('/login', LogIn)

export default router