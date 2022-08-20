import React, { createContext } from 'react'
import { useState } from 'react'
const defaultAuthState = {
  isLoggedIn: false,
  user: {
    email: '',
    id: null
  }
}
export type defaultAuthStateType = typeof defaultAuthState
export interface IAuthContext {
  userState: defaultAuthStateType
  setUserState: (userState: defaultAuthStateType) => void
}
export const AuthContext = createContext({} as IAuthContext)
const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [userState, setUserState] = useState(defaultAuthState)
  return (
    <AuthContext.Provider value={{ userState, setUserState }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContextProvider
