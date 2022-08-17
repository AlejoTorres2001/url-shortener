import { prisma } from '../client/client'
export const findUrl = async (url: string) => {
  const match = await prisma.link.findUnique({ where: { url: url } })
  return match
}
