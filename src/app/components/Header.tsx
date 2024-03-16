import React from 'react'

import { FaAngleDown, FaBandcamp } from "react-icons/fa6";

function Header() {

  const LogoLink = () => (
    <a href="#">
      <h1 className='centered-content'>
        <FaBandcamp />
        <span>
          bonsai
        </span>
      </h1>
    </a>
  );

  const Navigator = () => (
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
  );

  const ButtonGroup = () => (
    <div className='--btn-groups'>
      <button className='btn btn-bordered'>Login</button>
      <button className='btn btn-primary'>Start free</button>
    </div>
  );
  return (
    <header className='main-header'>
      <LogoLink />
      <Navigator />
      <ButtonGroup />
    </header>
  )
}

export default Header