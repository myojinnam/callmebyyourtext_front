import { Typography, Box, TextField } from "@mui/material";
import React, { useContext, useState } from "react";
import { SmallImg, Wrapper } from "../components/Styled";
import { pointColor, primaryColor } from "../styles/GlobalStyle";
import TitleLogo from "../assets/images/titleLogo.png";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../components/Button/PrimaryBtn";

const CreateQuestion = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("name");
  const { isLoggedIn } = useContext(AuthContext);
  const [inputs, setInputs] = useState("");
  const onChange = (e) => {};
  if (isLoggedIn) {
    return (
      <>
        <Wrapper>
          <Typography
            variant="h5"
            sx={{
              color: `${pointColor}`,
              borderBottom: `1px solid ${primaryColor}`,
              marginBottom: "30%",
            }}
          >
            <SmallImg src={TitleLogo} /> {userName}님의 질문 만들기
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextField
              required
              fullWidth
              color="secondary"
              minRows={5}
              id="question"
              name="question"
              label="새로운 질문"
              multiline
              onChange={onChange}
              sx={{
                border: `1px dotted ${primaryColor}`,
                borderTop: "none",
                borderRadius: 2,
                width: "250px",
                marginBottom: 3,
              }}
            />
            <PrimaryBtn btnName={"등록"}></PrimaryBtn>
          </Box>
        </Wrapper>
      </>
    );
  } else {
    alert("로그인 후 이용해 주세요.");
    navigate("/");
    return;
  }
};

export default CreateQuestion;
