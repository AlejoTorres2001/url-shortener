import { useMutation } from '@tanstack/react-query'
import React, { useRef } from 'react'
import { logInPayload, registerFieldProps } from '../hooks/useLogInField'
import { LogInUser } from '../services/LogInUser'

const LogInUserFieldSet = ({ setActiveFieldset }: registerFieldProps) => {
  const EmailRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const passwordRef = useRef() as React.MutableRefObject<HTMLInputElement>
  const { mutate, isError } = useMutation(
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
  return (
    <fieldset>
      <h2 className="fs-title">Log in with your Account</h2>
      <h3 className="fs-subtitle">
        We wont share your email,<b>Never</b>
      </h3>
      <input ref={EmailRef} type="email" name="email" placeholder="Email" />
      <input
        ref={passwordRef}
        type="password"
        name="pass"
        placeholder="Password"
      />
      <input
        type="button"
        name="previous"
        className="previous action-button"
        value="Previous"
        onClick={() => setActiveFieldset(1)}
      />
      <input
        type="button"
        name="next"
        className="next action-button"
        value="Next"
        onClick={handleUserLogIn}
      />
      {isError && <div>incorrect Username or password</div>}
    </fieldset>
  )
}

export default LogInUserFieldSet
