import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import styled from 'styled-components';
import styles from './LoginForComment.module.css';

const Main = styled.span`
  width: 100%;
  min-height: 80%;
`;

const Form = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export default function LoginForComment({ user }) {
  //loading
  const [ready, setReady] = useState(false);
  //login
  const [inputId, setInputId] = useState('');
  const [inputPw, setInputPw] = useState('');

  //Click Evnet Handler
  const handleGoToLogin = (e) => {
    e.preventDefault();
  };
  const handleGotoNext = (e) => {
    e.preventDefault();
    console.log('gotonext');
  };

  //Input Change Evnet Handler
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
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
      <Main>
        <Form>
          <div className={styles.inputWrap}>
            <label htmlFor="input_id">
              <img src="" alt="" />
            </label>
            <input
              className={styles.input}
              type={'text'}
              name="input_id"
              value={inputId}
              onChange={handleInputId}
              placeholder="E-mail"
            />
          </div>
          <div>
            <label htmlFor="input_pw">
              <img src="" alt="" />
            </label>
            <input
              className={styles.input}
              type={'password'}
              name="input_pw"
              value={inputPw}
              onChange={handleInputPw}
              placeholder="Password"
            />
          </div>

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
        </Form>
      </Main>
    </>
  );
}
