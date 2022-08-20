import { NextApiRequest, NextApiResponse } from 'next'
import { CompareHashes } from '../../server/services/CompareHashes'
import { findUser } from '../../server/services/findUser'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  }
  const { email, password }: { password: string; email: string } = req.body
  if (!email) {
    res.status(400).json({ message: 'Email is required' })
    return
  }
  if (!password) {
    res.status(400).json({ message: 'Password is required' })
    return
  }
  const userRegister = await findUser(email)
  if (userRegister) {
    try {
      const match = await CompareHashes(password, userRegister.password)
      if (match) {
        res.status(200).json({ message: 'user logged in',email:userRegister.email,id:userRegister.id })
        return
      }
    } catch (error: any) {
      res.status(500).json({ message: error.message })
      return
    }
  }
  res.status(400).json({ message: 'invalid username or passoword' })
}
