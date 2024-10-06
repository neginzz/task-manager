import React from 'react'

function Input({type,id,label,placeholder}) {
  return (
    <>
      <label for={id}>{label}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          required
        />
    </>
  )
}

export default Input