import React from 'react'

import { FaAngleDown } from "react-icons/fa6";

function Footer() {
  const Product = () => (
    <div className='nav nav-vertical'>
      <h3>Product</h3>
      <ul>
        <li>
          <a href="#">Proposals</a>
        </li>
        <li>
          <a href="#">Contracts</a>
        </li>
        <li>
          <a href="#">Invoicing</a>
        </li>
        <li>
          <a href="#">Client CRM</a>
        </li>
        <li>
          <a href="#">Time Tracking</a>
        </li>
        <li>
          <a href="#">Task Tracking</a>
        </li>
        <li>
          <a href="#">Forms</a>
        </li>
        <li>
          <a href="#">Acounting</a>
        </li>
        <li>
          <a href="#">Bonsai Tax</a>
        </li>
        <li>
          <a href="#">Bonsai Cash</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">Pricing</a>
        </li>
        <li>
          <a href="">Bonsai Reviews</a>
        </li>
      </ul>
    </div>
  );

  const FreeResources = () => (
    <div className='nav nav-vertical'>
      <h3>Free Resources</h3>
      <ul>
        <li>
          <a href="#">Freelance Resources</a>
        </li>
        <li>
          <a href="#">Freelance Blog by Bonsai</a>
        </li>
        <li>
          <a href="#">How to Write a Contract</a>
        </li>
        <li>
          <a href="#">Online Signature Maker</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">Self-Employed Taxes Hub</a>
        </li>
        <li>
          <a href="#">Self-Employed Tax Calculator</a>
        </li>
        <li>
          <a href="#">Self-Employed Tax Deductions</a>
        </li>
      </ul>
      <ul>
        <h4>Templates</h4>
        <li>
          <a href="#">Invoice Templates</a>
          <FaAngleDown />
        </li>
        <li>
          <a href="#">Proposal Templates</a>
          <FaAngleDown />
        </li>
        <li>
          <a href="#">Contract Templates</a>
          <FaAngleDown />
        </li>
        <li>
          <a href="#">Agreement Templates</a>
          <FaAngleDown />
        </li>
        <li>
          <a href="#">Scope of Work Templates</a>
          <FaAngleDown />
        </li>
        <li>
          <a href="#">Quote Templates</a>
          <FaAngleDown />
        </li>
        <li>
          <a href="#">Credit Note Templates</a>
        </li>
        <li>
          <a href="#">Estimate Templates</a>
        </li>
      </ul>
    </div>
  );

  const Bonsai = () => (
    <div className='nav nav-vertical'>
      <h3>Bonsai</h3>
      <ul>
        <li><a href="#">About</a></li>
        <li><a href="#">Careers</a></li>
        <li><a href="#">Support</a></li>
        <li><a href="#">LinkedIn</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Privacy policy</a></li>
        <li><a href="#">Legal</a></li>
      </ul>
      <ul>
        <li><a href="#">Affilates</a></li>
        <li><a href="#">Write for Us</a></li>
      </ul>
      <ul>
        <li>
          <a href="#">Comparisons</a>
          <FaAngleDown />
        </li>
      </ul>
    </div>
  );

  return (
    <footer className='main-footer'>
      <Product />
      <FreeResources />
      <Bonsai />
    </footer>
  )
}

export default Footer