import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='flex flex-row gap-5 place-content-evenly'>
      <NavLink to="/" className={({isActive})=>
      isActive? "text-white bg-greay-100" : "text-gray-700"}>
        Home
      </NavLink>

      <NavLink   to="/pastes">
        All Paste
      </NavLink>

    </div>
  )
}

export default Navbar
