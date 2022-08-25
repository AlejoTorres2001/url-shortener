import { useMutation } from '@tanstack/react-query'
import React, { Dispatch, useEffect, useRef, useState } from 'react'
import { setInterval } from 'timers'
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
  const { userState, setUserState } = useAuthContext()
  const EmailRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const [areFieldsEmpty, setAreFieldsEmpty] = useState(false)
  const { mutate, isSuccess, isError, data } = useMutation(
    ({ userEmail, password }: logInPayload) =>
      LogInUser({ userEmail, password }),

    {
      onSuccess: (data) => {
        setUserState({
          isLoggedIn: true,
          user: {
            email: data.email,
            id: data.id
          }
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
    if (userEmail === '' || password === '') {
      return setAreFieldsEmpty(true)
    }
    mutate({ userEmail, password })
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setAreFieldsEmpty(false)
    }, 3000)
    return () => {
      clearInterval(intervalId)
    }
  }, [areFieldsEmpty])
  return {
    EmailRef,
    passwordRef,
    handleUserLogIn,
    isSuccess,
    isError,
    data,
    areFieldsEmpty
  }
}

export default useLogInField
