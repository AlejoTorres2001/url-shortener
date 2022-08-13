import { PrismaClient } from "@prisma/client"

export const findUrl = async (url: string) => {
  const client = new PrismaClient()
  const match = await client.link.findUnique({ where: { url: url } })
  client.$disconnect()
  return match
}