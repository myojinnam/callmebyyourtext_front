import React, { useContext, useEffect, useState } from "react";
import Title from "../components/Title/Title";
import { TextField, Box, Typography } from "@mui/material/";
import styled from "styled-components";
import PrimaryBtn from "../components/Button/PrimaryBtn";
import { secondaryColor } from "../styles/GlobalStyle";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";

const Wrapper = styled.section`
  text-align: center;
`;

const BtnWrapper = styled.section`
  text-align: center;
`;

const SignIn = () => {
  // State-------------------------------------------------------------------
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/home", { replace: true });
    }
  }, [isLoggedIn]);

  // Input 관리--------------------------------------------------------------
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
        setIsLoggedIn(true);
        localStorage.setItem("auth", true);
        localStorage.setItem("token", response.data.token);
        navigate("/question", { replace: true });
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert("잘못된 정보입니다. 다시 시도해주세요.");
        }
      });
  };
  const goToSignUp = () => {
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
            onClick={goToSignUp}
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
