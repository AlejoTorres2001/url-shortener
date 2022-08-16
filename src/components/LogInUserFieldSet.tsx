import React from 'react'

const LogInUserFieldSet = ({setActiveFieldset}) => {
  return (
    <fieldset>
    <h2 className="fs-title">Log in with your Account</h2>
    <h3 className="fs-subtitle">We wont share your email,<b>Never</b></h3>
    <input type="text" name="email" placeholder="Email" />
    <input type="password" name="pass" placeholder="Password" />
    <input type="button" name="previous" className="previous action-button" value="Previous"  onClick={()=> setActiveFieldset(1)}  />
    <input type="button" name="next" className="next action-button" value="Next" onClick={()=> setActiveFieldset(3)} />
  </fieldset>
  )
}

export default LogInUserFieldSet