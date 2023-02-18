import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import Home from './pages/Home';
import Question from './pages/Question';
import LoginForComment from './pages/LoginForComment';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/question" element={<Question />}></Route>
        {/* <Route path="/loginForComment" element={<LoginForComment />}></Route> */}
      </Routes>
    </>
  );
};

export default App;
