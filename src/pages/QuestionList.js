import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import TitleLogo from "../assets/images/titleLogo.png";
import { SmallImg, Wrapper } from "../components/Styled";
import { Box, Typography } from "@mui/material";
import { pointColor, primaryColor } from "../styles/GlobalStyle";

const QuestionList = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("name");
  const { isLoggedIn } = useContext(AuthContext);
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
            <SmallImg src={TitleLogo} /> {userName}님의 질문 리스트
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          ></Box>
        </Wrapper>
      </>
    );
  } else {
    alert("로그인 후 이용해 주세요.");
    navigate("/");
    return;
  }
};

export default QuestionList;
