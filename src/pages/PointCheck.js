import React, { Component } from "react";
import styles from "../styles/pointCheck.module.css";
import Back from "../assets/images/back.png";
import Menu from "../assets/images/menu.png";
import Notification from "../assets/images/notification.png";

const PointCheck = () => {
    const username = "홍길동";
    const point = 500;
    
    return (
    <div className={styles.main}>
      <img src={Back} alt="error"/>
      <p className={styles.topBtn}>
        <img src={Menu} alt="error"/>
        <img src={Notification} alt="error"/>
      </p>
      <p className={styles.pointBox}> 
        <text className={styles.pointFont}
          style={{fontSize: '15px',
            float: 'right'}}>포인트 : {point}</text>
        <text className={styles.pointFont}
          style={{fontSize: '25px'}}>{username}</text>
      </p>
      <p className={styles.notiWordBundle}>
        <text className={styles.notiWord}>• 포인트는 댓글 열람 시 사용 가능합니다.</text>
        <text className={styles.notiWord}>• 포인트는 다른 유저 게시물에 댓글을 달아 얻을 수 있습니다.</text>
      </p>
    </div>
    );
}

export default pointCheck;
