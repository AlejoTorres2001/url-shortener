import { prisma } from '../client/client'

type params = {
  email: string
  password: string
}
export async function createUser({ email, password }: params) {
  try {
    const user = await prisma.user.create({
      data: {
        email,
        password
      }
    })
    return user
  } catch (error) {
    throw error
  } finally {
  }
}
