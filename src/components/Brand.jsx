import React from 'react';
import style from '../styles/Brand.module.css';

export default function Brand() {
  return (
    <div>
      <span className={style.brand}>
        <span className={style.brand__icon}>D</span>
        <h3 className="heading-3">David</h3>
      </span>
    </div>
  );
}
