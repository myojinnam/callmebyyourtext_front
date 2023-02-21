import { Typography, Box } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { pointColor, primaryColor } from "../styles/GlobalStyle";
import Typewriter from "typewriter-effect";
import PrimaryBtn from "../components/Button/PrimaryBtn";

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
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
      <Typography
        variant="h5"
        sx={{
          color: `${pointColor}`,
          borderBottom: `1px solid ${primaryColor}`,
          marginBottom: "30%",
        }}
      >
        ***님의 페이지입니다.
      </Typography>
      <Wrapper>
        <Box
          sx={{
            whiteSpace: "pre-wrap",
            fontSize: "13px",
            fontWeight: "600",
            color: `${pointColor}`,
            marginBottom: 5,
          }}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("'꽃 피는 계절, 새로운 시작.\n")
                .pauseFor(1000)
                .typeString("겨울이 추위를 녹이는 시간.\n")
                .pauseFor(500)
                .typeString("산들바람, ")
                .pauseFor(500)
                .typeString("불어오는 개강")
                .pauseFor(700)
                .deleteChars(2)
                .typeString("<strong>따스한 봄</strong>.\n\n")
                .pauseFor(1000)
                .typeString("<strong>당신</strong>은 어떤 사람인가요?'")
                .start();
            }}
          />
        </Box>
        <PrimaryBtn btnName={"더 알아보기"}></PrimaryBtn>
      </Wrapper>
    </>
  );
};

export default MyPage;
