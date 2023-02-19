import React from "react";
import Title from "../components/Title/Title";
import { TextField, FormHelperText, Box, Typography } from "@mui/material/";
import styled from "styled-components";
import PrimaryBtn from "../components/Button/PrimaryBtn";
import { secondaryColor } from "../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  text-align: center;
`;

const BtnWrapper = styled.section`
  text-align: center;
`;

const SignIn = () => {
  const navigate = useNavigate();
  const handlePage = () => {
    navigate("/signup");
  };
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
            marginBottom: 2,
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
              marginBottom: 3,
            }}
            onClick={handlePage}
          >
            회원가입
          </Typography>
          <BtnWrapper>
            <PrimaryBtn btnName={"Login"}></PrimaryBtn>
          </BtnWrapper>
        </Box>
        <PrimaryBtn btnName={"Google"}></PrimaryBtn>
      </Wrapper>
    </>
  );
};

export default SignIn;
