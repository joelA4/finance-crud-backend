import prisma from '../prismaClient.js'

export const getAllTransactions = async () => {
    return await prisma.transaction.findMany({
        orderBy: {
            date: "desc",
        },
    })
}