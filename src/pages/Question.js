import React, { useContext, useState } from "react";
import styled from "styled-components";
import { primaryColor } from "../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../components/Button/PrimaryBtn";
import Menu from "../assets/images/menu.png";
import { AuthContext } from "../context/AuthContext";
import { TextField } from "@mui/material";

const Auth = JSON.parse(localStorage.getItem("auth"));

const LogIn = styled.p`
  font-size: 14px;
  position: fixed;
  top: 3px;
  right: 13px;
  color: ${primaryColor};
  cursor: pointer;
  display: ${Auth ? "none" : "inline-block"};
`;

const MyPage = styled.img`
  width: auto;
  height: auto;
  cursor: pointer;
  position: absolute;
  top: 50px;
  right: 13px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Header = styled.p`
  color: ${primaryColor};
  font-size: 16px;
  font-weight: 800;
  border-bottom: 1px solid ${primaryColor};
`;

const QuestionBox = styled.section`
  box-shadow: 3px 3px 5px 0px rgb(0 0 0 / 20%);
  border-radius: 5px;
  max-width: 300px;
  min-height: 100px;
  margin-bottom: 10%;
  padding: 20px;
`;

const Question = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const goToSignIn = () => {
    navigate("/signin");
  };
  const goToMyPage = () => {
    if (isLoggedIn) {
      navigate("/mypage");
    } else {
      return alert("로그인 후 이용해주세요.");
    }
  };

  const onSubmit = (e) => {
    alert(e.target);
  };
  return (
    <>
      <LogIn onClick={goToSignIn}>로그인</LogIn>
      <MyPage src={Menu} onClick={goToMyPage} />
      <Wrapper>
        <Header>***님의 질문입니다.</Header>
        <QuestionBox>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </QuestionBox>
        <TextField
          variant="outlined"
          autoFocus
          fullWidth
          color="secondary"
          id="answer"
          label="답변을 입력해주세요."
          name="answer"
          autoComplete="answer"
          sx={{
            borderBottom: `1px dashed ${primaryColor}`,
            borderRadius: 3,
            marginBottom: 2,
          }}
          // onChange={onChange}
        />
        <PrimaryBtn btnName={"답변 등록"} onClick={onSubmit}></PrimaryBtn>
        <br />
        <PrimaryBtn btnName={"sns 공유하기"}></PrimaryBtn>
      </Wrapper>
    </>
  );
};

export default Question;
