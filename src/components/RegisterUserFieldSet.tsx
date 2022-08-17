import React from 'react'
import useRegisterField, { registerFieldProps } from '../hooks/useRegisterField'

const RegisterUserFieldSet = ({ setActiveFieldset }: registerFieldProps) => {
  const {
    EmailRef,
    passwordRef,
    confirmPasswordRef,
    HandleUserRegister,
    isError
  } = useRegisterField({ setActiveFieldset })
  return (
    <fieldset>
      <h2 className="fs-title">Create your account</h2>
      <h3 className="fs-subtitle">This will only take you seconds</h3>
      <input ref={EmailRef} type="text" name="email" placeholder="Email" />
      <input
        ref={passwordRef}
        type="password"
        name="pass"
        placeholder="Password"
      />
      <input
        ref={confirmPasswordRef}
        type="password"
        name="cpass"
        placeholder="Confirm Password"
      />
      <input
        type="button"
        name="next"
        className="next action-button"
        value="Next"
        onClick={HandleUserRegister}
      />
      {isError && <div>UPS!theres been an error</div>}
      <a onClick={() => setActiveFieldset(2)}>already have an account?</a>
    </fieldset>
  )
}

export default RegisterUserFieldSet
