import { client } from '../client/client'

export const findUser = async (email: string) => {
  try {
    const user = await client.user.findUnique({
      where: {
        email
      }
    })
    return user
  } catch (error) {
    throw error
  } finally {
  }
}
