import { client } from '../client/client'
import { findUser } from './findUser'

export const createUrl = async (
  shortUrl: string,
  url: string,
  userEmail: string
) => {
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
  return newUrl
}
