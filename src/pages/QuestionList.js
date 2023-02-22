import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import TitleLogo from "../assets/images/titleLogo.png";
import { SmallImg, Wrapper } from "../components/Styled";
import { Box, Typography } from "@mui/material";
import { pointColor, primaryColor } from "../styles/GlobalStyle";
import ListBtn from "../components/Button/ListBtn";

const QuestionList = () => {
  const navigate = useNavigate();
  const userName = localStorage.getItem("name");
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <>
      <Wrapper>
        <Typography
          variant="h5"
          sx={{
            color: `${pointColor}`,
            borderBottom: `1px solid ${primaryColor}`,
            marginBottom: "10%",
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
        >
          <ListBtn btnName={"test"}></ListBtn>
        </Box>
      </Wrapper>
    </>
  );
};

export default QuestionList;
