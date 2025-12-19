import { getAllTransactions } from "../services/transaction.service.js"

export const getTransactions = async (req, res) => {
    try {
        const transactions = await getAllTransactions()
        res.json(transactions)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Error fetching transactions." })
    }
}