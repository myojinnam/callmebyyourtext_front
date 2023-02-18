import React, { Component } from 'react';
import styles from '../styles/newQuestion.module.css';

class newQuestion extends Component {
    render() {
        // const { username };

        return (
            <div className={styles.main}>
                <div className={styles.top}>
                    <img 
                        className={styles.menuImg}
                        src={require('../assets/newQuestion_menu.png')}
                        alt='menu' />
                    <img 
                        className={styles.notiImg}
                        src={require('../assets/newQuestion_notification.png')}
                        alt='notification' />
                    <text className={styles.userName}> 
                        <img
                            className={styles.usernameImg}
                            src={require('../assets/newQuestion_img3.png')}
                            alt='img' />
                        홍길동 
                    </text> 
                </div>
                <div className={styles.createQuestion}>
                    <input className={styles.addQuestion}/>
                    <button className={styles.addBtn}>확인</button>
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