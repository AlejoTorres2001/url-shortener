import React from 'react'

const RegisterUserFieldSet = ({setActiveFieldset}) => {
  return (
    <fieldset>
    <h2 className="fs-title">Create your account</h2>
    <h3 className="fs-subtitle">This will only take you seconds</h3>
    <input type="text" name="email" placeholder="Email" />
    <input type="password" name="pass" placeholder="Password" />
    <input type="password" name="cpass" placeholder="Confirm Password" />
    <input type="button" name="next" className="next action-button" value="Next" onClick={()=> setActiveFieldset(2)} />
  </fieldset>
  )
}

export default RegisterUserFieldSet