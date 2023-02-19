import React from "react";
import styles from "./Question.module.css";

export default function Question({ value }) {
  return <div className={styles.question}>{value}</div>;
}
