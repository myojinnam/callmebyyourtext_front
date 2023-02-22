import { TextField, Modal, Typography, Box } from "@mui/material/";
import { pointColor, primaryColor } from "../../styles/GlobalStyle";
import styled from "styled-components";
import React, { useState, useEffect, useContext } from "react";
import PrimaryBtn from "../Button/PrimaryBtn";

const modalStyle = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 250,
  bgcolor: "background.paper",
  border: `1px solid black`,
  borderRadius: 3,
  boxShadow: 24,
  border: `1px solid ${primaryColor}`,
  p: 4,
};

const ButtonWrap = styled.div`
  margin-top: 1rem;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

export default function MuiModal({
  open,
  modalClose,
  btnName1,
  onClick1,
  type1,
  btnName2,
  onClick2,
  type2,
}) {
  return (
    <Modal
      open={open}
      onClose={modalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Typography
          fontFamily="Noto Sans KR Black"
          id="modal-modal-title"
          variant="h6"
          component="h2"
        >
          Recommend
        </Typography>
        <Typography
          fontFamily="Noto Sans KR Black"
          id="modal-modal-description"
          sx={{ mt: 2 }}
        >
          로그인하고 답변을 달면 100포인트가 지급됩니다.
        </Typography>
        <ButtonWrap>
          <PrimaryBtn
            btnName={btnName1}
            onClick={onClick1}
            type={"type1"}
            width={"100px"}
          />
          <PrimaryBtn
            btnName={btnName2}
            onClick={onClick2}
            type={type2}
            width={"100px"}
          />
        </ButtonWrap>
      </Box>
    </Modal>
  );
}
