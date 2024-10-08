import React from 'react'

function Input({type,id,label,placeholder,onChange}) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          required
        />
    </>
  )
}

export default Input