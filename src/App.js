import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./styles/GlobalStyle";
import Home from "./pages/Home";
import Question from "./pages/Question";
import SignIn from "./pages/SignIn";
import ForEnterComment from "./pages/ForEnterComment";
import LoginForComment from "./pages/LoginForComment/LoginForComment";
import NewQuestion from "./pages/NewQuestion";
import PointCheck from "./pages/PointCheck";
import SignUp from "./pages/SignUp";
import { AuthContext } from "./context/AuthContext";
import MyPage from "./pages/MyPage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("auth")) === true) {
      setIsLoggedIn(true);
    }
    console.log(isLoggedIn);
  }, [isLoggedIn]);
  return (
    <>
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
        <GlobalStyle />
        <Routes>
          <Route path="/newquestion" element={<Home />}></Route>
          <Route path="/question" element={<Question />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route
            path="/loginForComment"
            element={<LoginForComment user={"홍길동"} />}
          ></Route>
          <Route
            path="/forEnterComment"
            element={<ForEnterComment user={"홍길동"} />}
          ></Route>
          <Route path="/" element={<NewQuestion />}></Route>
          <Route path="/pointcheck" element={<PointCheck />}></Route>
        </Routes>
      </AuthContext.Provider>
    </>
  );
};

export default App;
