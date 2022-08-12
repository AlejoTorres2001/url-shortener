import { PrismaClient } from "@prisma/client"

export const findUser = async (email: string) => {
  const client = new PrismaClient()
  try {
    const user = await client.user.findUnique({
      where: {
        email,
      },
    })
    return user
  } catch (error) {
    throw error
  }
}