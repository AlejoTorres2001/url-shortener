import { api } from '../api/axios'
import { AxiosResponse } from 'axios'
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
