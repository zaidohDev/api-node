import express from 'express'
import create from './services/create'

const router = express.Router()

// http://localhost:3000/bills/
router.post('/', create)

export default router