import React, { useRef } from 'react'
import { payload, sendUrl } from '../services/sendUrl'
import { useMutation } from '@tanstack/react-query'
const useForm = () => {
  const { mutate, isSuccess, isError } = useMutation(
    ({ url, userEmail }: payload) => sendUrl({ url, userEmail }),
    {
      onSuccess: () => {
        inputRef.current.value = ''
        EmailRef.current.value = ''
      }
    }
  )
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const EmailRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate({ url: inputRef.current.value, userEmail: EmailRef.current.value })
  }
  return { inputRef, EmailRef, handleSubmit, isSuccess, isError }
}

export default useForm
