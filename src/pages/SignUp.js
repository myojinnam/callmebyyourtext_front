import React from "react";
import Title from "../components/Title/Title";
import { TextField, FormHelperText, Box, Typography } from "@mui/material/";
import styled from "styled-components";
import { primaryColor } from "../styles/GlobalStyle";
import PrimaryBtn from "../components/Button/PrimaryBtn";

const Wrapper = styled.section`
  text-align: center;
`;

const SignUp = () => {
  return (
    <>
      <Wrapper>
        <Title />
        <Typography
          fontFamily="Noto Sans KR Bold"
          color={primaryColor}
          sx={{
            fontSize: "12px",
            fontWeight: "900",
            marginTop: 1,
          }}
        >
          회원가입
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            component: "form",
            marginTop: 3,
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
            id="name"
            name="name"
            label="이름"
          />
          <TextField
            required
            fullWidth
            variant="standard"
            color="secondary"
            id="password"
            name="password"
            label="비밀번호"
            sx={{ marginBottom: 3 }}
          />
          <PrimaryBtn btnName={"등록"}></PrimaryBtn>
        </Box>
      </Wrapper>
    </>
  );
};

export default SignUp;
