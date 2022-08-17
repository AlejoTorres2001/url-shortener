import { api } from "../api/axios"

export const RegisterUser = async (userEmail: string, password: string) => {
  const response = await api.post("/signin", {
    userEmail,
    password,
  })
  return response.data
}