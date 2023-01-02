import React, { useState } from 'react';
import style from '../styles/Nav.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Nav() {
  const navLinks = [
    'Home',
    'About',
    'Process',
    'Portfolio',
    'Blogs',
    'Services',
    'Contact',
  ];
  const [showLinks, setShowLinks] = useState(false);
  return (
    <nav className={style.nav}>
      {showLinks ? (
        <FaTimes
          className={style.nav__bar}
          onClick={() => setShowLinks(!showLinks)}
        />
      ) : (
        <FaBars
          className={style.nav__bar}
          onClick={() => setShowLinks(!showLinks)}
        />
      )}
      <div className={style.nav__menu}>
        {navLinks.map((link) => {
          return (
            <a href={`#${link.toLowerCase()}`} className={style.nav__link}>
              {link}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
