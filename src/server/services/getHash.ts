import bcrypt from 'bcryptjs'

export const getHash = async (password: string, saltRounds: number) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds)
  return hashedPassword
}
