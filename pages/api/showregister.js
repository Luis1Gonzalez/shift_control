import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

export default  async function handler(req, res) {
    const showRegister = await prisma.shiftEntry.findMany()
    res.status(200).json(showRegister)
}
