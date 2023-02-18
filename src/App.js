import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './styles/GlobalStyle';
import Home from './pages/Home';
import Question from './pages/Question';

import LoginForComment from './pages/LoginForComment';
import SignIn from './pages/SignIn';
// import ForEnterComment from './pages/ForEnterComment';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/question" element={<Question />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route
          path="/loginForComment"
          element={<LoginForComment user={'홍길동'} />}
        ></Route>
        <Route
          path="/forEnterComment"
          element={<ForEnterComment user={'홍길동'} />}
        ></Route>
      </Routes>
    </>
  );
};

export default App;
