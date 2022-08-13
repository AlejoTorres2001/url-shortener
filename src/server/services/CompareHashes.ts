import bcrypt from 'bcryptjs'
export const  CompareHashes = async (password: string, hashedPassword: string) => {
  const match = await bcrypt.compare(password, hashedPassword)
  return match
}