import { Router } from "express"
import { getTransactions } from '../controllers/transaction.controller.js'

const router = Router()

router.get("/", getTransactions)

export default router
