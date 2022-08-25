import { useMutation } from '@tanstack/react-query'
import React, { Dispatch, useEffect, useRef, useState } from 'react'
import { sendUrl } from '../services/sendUrl'
import useAuthContext from './useAuthContext'
export type payload = {
  url: string
  userEmail: string
}
export type urlFieldProps = {
  setActiveFieldset: Dispatch<number>
}
const useUrlField = () => {
  const { userState } = useAuthContext()
  const [isFieldEmpty, setisFieldsEmpty] = useState(false)

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
    const userEmail: string = userState.user.email
    if (url === '') {
      return setisFieldsEmpty(true)
    }
    if (userEmail === '') {
      return 
      //no logged in user
    }
    mutate({ userEmail, url })
  }
  useEffect(() => {
    const intervalId = setInterval(() => {
      setisFieldsEmpty(false)
    }, 3000)
    return () => {
      clearInterval(intervalId)
    }
  }, [isFieldEmpty])
  return {
    urlRef,
    handleSendUrl,
    isSuccess,
    isError,
    data,
    isFieldEmpty
  }
}

export default useUrlField
