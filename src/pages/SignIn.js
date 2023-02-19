import React from "react";
import Title from "../components/Title/Title";
import { TextField, FormHelperText, Box, Typography } from "@mui/material/";
import styled from "styled-components";
import PrimaryBtn from "../components/Button/PrimaryBtn";
import { secondaryColor } from "../styles/GlobalStyle";

const Wrapper = styled.section`
  text-align: center;
`;

const SignIn = () => {
  return (
    <>
      <Wrapper>
        <Title />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            component: "form",
            marginTop: 5,
            marginBottom: 3,
          }}
        >
          <TextField
            autoFocus
            required
            fullWidth
            variant="standard"
            color="secondary"
            id="email"
            name="email"
            label="이메일"
          />
          <TextField
            required
            fullWidth
            variant="standard"
            color="secondary"
            id="password"
            name="password"
            label="비밀번호"
          />
          <Typography
            fontFamily="Noto Sans KR Black"
            color={secondaryColor}
            sx={{
              fontSize: "12px",
              textAlign: "right",
              cursor: "pointer",
              marginTop: 1,
            }}
          >
            회원가입
          </Typography>
        </Box>
        <PrimaryBtn btnName={"Google"}></PrimaryBtn>
      </Wrapper>
    </>
  );
};

export default SignIn;
