import React from 'react';
import styles from './Button.module.css';

export default function Button({ value, onClick, width, fontSize }) {
  return (
    <button
      className={styles.button}
      onClick={onClick}
      value={value}
      style={{ width: width, fontSize: fontSize }}
    >
      {value}
    </button>
  );
}
