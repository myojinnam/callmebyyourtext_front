import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Title = styled.p`
  font-family: NotoSansKRBlack;
`;

const Home = () => {
  const navigate = useNavigate();
  const loading = () => {
    setTimeout(() => {
      navigate('/question');
    }, 500000);
  };

  useEffect(() => {
    loading();
    return () => {
      clearTimeout(loading);
    };
  }, []);

  return (
    <>
      <Title>Call me by your TEXT</Title>
    </>
  );
};

export default Home;
