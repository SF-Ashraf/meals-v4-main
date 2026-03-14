import React from 'react'
import { NavLink } from 'react-router-dom'
function CustomButton({valueBtn , children , decoration , path}) {
  return (
    <NavLink className={`${decoration}`} to={`${path}`}>{valueBtn || children}</NavLink>
  )
}

export default CustomButton
