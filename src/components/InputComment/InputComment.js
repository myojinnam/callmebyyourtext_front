import React from 'react';
import styles from './InputComment.module.css';

export default function InputComment() {
  return (
    <textarea className={styles.textarea} placeholder="댓글달기"></textarea>
  );
}
