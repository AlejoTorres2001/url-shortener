import { api } from '../api/axios'
export type payload = {
  url: string
  userEmail: string
}
export const sendUrl = ({ url, userEmail }: payload) => {
  const response = api.post('/shorten', {
    url,
    userEmail
  })
  return response
}
