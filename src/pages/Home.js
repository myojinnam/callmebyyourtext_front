import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { primaryColor, secondaryColor } from "../styles/GlobalStyle";
import Logo from "../assets/images/loadingLogo.png";
import Title from "../components/Title/Title";

const Wrapper = styled.section`
  text-align: center;
`;

const Img = styled.img`
  width: auto;
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

const Home = () => {
  const navigate = useNavigate();
  const loading = () => {
    setTimeout(() => {
      navigate("/question");
    }, 3000);
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
};

export default Home;
