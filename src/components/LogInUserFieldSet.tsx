import { useMutation } from '@tanstack/react-query'
import React, { useRef } from 'react'
import useLogInField, {
  registerFieldProps
} from '../hooks/useLogInField'


const LogInUserFieldSet = ({ setActiveFieldset }: registerFieldProps) => {
  const { EmailRef, passwordRef, handleUserLogIn, isSuccess, isError, data } =
    useLogInField({ setActiveFieldset })
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
