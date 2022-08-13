import { PrismaClient } from "@prisma/client"

export const verfyShortenUrl = async (shortenUrl: string): Promise<boolean> => {
  const client = new PrismaClient()
  const urlRegisters = await client.link.findMany({
    where: {
      shortUrl: shortenUrl,
    },
  })
  client.$disconnect()
  return typeof urlRegisters !== 'undefined' && urlRegisters.length === 0

}