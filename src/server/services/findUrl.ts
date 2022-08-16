import { client } from '../client/client'
export const findUrl = async (url: string) => {
  const match = await client.link.findUnique({ where: { url: url } })
  return match
}
