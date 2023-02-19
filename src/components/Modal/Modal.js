import React from 'react';
import Button from '../Button/Button';
import styles from './Modal.module.css';

export default function Modal({ onClick }) {
  const handleGoToPrev = () => {
    onClick(true);
  };

  const handleGoToNext = () => {
    onClick(false);
  };
  return (
    <div className={styles.modal}>
      로그인하고 댓글달면 100point가 지급됩니다.
      <div className={styles.buttonWrap}>
        <Button value={'뒤로가기'} width={'100px'} onClick={handleGoToPrev} />
        <Button value={'댓글달기'} width={'100px'} onClick={handleGoToNext} />
      </div>
    </div>
  );
}
