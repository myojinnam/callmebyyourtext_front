import React from 'react';
import styles from './Loading.module.css';

export default function Loading() {
  return (
    <div className={styles.loadingBody}>
      <img
        src="images/loadingLogo.png"
        className={styles.loadingLogo}
        alt="error"
      />
      <div className={styles.loadingTitleWrap}>
        <p className={styles.loadingTitle}>
          Call me by your <b>TEXT</b>
        </p>
        <p className={styles.loadingSubTitle}>
          나에 대해 다른 사람들이 어떻게 생각하는지 궁금하지 않으신가요?
        </p>
      </div>
    </div>
  );
}
