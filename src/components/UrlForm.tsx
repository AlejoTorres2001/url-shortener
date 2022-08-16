import React, { useState } from 'react'
import LogInUserFieldSet from './LogInUserFieldSet'
import RegisterUserFieldSet from './RegisterUserFieldSet'
import UrlFieldSet from './UrlFieldSet'

const UrlForm = () => {
  const [activeFieldset, setActiveFieldset] = useState(1)
  return (
    <form id="msform">
  <ul id="progressbar">
    <li className="active">SignUp</li>
    <li className=''>SignIn</li>
    <li className=''>Short your URL</li>
  </ul>
  {activeFieldset === 1 && (
    <RegisterUserFieldSet setActiveFieldset={setActiveFieldset} />
  )}
  {activeFieldset === 2 && (
    <LogInUserFieldSet setActiveFieldset={setActiveFieldset}/>
  )}
  {activeFieldset === 3 && (
    <UrlFieldSet setActiveFieldset={setActiveFieldset}/>
  )}
  
</form>
  )
}

export default UrlForm