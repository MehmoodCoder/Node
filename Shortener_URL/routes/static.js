import express from 'express'
import { HomeUI, SignUp } from '../controllers/static.js'

const router = express.Router()


router.get("/", HomeUI)

router.get('/signup', SignUp)

export default router