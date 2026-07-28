import express from 'express'
import { GenShortURL, GetByShortId, GetAnalatics, HomeUI } from '../controllers/url.js'

const router = express.Router()

router.post('/', GenShortURL)

router.get("/analytics/:shortid", GetAnalatics)

router.get("/home", HomeUI)

router.get("/:shortid", GetByShortId)


export default router