import React, { Component } from 'react';
import styles from './newQuestion.module.css';

class newQuestion extends Component {
    render() {
        const username = '홍길동';
        const point = 500;

        return (
            <div className={styles.main}>
                <div className={styles.top}>
                    <div className={styles.topBtn}>
                        <img 
                            className={styles.menuImg}
                            src={require('../assets/newQuestion_menu.png')}
                            alt='menu' />
                        <img 
                            className={styles.notiImg}
                            src={require('../assets/newQuestion_notification.png')}
                            alt='notification' />
                    </div>
                    <text className={styles.userName}> 
                        <img
                            className={styles.usernameImg}
                            src={require('../assets/newQuestion_img3.png')}
                            alt='img' />
                        {username} 
                    </text> 
                    <text className={styles.pointFont}>포인트 : {point}</text>
                </div>
                <br/>
                <div className={styles.createQuestion}>
                    <input 
                        className={styles.addQuestion}
                        placeholder="새로운 질문을 입력해주세요." />
                    <button 
                        className={styles.addBtn}>확인</button>
                    <img
                        className={styles.img1}
                        src={require('../assets/newQuestion_img2.png')}
                        alt='img1'/>
                    <img
                        className={styles.img2}
                        src={require('../assets/newQuestion_img1.png')}
                        alt='img2'/>
                </div>
            </div>
        )
    }
}
export default newQuestion;