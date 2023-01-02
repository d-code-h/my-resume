import React from 'react';
import style from '../styles/Header.module.css';
import Brand from './Brand';
import Nav from './Nav';
import Container from '../utils/Container';

export default function Header() {
  return (
    <Container>
      <header className={style.header}>
        <Brand />
        <Nav />
      </header>
    </Container>
  );
}
