import React from 'react'
import { Link } from 'react-router-dom'
import ShoppingCart from './ShoppingCart'

export default function Header() {
  return (
    <div className="header">
        <div className='logo'>PREMIUM SUBLIMINALS</div>
        <div className="nav_container">
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/howitworks">How It Works</Link>
          <Link to="/categories">Categories</Link>   
        </nav>
        <ShoppingCart />
        </div>
    </div>
  )
}
