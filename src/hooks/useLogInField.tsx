import { useMutation } from '@tanstack/react-query'
import React, { Dispatch, useRef } from 'react'
import { LogInUser } from '../services/LogInUser'
import useAuthContext from './useAuthContext'
export type registerFieldProps = {
  setActiveFieldset: Dispatch<number>
}
export type logInPayload = {
  userEmail: string
  password: string
}
const useLogInField = ({ setActiveFieldset }: registerFieldProps) => {
  const {userState,setUserState} = useAuthContext()
  const EmailRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const { mutate, isSuccess, isError, data } = useMutation(
    ({ userEmail, password }: logInPayload) =>
      LogInUser({ userEmail, password }),

    {
      onSuccess: (data) => {
        setUserState({
          isLoggedIn: true,
          user: data.user
        })
        EmailRef.current.value = ''
        passwordRef.current.value = ''
        setActiveFieldset(3)
      }
    }
  )
  const handleUserLogIn = async (e: React.FormEvent) => {
    e.preventDefault()
    const userEmail: string = EmailRef.current.value
    const password: string = passwordRef.current.value
    mutate({ userEmail, password })

  }
  return {
    EmailRef,
    passwordRef,
    handleUserLogIn,
    isSuccess,
    isError,
    data
  }
}

export default useLogInField
