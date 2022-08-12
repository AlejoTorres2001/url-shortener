import React, { useRef } from 'react'
import { payload, sendUrl } from '../services/sendUrl'
import { useMutation } from '@tanstack/react-query'
const useForm = () => {
  const {mutate,isSuccess,isError} = useMutation(
    ({ url, userEmail }: payload) => sendUrl({ url, userEmail })
  )
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>;
  const userEmail = 'asd'
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate({ url: inputRef.current.value, userEmail })
  }
  return { inputRef, handleSubmit,isSuccess,isError }
}

export default useForm
