import { useMutation } from '@tanstack/react-query'
import React, { Dispatch, useRef } from 'react'
import { RegisterUser } from '../services/RegisterUser'
type registerPayload = {
  userEmail: string
  password: string
}
export type registerFieldProps = {
  setActiveFieldset: Dispatch<number>
}
const useRegisterField = ({ setActiveFieldset }: registerFieldProps) => {
  const EmailRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const confirmPasswordRef =
    useRef() as React.MutableRefObject<HTMLInputElement>
  const { mutate, isSuccess, isError, data } = useMutation(
    ({ userEmail, password }: registerPayload) =>
      RegisterUser({ userEmail, password }),

    {
      onSuccess: () => {
        EmailRef.current.value = ''
        passwordRef.current.value = ''
        confirmPasswordRef.current.value = ''
        setActiveFieldset(2)
      }
    }
  )
  const HandleUserRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    const userEmail: string = EmailRef.current.value
    const password: string = passwordRef.current.value
    const confirmPassword: string = confirmPasswordRef.current.value
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    mutate({ userEmail, password })
  }
  return {
    EmailRef,
    passwordRef,
    confirmPasswordRef,
    HandleUserRegister,
    isSuccess,
    isError,
    data
  }
}

export default useRegisterField
