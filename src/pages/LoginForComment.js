import React, { useContext, useEffect, useState } from "react";
import Header from "../components/Header/Header";
import InputId from "../assets/images/inputId.png";
import InputPw from "../assets/images/inputPw.png";
import { useNavigate } from "react-router-dom";
import { TextField, Box, Typography } from "@mui/material/";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import styled from "styled-components";
import PrimaryBtn from "../components/Button/PrimaryBtn";
import "../styles/LoginForComment.css";

const Wrapper = styled.section`
  text-align: center;
`;

const BtnWrapper = styled.section`
  text-align: center;
`;

const TextFieldWrap = styled.div`
  text-align: center;
  display: flex;
`;

const Img = styled.img`
  width: auto;
  object-fit: contain;
  margin-right: 0.5rem;
`;

export default function LoginForComment() {
  // State-------------------------------------------------------------------
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/", { replace: true });
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
        alert("로그인되었습니다.");
        navigate("/forentercomment", { replace: true });
      })
      .catch((error) => {
        if (error.response.status === 400) {
          alert("잘못된 정보입니다. 다시 시도해주세요.");
        }
      });
  };

  // 익명으로 진행-----------------
  const handleClick = () => {
    navigate("/forEnterComment");
  };

  return (
    <>
      <Wrapper>
        <Header user={"user"} />
        <Box
          component="form"
          onSubmit={onSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            marginTop: 5,
            marginBottom: 2,
          }}
        >
          <TextFieldWrap style={{ "margin-top": "9rem" }}>
            <Img src={InputId} />
            <TextField
              autoFocus
              required
              fullWidth
              variant="standard"
              color="secondary"
              type="email"
              id="email"
              name="email"
              label="E-mail"
              onChange={onChange}
            />
          </TextFieldWrap>
          <TextFieldWrap style={{ "margin-top": "1rem" }}>
            <Img src={InputPw} />
            <TextField
              required
              fullWidth
              variant="standard"
              color="secondary"
              type="password"
              id="password"
              name="password"
              label="password"
              onChange={onChange}
            />
          </TextFieldWrap>

          <BtnWrapper style={{ marginTop: "3rem" }}>
            <PrimaryBtn btnName={"로그인"}></PrimaryBtn>
          </BtnWrapper>
        </Box>
        <BtnWrapper style={{ marginTop: "1rem", marginBottom: "3rem" }}>
          <PrimaryBtn btnName={"그냥하기"} onClick={handleClick}></PrimaryBtn>
        </BtnWrapper>
      </Wrapper>
    </>
  );
}
