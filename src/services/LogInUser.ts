import { api } from '../api/axios'

export const LogInUser = async ({
  userEmail,
  password
}: {
  userEmail: string
  password: string
}) => {
  const response = await api.post('/signup', {
    email: userEmail,
    password
  })
  return response.data
}
