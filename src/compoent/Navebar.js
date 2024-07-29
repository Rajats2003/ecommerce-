import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import './NAvebar.css'; // Ensure the correct import path for your CSS file
import { useSelector } from 'react-redux';

function Navbar() {
  const { cart } = useSelector((state) => state);

  return (
    <div className="navbar">
      <NavLink to='/' className="logo">
        <img src="./logo.png" alt="Logo" />
      </NavLink>

      <div className="nav-links">
        <NavLink to='/' activeClassName="active-link">
          <p>Home</p>
        </NavLink>
        <NavLink to='/cart' activeClassName="active-link" className="cart-notification">
          <FaShoppingCart />
          {
            cart.length > 0 &&
            <span>
              {cart.length}
            </span>
          }
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
