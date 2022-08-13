import { PrismaClient } from '@prisma/client'
import { findUser } from './findUser'

export const createUrl = async (
  shortUrl: string,
  url: string,
  userEmail: string
) => {
  const client = new PrismaClient()
  const match = await findUser(userEmail)
  if (!match) {
    throw new Error('User not found')
  }
  const newUrl = await client.link.create({
    data: {
      url: url,
      shortUrl: shortUrl,
      UserId: match.id
    }
  })
  client.$disconnect()
  return newUrl
}
