import React, { useState } from 'react'

const Header = () => {

  const [open, setOpen] = useState(false)

  const toggleNav = () => setOpen(open => !open)
  const closeNav = () => setOpen(false)

  return (
    <header className="header">
      <h1 className="header__title">Furkan Setbaşı</h1>
      <button className="header__hamburger-btn" onClick={toggleNav}>
        <span className={`header__hamburger-btn-line ${open ? 'header__hamburger-btn-line--active' : ''}`}></span>
      </button>
      <nav className={`header__nav ${open ? 'header__nav--active' : ''}`}>
        <ul className="header__nav-list">
          <li className="header__nav-list-item">
            <a onClick={closeNav} className="header__nav-list-link" href="#home">home</a>
          </li>
          <li className="header__nav-list-item">
            <a onClick={closeNav} className="header__nav-list-link" href="#projects">projects</a>
          </li>
          <li className="header__nav-list-item">
            <a onClick={closeNav} className="header__nav-list-link" href="#contact">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
