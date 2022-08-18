import { useMutation } from '@tanstack/react-query'
import React, { Dispatch, useRef } from 'react'
import { sendUrl } from '../services/sendUrl'
export type payload = {
  url: string
  userEmail: string
}
export type urlFieldProps = {
  setActiveFieldset: Dispatch<number>
}
const useUrlField = () => {
  const urlRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const { mutate, isSuccess, isError, data } = useMutation(
    ({ userEmail, url }: payload) => sendUrl({ userEmail, url }),
    {
      onSuccess: () => {
        urlRef.current.value = ''
      }
    }
  )
  const handleSendUrl = async (e: React.FormEvent) => {
    e.preventDefault()
    const url: string = urlRef.current.value
    const userEmail: string = 'torres.alejo11@gmail.com' // repalce with session email
    mutate({ userEmail, url })
  }
  return {
    urlRef,
    handleSendUrl,
    isSuccess,
    isError,
    data
  }
}

export default useUrlField
