import express from "express"
import cors from 'cors'
import transactionsRoutes from './routes/transaction.routes.js'
const app = express()

app.use(cors())
app.use(express.json())
app.use("/transactions", transactionsRoutes)

app.get("/", (req, res) => {
    res.json({ message: "API runnig 🚀"})
})

export default app