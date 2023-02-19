import React from "react";
import styled from "styled-components";
import { primaryColor } from "../../styles/GlobalStyle";

const Button = styled.button`
  width: 200px;
  height: 35px;
  border: 1px solid ${primaryColor};
  color: ${primaryColor};
  background-color: white;
  border-radius: 5px;
  transition: 0.3s;
  &:hover {
    color: white;
    background-color: ${primaryColor};
    cursor: pointer;
  }
`;

const PrimaryBtn = ({ btnName }) => {
  return (
    <>
      <Button>{btnName}</Button>
    </>
  );
};

export default PrimaryBtn;
