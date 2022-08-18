import { api } from "../api/axios"

export const RegisterUser = async ({userEmail, password}:{userEmail:string,password:string}) => {
  const response = await api.post("/signin", {
    email:userEmail,
    password,
  })
  return response.data
}