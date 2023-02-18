import React, { useState } from 'react';
import styles from './InputComment.module.css';

export default function InputComment({ onChange }) {
  const [inputText, setInputText] = useState('');
  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };
  return (
    <textarea
      className={styles.textarea}
      placeholder="  댓글달기"
      onChange={handleChange}
      value={inputText}
    ></textarea>
  );
}
