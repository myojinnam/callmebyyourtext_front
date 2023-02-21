import React from "react";
import styled from "styled-components";
import { primaryColor } from "../styles/GlobalStyle";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-content: center;
`;
const Header = styled.p`
  color: ${primaryColor};
  border-bottom: 1px solid ${primaryColor};
`;

const MyPage = () => {
  // if (window.confirm("정말 로그아웃하시겠습니까?")) {
  //   setIsLoggedIn(false);
  //   localStorage.clear();
  //   alert("로그아웃되었습니다.");
  //   // navigate("/", { replace: true });
  //   window.location.replace("/");
  // } else {
  //   return;
  // }
  return (
    <>
      <Wrapper>
        <Header>***님의 페이지입니다.</Header>
      </Wrapper>
    </>
  );
};

export default MyPage;
