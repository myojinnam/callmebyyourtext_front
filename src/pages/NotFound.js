import React from "react";
import { Img, SubTitle, Wrapper } from "../components/Styled";
import Title from "../components/Title/Title";
import Logo from "../assets/images/loadingLogo.png";

const NotFound = () => {
  return (
    <>
      <Wrapper>
        <Img src={Logo} alt="error" />
        <Title />
        <SubTitle>
          존재하지 않는 페이지입니다.
          <br />
          다시 시도해주세요.
        </SubTitle>
      </Wrapper>
    </>
  );
};

export default NotFound;
