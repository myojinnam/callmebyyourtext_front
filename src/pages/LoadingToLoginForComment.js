import React, { useEffect } from "react";
import Logo from "../assets/images/loadingLogo.png";
import styled from "styled-components";
import { primaryColor, secondaryColor } from "../styles/GlobalStyle";
import Title from "./../components/Title/Title";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.section`
  text-align: center;
`;
const Img = styled.img`
  width: auto;
  margin: 0 0 15rem 0;
`;

const SubTitle = styled.p`
  font-family: "Noto Sans KR Bold";
  font-size: 0.8rem;
  font-weight: 900;
  color: ${secondaryColor};
`;

const Bracket = styled.span`
  visibility: hidden;
`;

export default function LoadingToLoginForComment() {
  const navigate = useNavigate();
  const loading = () => {
    setTimeout(() => {
      navigate("/loginForComment");
    }, 1000);
  };

  useEffect(() => {
    loading();
    return () => {
      clearTimeout(loading);
    };
  }, []);
  return (
    <>
      <Wrapper>
        <Img src={Logo} alt="error" />
        <Title />
        <SubTitle>
          나의 (<Bracket>빈칸</Bracket>), 당신의 ____
        </SubTitle>
      </Wrapper>
    </>
  );
}
