import React from 'react'
import { NavLink } from 'react-router-dom'
import LogoImage from "../assets/Images/mealschefLogo.png"
function Logo() {
  return (
    <NavLink to={"/"} className="flex flex-col items-center justify-center">
        <img className='w-15 object-cover ' src={LogoImage} alt="logo" />
        <h1 className='text-amber-300 text-2xl font-medium uppercase'>Cheef Main</h1>
    </NavLink>
  )
}

export default Logo
