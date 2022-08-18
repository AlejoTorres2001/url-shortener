import React from 'react'
import useUrlField, { urlFieldProps } from '../hooks/useUrlField'

const UrlFieldSet = ({ setActiveFieldset }: urlFieldProps) => {
  const { urlRef, handleSendUrl, isSuccess, isError, data } = useUrlField()
  return (
    <fieldset>
      <h2 className="fs-title">Short your Url</h2>
      <h3 className="fs-subtitle">we'll keep your shortened urls safe</h3>
      <input
        ref={urlRef}
        type="url"
        name="fname"
        placeholder="Paste your URL here!"
      />
      <input
        type="button"
        name="previous"
        className="previous action-button"
        value="Previous"
        onClick={() => setActiveFieldset(2)}
      />
      <input
        onClick={handleSendUrl}
        type="submit"
        name="submit"
        className="submit action-button"
        value="Submit"
      />
      {isSuccess && (
        <div>{window.location.href.concat(data?.data?.shortUrl as string)}</div>
      )}
    </fieldset>
  )
}

export default UrlFieldSet
