import { client } from '../client/client'

export const verfyShortenUrl = async (shortenUrl: string): Promise<boolean> => {
  const urlRegisters = await client.link.findMany({
    where: {
      shortUrl: shortenUrl
    }
  })
  return typeof urlRegisters !== 'undefined' && urlRegisters.length === 0
}
