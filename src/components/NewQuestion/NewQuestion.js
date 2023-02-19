import React, { Component } from "react";
import styles from "./newQuestion.module.css";
import Menu from "../../assets/images/menu.png";
import Notification from "../../assets/images/notification.png";
import InputImage from "../../assets/images/titleLogo.png";
import Background1 from "../../assets/images/newQuestion_img1.png";
import Background2 from "../../assets/images/newQuestion_img2.png";

class newQuestion extends Component {
  render() {
    /* 임시로 해둠 */
    const username = "홍길동";
    const point = 500;

    return (
      <div className={styles.main}>
        <div className={styles.top}>
          <div className={styles.topBtn}>
            <img className={styles.menuImg} src={Menu} alt="error" />
            <img className={styles.notiImg} src={Notification} alt="error" />
          </div>
          <text className={styles.userName}>
            <img className={styles.usernameImg} src={InputImage} alt="error" />
            {username}
          </text>
          <text className={styles.pointFont}>포인트 : {point}</text>
        </div>
        <br />
        <div className={styles.createQuestion}>
          <input
            className={styles.addQuestion}
            placeholder="새로운 질문을 입력해주세요."
          />
          <button className={styles.addBtn}>확인</button>
          <img className={styles.img1} src={Background1} alt="error" />
          <img className={styles.img2} src={Background2} alt="error" />
        </div>
      </div>
    );
  }
}
export default newQuestion;
