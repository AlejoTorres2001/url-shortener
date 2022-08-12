import type { NextApiRequest, NextApiResponse } from 'next'
import { findUser } from '../../server/services/findUser'
import { createUser } from '../../server/services/createUser'
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res
      .status(405)
      .json({ statusCode: 405, message: 'Method Not Allowed' })
  }
  const { password, email } = req.body
  if (!password) {
    return res
      .status(400)
      .json({ statusCode: 400, message: 'Missing password' })
  }
  if (!email) {
    return res
      .status(400)
      .json({ statusCode: 400, message: 'Missing userEmail' })
  }
  try {
    const match = await findUser(email as string)
    if (!match) {
      const newUser = await createUser({
        email: email as string,
        password: password as string
      })
      return res.status(200).json({ statusCode: 200, user: newUser })
    }
    return res
      .status(401)
      .json({ statusCode: 401, error: 'User already exists' })
  } catch (error: any) {
    return res.status(500).json({ statusCode: 500, message: error.message })
  }
}
