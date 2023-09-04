import React from "react";
import styles from "./Settings.module.css";
import ThemeCard from "../../components/theme-card/ThemeCard";

import githubDarkIcon from "../../assets/theme-icons/github-dark.png";
import draculaIcon from "../../assets/theme-icons/dracula.png";
import ayuDarkIcon from "../../assets/theme-icons/ayu.png";
import ayuMirageIcon from "../../assets/theme-icons/ayu.png";
import nordIcon from "../../assets/theme-icons/nord.png";
import nightOwlIcon from "../../assets/theme-icons/night-owl.png";

const ThemesData = [
  {
    id: 1,
    name: "Github Dark",
    theme: "github-dark",
    icon: githubDarkIcon,
    publisher: "Github",
  },
  {
    id: 2,
    name: "Dracula",
    theme: "dracula",
    icon: draculaIcon,
    publisher: "Dracula Theme",
  },
  {
    id: 3,
    name: "Ayu Dark",
    theme: "ayu-dark",
    icon: ayuDarkIcon,
    publisher: "teabyii",
  },
  {
    id: 4,
    name: "Ayu Mirage",
    theme: "ayu-mirage",
    icon: ayuMirageIcon,
    publisher: "teabyii",
  },
  {
    id: 5,
    name: "Nord",
    theme: "nord",
    icon: nordIcon,
    publisher: "arcticicestudio",
  },
  {
    id: 6,
    name: "Night Owl",
    theme: "night-owl",
    icon: nightOwlIcon,
    publisher: "sarah.drasner",
  },
];

const Settings = () => {
  return (
    <>
      <h2>Manage Themes</h2>
      <div className={styles.container}>
        {ThemesData.map((theme) => (
          <ThemeCard theme={theme} key={theme.id} />
        ))}
      </div>
    </>
  );
};

export default Settings;
