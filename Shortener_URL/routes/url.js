import express from 'express'
import { GenShortURL, GetByShortId, GetAnalatics } from '../controllers/url.js'

const router = express.Router()

router.post('/', GenShortURL)

router.get("/:shortid", GetByShortId)

router.get("/analytics/:shortid", GetAnalatics)


export default router