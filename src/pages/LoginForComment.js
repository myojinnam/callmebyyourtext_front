import React, { useEffect, useState } from 'react';
import Loading from '../components/Loading/Loading';
import Header from './../components/Header/Header';
import Button from './../components/Button/Button';
import styled from 'styled-components';

export default function LoginForComment({ user }) {
  const [ready, setReady] = useState(false);
  const handleGoToLogin = (e) => {
    e.preventDefault();
    console.log('loginpage');
  };
  const handleGotoNext = (e) => {
    e.preventDefault();
    console.log('gotonext');
  };
  useEffect(() => {
    //3초 뒤에 실행
    setTimeout(() => {
      setReady(true);
    }, 3000);
  }, []);
  return !ready ? (
    <Loading />
  ) : (
    <>
      <Header user={user} />
      <main>
        <form>
          <input type={'text'} />
          <input type={'password'} />
          <Button
            value={'로그인하기'}
            width={'100px'}
            onClick={handleGoToLogin}
          />
          <Button
            value={'그냥접속하기'}
            width={'100px'}
            onClick={handleGotoNext}
          />
        </form>
      </main>
    </>
  );
}
