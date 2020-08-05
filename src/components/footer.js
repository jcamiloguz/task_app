import React from 'react'
import './styles/footer.css'
export default function Footer() {
  return (
    <footer className="footer__container">
      <div className="footer">
        <div className="footer__info--left">
          <p>
            Made with <span>♥</span> by Juan Camilo Guzman
          </p>
        </div>
        <div className="footer__info--right">
          <div className="footer__navbar">
            <ul>
              <li>Home</li>
              <li>Tasks</li>
              <li>About</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
