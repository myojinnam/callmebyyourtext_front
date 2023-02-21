import React, { useState } from "react";
import styled from "styled-components";
import { primaryColor } from "../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../components/Button/PrimaryBtn";
import Menu from "../assets/images/menu.png";

const Auth = JSON.parse(localStorage.getItem("auth"));

const LogIn = styled.p`
  font-size: 14px;
  position: fixed;
  top: 3px;
  right: 13px;
  color: ${primaryColor};
  cursor: pointer;
  // display: ${Auth ? "none" : "inline-block"};
`;

const MyPage = styled.img`
  width: auto;
  height: auto;
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
  box-shadow: 3px 3px 5px 0px rgb(0 0 0 / 20%);
  border-radius: 5px;
  min-height: 100px;
  margin-bottom: 10%;
`;

const Question = () => {
  const navigate = useNavigate();
  const goToSignIn = () => {
    navigate("/signin");
  };
  const goToMyPage = () => {
    navigate("/mypage");
  };
  return (
    <>
      <LogIn onClick={goToSignIn}>로그인</LogIn>
      <MyPage src={Menu} onClick={goToMyPage} />
      <Wrapper>
        <Header>***님의 질문입니다.</Header>
        <QuestionBox>질문란</QuestionBox>
        <PrimaryBtn btnName={"답변 등록"}></PrimaryBtn>
      </Wrapper>
    </>
  );
};

export default Question;
