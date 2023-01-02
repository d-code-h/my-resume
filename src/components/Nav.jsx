import React from 'react';
import style from '../styles/Nav.module.css';

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
  return (
    <nav className={style.nav}>
      {navLinks.map((link) => {
        return (
          <a href={`#${link.toLowerCase()}`} className={style.nav__link}>
            {link}
          </a>
        );
      })}
    </nav>
  );
}
