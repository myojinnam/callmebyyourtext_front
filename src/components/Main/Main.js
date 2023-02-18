import React, { useState } from 'react';
import styles from './Main.module.css';
import Question from './../Question/Question';
import Button from '../Button/Button';
import InputComment from '../InputComment/InputComment';
import Modal from './../Modal/Modal';

export default function Main({ name }) {
  const [addComment, setAddComment] = useState(false);
  const [buttonText, setButtonText] = useState('댓글달기');
  const [confirmComment, setConfirmComment] = useState(false);
  const toggleAddComment = () => {
    setAddComment(!addComment);
    setButtonText(addComment ? '댓글달기' : '돌아가기');
  };
  const handleConfirm = () => {
    setConfirmComment(!confirmComment);
  };
  const handleModal = (modal) => {
    {
      modal && setConfirmComment(!confirmComment);
    }
  };
  return (
    <main className={styles.main}>
      <b>{name}</b>님이 올린 질문입니다.
      <Question value={'나와 닮은 동물은?'} />
      {addComment && <InputComment />}
      <div className={addComment ? styles.buttonWrapWide : styles.buttonWrap}>
        <Button
          value={buttonText}
          onClick={toggleAddComment}
          width={addComment ? '100px' : '150px'}
        />
        {addComment && (
          <Button value={'확인'} onClick={handleConfirm} width={'100px'} />
        )}
      </div>
      {confirmComment && (
        <Modal className={styles.modal} onClick={handleModal} />
      )}
    </main>
  );
}
