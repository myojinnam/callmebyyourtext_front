import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import TitleLogo from "../assets/images/titleLogo.png";
import HeartLogo from "../assets/images/inputId.png";
import { modalStyle, SmallImg, Wrapper } from "../components/Styled";
import { Box, Modal, Typography } from "@mui/material";
import { pointColor, primaryColor } from "../styles/GlobalStyle";
import ListBtn from "../components/Button/ListBtn";

const QuestionList = () => {
  // 변수 관리
  const navigate = useNavigate();
  const userName = localStorage.getItem("name");
  const { isLoggedIn } = useContext(AuthContext);

  // 모달 관리
  const [open, setOpen] = useState(false);
  const modalOpen = () => setOpen(true);
  const modalClose = () => setOpen(false);
  const deleteQuestion = () => {
    window.confirm("해당 질문을 삭제하시겠습니까?");
  };

  // // 답변 관리
  // const answerArray = [

  // ];
  // const fetchAnswer = async () => {
  //   try {

  //   } catch {

  //   }
  // };
  // useEffect(() => {
  //   fetchAnswer();
  // }, []);

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
          <ListBtn btnName={"list1"} onClick={modalOpen}></ListBtn>
        </Box>
      </Wrapper>
      <Modal
        open={open}
        onClose={modalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontSize: 16,
              fontFamily: "Noto Sans KR Black",
              borderBottom: `1px solid ${primaryColor}`,
              marginBottom: 3,
              cursor: "pointer",
              transition: "0.5s",
              "&:hover": {
                color: `${primaryColor}`,
              },
            }}
            onClick={deleteQuestion}
          >
            <SmallImg src={HeartLogo} /> 질문
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{
              mt: 2,
              fontSize: 13,
              fontFamily: "Noto Sans KR Black",
              opacity: "75%",
            }}
          >
            답변
          </Typography>
        </Box>
      </Modal>
    </>
  );
};

export default QuestionList;
