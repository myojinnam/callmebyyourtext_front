import React, { useContext, useState } from "react";
import { primaryColor } from "../styles/GlobalStyle";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import PrimaryBtn from "../components/Button/PrimaryBtn";
import Menu from "../assets/images/menu.png";
import { AuthContext } from "../context/AuthContext";
import { TextField } from "@mui/material";
import {
  Header,
  LogIn,
  MyPage,
  QuestionBox,
  Wrapper,
} from "../components/Styled";

const Question = () => {
  const userId = localStorage.getItem("id");
  const navigate = useNavigate();
  const { isLoggedIn } = useContext(AuthContext);
  const goToSignIn = () => {
    navigate("/signin");
  };
  const goToMyPage = () => {
    if (isLoggedIn) {
      navigate(`/mypage/${userId}`);
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
        <PrimaryBtn btnName={"SNS 공유하기"}></PrimaryBtn>
        <br />
        <PrimaryBtn btnName={"주소 복사"}></PrimaryBtn>
      </Wrapper>
    </>
  );
};

export default Question;
