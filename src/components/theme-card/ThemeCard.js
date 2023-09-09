import React from "react";
import styles from "./ThemeCard.module.css";
const ThemeCard = ({ theme }) => {
  const changeTheme = () => {
    const root = document.documentElement;
    root.setAttribute("data-theme", theme.theme);
    localStorage.setItem("theme", theme.theme);
  };

  console.log(theme.icon);

  return (
    <div className={styles.card} key={theme.id}>
      <img src={theme.icon} alt={theme.name} />
      <div className={styles.info}>
        <h3>{theme.name}</h3>
        <p>{theme.publisher}</p>
      </div>
      <button onClick={changeTheme}>Apply</button>
    </div>
  );
};

export default ThemeCard;
