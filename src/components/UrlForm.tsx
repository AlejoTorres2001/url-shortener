import React, { useState } from 'react'
import LogInUserFieldSet from './LogInUserFieldSet'
import RegisterUserFieldSet from './RegisterUserFieldSet'
import UrlFieldSet from './UrlFieldSet'

const UrlForm = () => {
  const [activeFieldset, setActiveFieldset] = useState(1)
  return (
    <form id="msform">
  <ul id="progressbar">
    <li className={`${activeFieldset >= 1 ? 'active' : ''}`}>SignUp</li>
    <li className={`${activeFieldset >= 2 ? 'active' : ''}`}>SignIn</li>
    <li className={`${activeFieldset >= 3 ? 'active' : ''}`}>Short your URL</li>
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