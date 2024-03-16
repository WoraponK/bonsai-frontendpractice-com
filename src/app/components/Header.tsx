import React from 'react'

import { FaAngleDown } from "react-icons/fa6";

function Header() {
  return (
    <header className='main-header'>
      <a href="#">
        <h1>bonsai</h1>
      </a>
      <nav>
        <ul className='nav nav-horizontal'>
          <li>
            <a href="#">Product</a>
            <FaAngleDown />
          </li>
          <li>
            <a href="#">Templates</a>
            <FaAngleDown />
          </li>
          <li>
            <a href="#">Pricing</a>
          </li>
          <li>
            <a href="#">Reviews</a>
          </li>
        </ul>
      </nav>
      <div className='--btn-groups'>
        <button className='btn btn-bordered'>Login</button>
        <button className='btn btn-primary'>Start free</button>
      </div>
    </header>
  )
}

export default Header