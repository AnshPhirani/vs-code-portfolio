import React from "react";
import ErrorIcon from "../../assets/icons/ErrorIcon";
import WarningIcon from "../../assets/icons/WarningIcon";
import BellIcon from "../../assets/icons/BellIcon";
import NetworkIcon from "../../assets/icons/NetworkIcon";
import SourceControlIcon from "../../assets/icons/SourceControlIcon";
import ReactjsIcon from "../../assets/icons/ReactjsIcon";
import styles from "./Bottombar.module.css";

const Bottombar = () => {
  return (
    <footer className={styles.bottombar}>
      <div className={styles.bottombar__container}>
        <a href="noreferrer" className={styles.bottombar__item}>
          <SourceControlIcon />
          <p>master*</p>
        </a>
        <div className={styles.bottombar__item}>
          <ErrorIcon />
          <p>0</p>
          <WarningIcon />
          <p>0</p>
        </div>
      </div>

      <div className={styles.bottombar__container}>
        <a href="noreferrer" className={styles.bottombar__item}>
          <ReactjsIcon />
          <p>Powered by React.js</p>
        </a>
        <div className={styles.bottombar__item}>
          <NetworkIcon />
          <p>Go Live</p>
        </div>
        <div className={styles.bottombar__item}>
          <BellIcon />
        </div>
      </div>
    </footer>
  );
};

export default Bottombar;
