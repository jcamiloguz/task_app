import React from 'react'
import { Link } from 'react-router-dom'
import './styles/header.css'
export default function Header() {
  return (
    <header className="Header__container">
      <div className="Header">
        <div className="Header__Logo"></div>
        <div className="Header__Navbar">
          <ul>
            <li>
              <Link className="link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="link" to="/tasks/">
                Tasks
              </Link>
            </li>
            <li>
              <Link className="link" to="/about/">
                About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}
