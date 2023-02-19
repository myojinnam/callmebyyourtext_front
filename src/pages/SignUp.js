import React, { useCallback, useState } from "react";
import Title from "../components/Title/Title";
import { TextField, FormHelperText, Box, Typography } from "@mui/material/";
import styled from "styled-components";
import { primaryColor } from "../styles/GlobalStyle";
import PrimaryBtn from "../components/Button/PrimaryBtn";
import axios from "axios";

const Wrapper = styled.section`
  text-align: center;
`;

// FormHelper--------------------------------------------------------------------------
const FormHelperEmails = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: ${(props) =>
    props.isemail === "true" ? "#71c4eb" : "#d32f2f"} !important;
`;
const FormHelperNames = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: ${(props) =>
    props.isname === "true" ? "#71c4eb" : "#d32f2f"} !important;
`;
const FormHelperPWs = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: ${(props) =>
    props.ispassword1 === "true" ? "#71c4eb" : "#d32f2f"} !important;
`;
const FormHelperPWCF = styled(FormHelperText)`
  width: 100%;
  padding-left: 16px;
  font-weight: 700 !important;
  color: ${(props) =>
    props.ispassword2 === "true" ? "#71c4eb" : "#d32f2f"} !important;
`;

const SignUp = () => {
  // Input Component---------------------------------------------------------------------------
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");

  // ErrorMessage State------------------------------------------------------------------------
  const [nameMessage, setNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [password1Message, setPassword1Message] = useState("");
  const [password2Message, setPassword2Message] = useState("");

  // Validation State
  const [isName, setIsName] = useState(false);
  const [isEmail, setIsEmail] = useState(false);
  const [isPassword1, setIsPassword1] = useState(false);
  const [isPassword2, setIsPassword2] = useState(false);

  // Email 유효성 관리
  const onChangeEmail = useCallback((e) => {
    const emailRegex =
      /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
    const emailCurrent = e.target.value;
    setEmail(emailCurrent);

    if (!emailRegex.test(emailCurrent)) {
      setEmailMessage("이메일 형식이 틀렸습니다");
      setIsEmail(false);
    } else {
      setEmailMessage("올바른 이메일 형식입니다");
      setIsEmail(true);
    }
  }, []);

  // Name 유효성 관리
  const onChangeName = useCallback((e) => {
    const nameRegex = /^(?=.*[a-zA-Z0-9가-힣])[a-zA-Z0-9가-힣]{1,10}$/;
    const nameCurrent = e.target.value;
    setName(nameCurrent);
    if (!nameRegex.test(nameCurrent)) {
      setNameMessage("한글 또는 영문자만 가능합니다.[1~10글자]");
      setIsName(false);
    } else {
      setNameMessage("올바른 이름 형식입니다");
      setIsName(true);
    }
  }, []);

  // 비밀번호 유효성 관리
  const onChangePassword1 = useCallback((e) => {
    const password1Regex =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;
    const password1Current = e.target.value;
    setPassword1(password1Current);

    if (!password1Regex.test(password1Current)) {
      setPassword1Message("숫자+영문자+특수문자 조합 8자리 이상 입력");
      setIsPassword1(false);
    } else {
      setPassword1Message("안전한 비밀번호입니다");
      setIsPassword1(true);
    }
  }, []);

  // 비밀번호 확인 유효성 관리
  const onChangePassword2 = useCallback(
    (e) => {
      const password2Current = e.target.value;
      setPassword2(password2Current);

      if (password1 === password2Current) {
        setPassword2Message("비밀번호를 똑같이 입력했어요");
        setIsPassword2(true);
      } else {
        setPassword2Message("비밀번호가 틀렸습니다. 다시 확인하세요");
        setIsPassword2(false);
      }
    },
    [password1]
  );

  // Submit 실행-------------------------------------------------------------------------------
  const onSubmit = async (e) => {
    email.preventDefaul();
    const data = new FormData(e.currentTarget);
    const joinData = {
      email: data.get("email"),
      name: data.get("name"),
      password1: data.get("password1"),
      password2: data.get("password2"),
    };
    await axios
      .post("http://127.0.0.1:8000/login/signup/", joinData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
            onChange={onChangeEmail}
            error={email !== "" && isName}
          />
          <FormHelperEmails isemail={isEmail ? "true" : "false"}>
            {emailMessage}
          </FormHelperEmails>
          <TextField
            required
            fullWidth
            variant="standard"
            color="secondary"
            id="name"
            name="name"
            label="이름"
            onChange={onChangeName}
            error={name !== "" && !isName}
          />
          <FormHelperNames isname={isName ? "true" : "false"}>
            {nameMessage}
          </FormHelperNames>
          <TextField
            required
            fullWidth
            variant="standard"
            color="secondary"
            id="password"
            name="password"
            label="비밀번호 (숫자+영문자+특수문자 8자리 이상)"
            onChange={onChangePassword1}
            error={password1 !== "" && !isPassword1}
          />
          <FormHelperPWs ispassword1={isPassword1 ? "true" : "false"}>
            {password1Message}
          </FormHelperPWs>
          <TextField
            required
            fullWidth
            variant="standard"
            color="secondary"
            id="password2"
            name="password2"
            label="비밀번호 확인"
            sx={{ marginBottom: 3 }}
            onChange={onChangePassword2}
            error={password2 !== "" && !isPassword2}
          />
          <FormHelperPWCF ispassword2={isPassword2 ? "true" : "false"}>
            {password2Message}
          </FormHelperPWCF>
          <PrimaryBtn btnName={"등록"} onClick={onSubmit}></PrimaryBtn>
        </Box>
      </Wrapper>
    </>
  );
};

export default SignUp;
