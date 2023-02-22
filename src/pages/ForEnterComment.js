import React, { useState, useEffect, useContext } from "react";
import Header from "./../components/Header/Header";
import Question from "./../components/Question/Question";
import Button from "./../components/Button/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./../context/AuthContext";
import { TextField } from "@mui/material/";
import MuiModal from "../components/Modal/MuiModal";

const Wrapper = styled.section`
  text-align: center;
  min-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8ecec;
`;
const HeaderWrap = styled.div`
  background-color: white;
  width: 100%;
`;

const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
  font-size: 1rem;
  font-family: "Noto Sans KR Bold";
  font-weight: 300;
  margin: 0 auto;
`;

const ButtonWrap = styled.div`
  display: flex;
`;

const MainTitle = styled.span`
  text-align: start;
  margin: 1rem 0 0 1rem;
  font-size: 0.8rem;
`;

export default function ForEnterComment() {
  // State-------------------------------------------------------------------
  const navigate = useNavigate();
  const userName = localStorage.getItem("name");
  const { isLoggedIn } = useContext(AuthContext);
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     navigate("/", { replace: true });
  //   }
  // }, [isLoggedIn]);

  // textFiled input value state
  const [inputText, setInputText] = useState("");
  // 1st 답변등록 btn click state
  const [addComment, setAddComment] = useState(false);
  // 1st 답변등록 text state
  const [buttonText, setButtonText] = useState("댓글달기");
  // modal click state
  const [confirmComment, setConfirmComment] = useState(false);
  // 모달 관리
  const [open, setOpen] = useState(false);
  const modalOpen = () => {
    if (inputText.trim() === "") {
      alert("답변을 입력해주세요");
      return;
    }
    setOpen(true);
  };
  const modalClose = () => setOpen(false);
  const toggleAddComment = () => {
    setAddComment(!addComment);
    setButtonText(addComment ? "답변등록" : "돌아가기");
  };

  const handleChange = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };
  const handleConfirm = () => {
    setConfirmComment(!confirmComment);
  };
  const handleModal = (modal) => {
    {
      modal && setConfirmComment(!confirmComment);
      //modal 처리
    }
  };
  return (
    <>
      <Wrapper>
        <HeaderWrap>
          <Header user={userName} />
        </HeaderWrap>
        <Main>
          <MainTitle>
            <b>{userName}</b>님이 올린 질문입니다.
          </MainTitle>
          <ul>
            <li>
              <Question value={"나와 닮은 동물은?"} />
            </li>
          </ul>
          {addComment && (
            <TextField
              id="filled-textarea"
              placeholder="답변달기"
              multiline
              variant="outlined"
              onChange={handleChange}
              value={inputText}
              margin="normal"
              rows={4}
              inputProps={{ style: { fontSize: 12 } }}
              sx={{
                backgroundColor: `#f4ffeb`,
                borderRadius: 2,
                border: "none",
                marginBottom: 2,
                width: `90%`,
                margin: `2rem auto`,
                boxShadow: `0px 3px 5px 0px rgba(0, 0, 0, 0.4)`,
              }}
            />
          )}
          <ButtonWrap style={{ "margin-bottom": "5rem" }}>
            <Button
              value={buttonText}
              onClick={toggleAddComment}
              width={addComment ? "150px" : "200px"}
              background={"#F8ECEC"}
            />
            {addComment && (
              <Button
                value={"답변등록"}
                onClick={modalOpen}
                width={"150px"}
                background={"#F8ECEC"}
              />
            )}
          </ButtonWrap>
          <MuiModal
            open={open}
            onClose={modalClose}
            btnName1={"로그인하기"}
            btnName2={"답변달기"}
            onClick1={() => navigate("/loadingtologinforcomment")}
            onClick2={
              // 백엔드로 데이터 전송 후
              () => navigate("/endtocomment")
            }
            text={"로그인하고 답변을 달면 100포인트가 지급됩니다."}
          />
        </Main>
      </Wrapper>
    </>
  );
}
