import React from "react";
import styles from "./Explorer.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import ChevronRight from "../../assets/icons/ChevronRight";
import JsIcon from "../../assets/icons/JsIcon";
import ReactjsIcon from "../../assets/icons/ReactjsIcon";
import HtmlIcon from "../../assets/icons/HtmlIcon";
import CssIcon from "../../assets/icons/CssIcon";
import JsonIcon from "../../assets/icons/JsonIcon";
import MarkdownIcon from "../../assets/icons/MarkdownIcon";

const explorerItems = [
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

const Explorer = () => {
  const [isFolderOpen, setIsFolderOpen] = useState(true);

  return (
    <div className={styles.explorer}>
      <p className={styles.title}>Explorer</p>
      <div className={styles.folder}>
        <div
          className={styles.folder__name}
          onClick={() => setIsFolderOpen(!isFolderOpen)}
        >
          <ChevronRight
            className={styles.chevron}
            style={isFolderOpen ? { transform: "rotate(90deg)" } : {}}
          />
          <p>Portfolio</p>
        </div>
        <div
          className={styles.files}
          style={{ visibility: isFolderOpen ? "visible" : "hidden" }}
        >
          {explorerItems.map(({ name, path, Icon }) => (
            <Link to={path} key={name} style={{ textDecoration: "none" }}>
              <div className={styles.file}>
                <Icon height={18} width={18} />
                <p>{name}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Explorer;
