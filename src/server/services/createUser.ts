import {PrismaClient} from '@prisma/client'
type params = {
  email: string,
  password: string
}
export async function createUser({email,password}:params){
  const client = new PrismaClient()
  try{
    const user = await client.user.create({
      data:{
        email,
        password
      }
    })
    return user
  }
  catch(error){
    throw error
  }
}