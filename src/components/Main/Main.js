import React, { useState } from "react";
import styles from "./Main.module.css";
import Question from "./../Question/Question";
import Button from "../Button/Button";
import InputComment from "../InputComment/InputComment";
import Modal from "./../Modal/Modal";

export default function Main({ name }) {
  const [addComment, setAddComment] = useState(false);
  const [buttonText, setButtonText] = useState("댓글달기");
  const [confirmComment, setConfirmComment] = useState(false);
  const toggleAddComment = () => {
    setAddComment(!addComment);
    setButtonText(addComment ? "답변등록" : "돌아가기");
  };

  const handleInputComment = () => {
    return;
  };
  const handleConfirm = () => {
    setConfirmComment(!confirmComment);
  };
  const handleModal = (modal) => {
    {
      modal && setConfirmComment(!confirmComment);
      //modal 처리
    }
  };
  return (
    <main className={styles.main}>
      <span className={styles.mainTitle}>
        <b>{name}</b>님이 올린 질문입니다.
      </span>
      <ul>
        <li>
          <Question value={"나와 닮은 동물은?"} />
        </li>
      </ul>
      {addComment && <InputComment onChange={handleInputComment} />}
      <div className={addComment ? styles.buttonWrapWide : styles.buttonWrap}>
        <Button
          value={buttonText}
          onClick={toggleAddComment}
          width={addComment ? "100px" : "150px"}
          background={"#F8ECEC"}
        />
        {addComment && (
          <Button
            value={"답변등록"}
            onClick={handleConfirm}
            width={"100px"}
            background={"#F8ECEC"}
          />
        )}
      </div>
      {confirmComment && (
        <Modal className={styles.modal} onClick={handleModal} />
      )}
    </main>
  );
}
