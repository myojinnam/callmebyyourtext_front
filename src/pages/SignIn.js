import React, { useState } from "react";
import Title from "../components/Title/Title";
import { TextField, Box, Typography } from "@mui/material/";
import styled from "styled-components";
import PrimaryBtn from "../components/Button/PrimaryBtn";
import { secondaryColor } from "../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Wrapper = styled.section`
  text-align: center;
`;

const BtnWrapper = styled.section`
  text-align: center;
`;

const SignIn = () => {
  const navigate = useNavigate();
  // const { isLoggedIn, setIsLoggedIn }
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = inputs;
    const user = {
      email,
      password,
    };
    await axios
      .post("http://127.0.0.1:8000/login/login/", user)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handlePage = () => {
    navigate("/signup");
  };
  return (
    <>
      <Wrapper>
        <Title />
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
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
            type="email"
            id="email"
            name="email"
            label="이메일"
            onChange={onChange}
          />
          <TextField
            required
            fullWidth
            variant="standard"
            color="secondary"
            type="password"
            id="password"
            name="password"
            label="비밀번호"
            onChange={onChange}
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
