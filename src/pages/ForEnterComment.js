import React, { useState } from "react";
import Header from "./../components/Header/Header";
import Question from "./../components/Question/Question";
import Button from "./../components/Button/Button";
import styled from "styled-components";
import CommentModal from "./../components/Modal/CommentModal";

const Main = styled.main`
  margin-top: 3rem;
  width: 100%;
  height: 80%;
  background-color: #f8ecec;
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 1rem;
  font-family: "Noto Sans KR Bold";
  font-weight: 300;
`;

const MainTitle = styled.span`
  margin: 0.5rem 1rem;
  font-size: 0.8rem;
`;

const TextArea = styled.textarea`
  background-color: #f4ffeb;
  border: none;
  width: 90%;
  height: 150px;
  border-radius: 1rem;
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.4);
  font-size: 0.7rem;
  margin: 0 auto;
`;

export default function ForEnterComment({ user }) {
  // 입력필드
  const [inputText, setInputText] = useState("");

  const [addComment, setAddComment] = useState(false);
  const [buttonText, setButtonText] = useState("댓글달기");
  const [confirmComment, setConfirmComment] = useState(false);
  const toggleAddComment = () => {
    setAddComment(!addComment);
    setButtonText(addComment ? "답변등록" : "돌아가기");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
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
    <>
      <Header user={user} />
      <Main>
        <MainTitle>
          <b>{user}</b>님이 올린 질문입니다.
        </MainTitle>
        <ul>
          <li>
            <Question value={"나와 닮은 동물은?"} />
          </li>
        </ul>
        {addComment && (
          <TextArea
            placeholder="  댓글달기"
            onChange={handleChange}
            value={inputText}
          />
        )}
        <div>
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
          <CommentModal
            text={"로그인하고 답변을 달면 100포인트가 지급됩니다."}
            btnName1={"뒤로가기"}
            btnName2={"답변등록"}
            onClick1={handleModal}
            onClick2={handleModal}
          />
        )}
      </Main>
    </>
  );
}
