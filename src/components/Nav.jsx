import React, { useState } from 'react';
import style from '../styles/Nav.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';

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
  const [display, setDisplay] = useState(false);
  const handleMenuClick = () => {
    setShowLinks(!showLinks);
    setDisplay(!display);
  };

  const handleResize = () => {
    if (window.innerWidth > 600) {
      setShowLinks(false);
      setDisplay(false);
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [showLinks, display]);

  return (
    <nav className={style.nav}>
      {showLinks ? (
        <FaTimes className={style.nav__bar} onClick={() => handleMenuClick()} />
      ) : (
        <FaBars className={style.nav__bar} onClick={() => handleMenuClick()} />
      )}
      <div className={display ? style.nav__menu_open : style.nav__menu}>
        {navLinks.map((link) => {
          return (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className={style.nav__link}
            >
              {link}
            </a>
          );
        })}
      </div>
    </nav>
  );
}
