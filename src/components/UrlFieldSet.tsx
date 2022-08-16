import React from 'react'

const UrlFieldSet = ({setActiveFieldset}) => {
  return (
    <fieldset>
    <h2 className="fs-title">Short your Url</h2>
    <h3 className="fs-subtitle">we'll keep your shortened urls safe</h3>
    <input type="text" name="fname" placeholder="Paste your URL here!" />
    <input type="button" name="previous" className="previous action-button" value="Previous" onClick={()=> setActiveFieldset(2)} />
    <input type="submit" name="submit" className="submit action-button" value="Submit"  />
  </fieldset>
  )
}

export default UrlFieldSet