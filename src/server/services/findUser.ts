import { prisma } from '../client/client'

export const findUser = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
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
