import React from "react";
import Title from "../components/Title/Title";
import {
  TextField,
  FormControl,
  FormHelperText,
  Box,
  Typography,
  Container,
} from "@mui/material/";
import styled from "styled-components";

const SignIn = () => {
  return (
    <>
      <Title />
      <Box
        sx={{
          component: "form",
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "70vh",
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
        />
        <TextField
          required
          fullWidth
          variant="standard"
          color="secondary"
          id="password"
          name="password"
          label="비밀번호"
        />
      </Box>
    </>
  );
};

export default SignIn;
