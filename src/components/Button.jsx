import React from 'react'

function Button(props) {
    //another way to using props
  return (
    <button type="submit">{props.label}</button>
  )
}

export default Button