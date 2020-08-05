import React from 'react'
import './styles/header.css'
export default function Header() {
  return (
    <header className="Header__container">
      <div className="Header">
        <div className="Header__Logo"></div>
        <div className="Header__Navbar">
          <ul>
            <li>Home</li>
            <li>Tasks</li>
            <li>About</li>
          </ul>
        </div>
      </div>
    </header>
  )
}
