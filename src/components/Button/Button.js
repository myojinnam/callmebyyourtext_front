import React from 'react';
import styles from './Button.module.css';

export default function Button({ value, onClick, width }) {
  return (
    <button onClick={onClick} value={value} style={{ width: width }}>
      {value}
    </button>
  );
}
