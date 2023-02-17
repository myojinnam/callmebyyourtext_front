import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const loading = () => {
    setTimeout(() => {
      navigate('/question');
    }, 5000);
  };

  useEffect(() => {
    loading();
    return () => {
      clearTimeout(loading);
    };
  }, []);

  return <>Call me by your TEXT</>;
};

export default Home;
