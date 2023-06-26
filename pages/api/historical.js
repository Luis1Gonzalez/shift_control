import { PrismaClient } from "@prisma/client";

export default async function handler(req, res) {
  const prisma = new PrismaClient();


  //Crear registros
  if (req.method === "POST") {
    const dia = await prisma.shiftEntry.create({
      data: {
        generatedId: req.body.generatedId,
        definitiveStart: req.body.definitiveStart,
        definitiveEnd: req.body.definitiveEnd,
        currentDate: req.body.currentDate,
        nowCurrentTime: req.body.nowCurrentTime,
        localDay: req.body.localDay,
        month: req.body.month,
        year: req.body.year,
      },
    });
    res.json(dia);
  }
}
