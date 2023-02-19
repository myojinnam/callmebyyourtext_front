import React from "react";
import styled from "styled-components";
import { primaryColor } from "../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../components/Button/PrimaryBtn";

const LogIn = styled.p`
  font-size: 14px;
  position: fixed;
  top: 3px;
  right: 13px;
  color: ${primaryColor};
  cursor: pointer;
`;
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
`;
const Header = styled.p`
  color: ${primaryColor};
  border-bottom: 1px solid ${primaryColor};
`;

const QuestionBox = styled.section`
  box-shadow: 0px 4px 5px 0px rgb(0 0 0 / 30%);
  min-height: 50px;
  margin-bottom: 30%;
`;

const Question = () => {
  const navigate = useNavigate();
  const signIn = () => {
    navigate("/signin");
  };
  return (
    <>
      <LogIn onClick={signIn}>로그인</LogIn>
      <Wrapper>
        <Header>홍길동님의 질문입니다.</Header>
        <QuestionBox>저의 첫인상은 어땠나요?</QuestionBox>
        <PrimaryBtn btnName={"답변 등록"}></PrimaryBtn>
      </Wrapper>
    </>
  );
};

export default Question;
