import { useMutation } from '@tanstack/react-query'
import React, { Dispatch, useRef } from 'react'
import { LogInUser } from '../services/LogInUser'
export type registerFieldProps = {
  setActiveFieldset: Dispatch<number>
}
export type logInPayload = {
  userEmail: string
  password: string
}
const useLogInField = ({ setActiveFieldset }: registerFieldProps) => {
  const EmailRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const { mutate, isSuccess, isError, data } = useMutation(
    ({ userEmail, password }: logInPayload) =>
      LogInUser({ userEmail, password }),

    {
      onSuccess: () => {
        EmailRef.current.value = ''
        passwordRef.current.value = ''
        // set the session here
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
