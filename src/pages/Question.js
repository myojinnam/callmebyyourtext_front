import React, { useContext } from "react";
import styled from "styled-components";
import { primaryColor } from "../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../components/Button/PrimaryBtn";
import Menu from "../assets/images/menu.png";
import { AuthContext } from "../context/AuthContext";

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

const LogOut = styled.img`
  postion: absolute;
  top: 5px;
  right: 13px;
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
  const { setIsLoggedIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const goToSignIn = () => {
    navigate("/signin");
  };
  const logOut = () => {
    if (window.confirm("정말 로그아웃하시겠습니까?")) {
      setIsLoggedIn(false);
      localStorage.clear();
      alert("로그아웃되었습니다.");
      // navigate("/", { replace: true });
      window.location.replace("/");
    } else {
      return;
    }
  };
  return (
    <>
      <LogIn onClick={goToSignIn}>로그인</LogIn>
      <LogOut src={Menu} onClick={logOut} />
      <Wrapper>
        <Header>***님의 질문입니다.</Header>
        <QuestionBox>질문란</QuestionBox>
        <PrimaryBtn btnName={"답변 등록"}></PrimaryBtn>
      </Wrapper>
    </>
  );
};

export default Question;
