import React, { useRef } from 'react'
import { payload, sendUrl } from '../services/sendUrl'
import { useMutation } from '@tanstack/react-query'
import { AxiosResponse } from 'axios'
type useFormData = {
  shortUrl: string
  statusCode: number
}
interface useFormReturns {
  inputRef: React.MutableRefObject<HTMLInputElement>
  EmailRef: React.MutableRefObject<HTMLInputElement>
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  isSuccess: boolean
  isError: boolean
  data: AxiosResponse<useFormData> | undefined
}
const useForm = (): useFormReturns => {
  const inputRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const EmailRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const { mutate, isSuccess, isError, data } = useMutation(
    ({ url, userEmail }: payload) => sendUrl({ url, userEmail }),
    {
      onSuccess: () => {
        inputRef.current.value = ''
        EmailRef.current.value = ''
      }
    }
  )
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutate({ url: inputRef.current.value, userEmail: EmailRef.current.value })
  }
  return { inputRef, EmailRef, handleSubmit, isSuccess, isError, data }
}

export default useForm
