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
            fontSize: "14px",
            color: `${pointColor}`,
            marginBottom: 5,
          }}
        >
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString(
                  "'벚꽃 피는 3월, 새 학기, 새 출발\n어느새 눈이 녹고 개강"
                )
                .pauseFor(500)
                .deleteChars(2)
                .typeString(
                  "<strong>따스한 봄</strong>이에요.\n\n모든 것이 새로이 시작되는 시기,\n<strong>나</strong>에 대해 더 알아봐요.'"
                )
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
