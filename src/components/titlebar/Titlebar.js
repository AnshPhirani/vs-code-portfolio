import React from "react";
import VsCodeIcon from "../../assets/icons/VsCodeIcon";
import styles from "./Titlebar.module.css";

const Titlebar = () => {
  return (
    <header className={styles.titlebar}>
      <VsCodeIcon
        alt="vs-icon"
        heigth="15"
        width="15"
        className={styles.icon}
      />
      <div className={styles.items}>
        <p>File</p>
        <p>Edit</p>
        <p>View</p>
        <p>Go</p>
        <p>Run</p>
        <p>Terminal</p>
        <p>Help</p>
      </div>

      <p className={styles.title}>Ansh Phirani - Visual Studio Code</p>

      <div className={styles.windowButtons}>
        <span className={styles.minimize}></span>
        <span className={styles.maximize}></span>
        <span className={styles.close}></span>
      </div>
    </header>
  );
};

export default Titlebar;
