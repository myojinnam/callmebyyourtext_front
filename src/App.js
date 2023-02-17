import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import Home from './pages/Home';
import Question from './pages/Question';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/question:id" element={<Question />}></Route>
      </Routes>
    </>
  );
};

export default App;
