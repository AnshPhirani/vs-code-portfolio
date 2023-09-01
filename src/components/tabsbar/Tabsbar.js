import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Tabsbar.module.css";
import ReactjsIcon from "../../assets/icons/ReactjsIcon";
import HtmlIcon from "../../assets/icons/HtmlIcon";
import CssIcon from "../../assets/icons/CssIcon";
import JsIcon from "../../assets/icons/JsIcon";
import JsonIcon from "../../assets/icons/JsonIcon";
import MarkdownIcon from "../../assets/icons/MarkdownIcon";

const tabsBarItems = [
  {
    name: "home.jsx",
    path: "/",
    Icon: ReactjsIcon,
  },
  {
    name: "about.html",
    path: "/about",
    Icon: HtmlIcon,
  },
  {
    name: "contact.css",
    path: "/contact",
    Icon: CssIcon,
  },
  {
    name: "projects.js",
    path: "/projects",
    Icon: JsIcon,
  },
  {
    name: "education.json",
    path: "/education",
    Icon: JsonIcon,
  },
  {
    name: "github.md",
    path: "/github",
    Icon: MarkdownIcon,
  },
];

const Tabsbar = () => {
  const location = useLocation();

  return (
    <div className={styles.tabs}>
      {tabsBarItems.map(({ name, path, Icon }) => (
        <Link to={path} key={path}>
          <div
            className={`${styles.tab} ${
              location.pathname === path && styles.active
            }`}
          >
            <Icon className={styles.icon} />
            <p className={styles.name}>{name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Tabsbar;
