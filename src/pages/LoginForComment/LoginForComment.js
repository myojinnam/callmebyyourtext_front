import React, { useEffect, useState } from 'react';
import Loading from '../../components/Loading/Loading';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import styles from './LoginForComment.module.css';
import InputId from '../../assets/images/inputId.png';
import InputPw from '../../assets/images/inputPw.png';

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
      <main className={styles.main}>
        <form className={styles.form}>
          <div className={styles.inputWrap}>
            <label htmlFor="input_id">
              <img src={InputId} alt="" />
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
          <div className={styles.inputWrap}>
            <label htmlFor="input_pw">
              <img src={InputPw} alt="" />
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

          <div className={styles.buttonWrap}>
            <Button
              value={'로그인'}
              width={'180px'}
              fontSize={'1.2rem'}
              onClick={handleGoToLogin}
            />
          </div>
        </form>
      </main>
    </>
  );
}
