import React from 'react';
import styles from './Header.module.css';

export default function Header({ user }) {
  return (
    <header className={styles.header}>
      <div className={styles.titleWrap}>
        <img
          className={styles.titleLogo}
          src="images\titlelogo.png"
          alt="error"
        />
        <span className={styles.titleName}>{user}</span>님 페이지입니다.
      </div>
    </header>
  );
}
