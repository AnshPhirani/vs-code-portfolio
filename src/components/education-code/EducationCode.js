import React from "react";
import styles from "./EducationCode.module.css";
const EducationCode = ({ jsonData }) => {
  return (
    <div className={styles.code}>
      <p className={styles.line}> &#123;</p>
      {Object.keys(jsonData).map((key) => {
        return (
          <p className={styles.line}>
            &nbsp;&nbsp;
            <span className={styles.key}>{key}</span>:{" "}
            <span className={styles.value}>&quot;{jsonData[key]}&quot;</span>,
          </p>
        );
      })}
      <p className={styles.line}> &#125; </p>
    </div>
  );
};

export default EducationCode;
