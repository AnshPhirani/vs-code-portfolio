import React from "react";
import { Link, useLocation } from "react-router-dom";
import FilesIcon from "../../assets/icons/FilesIcon";
import GithubIcon from "../../assets/icons/GithubIcon";
import CodeIcon from "../../assets/icons/CodeIcon";
import PencilIcon from "../../assets/icons/PencilIcon";
import MailIcon from "../../assets/icons/MailIcon";
import AccountIcon from "../../assets/icons/AccountIcon";
import SettingsIcon from "../../assets/icons/SettingsIcon";
import styles from "./Sidebar.module.css";

const sidebarTopItems = [
  {
    Icon: FilesIcon,
    path: "/",
  },
  {
    Icon: GithubIcon,
    path: "/github",
  },
  {
    Icon: CodeIcon,
    path: "/projects",
  },
  {
    Icon: PencilIcon,
    path: "/education",
  },
  {
    Icon: MailIcon,
    path: "/contact",
  },
];

const sidebarBottomItems = [
  {
    Icon: AccountIcon,
    path: "/about",
  },
  {
    Icon: SettingsIcon,
    path: "/settings",
  },
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <aside className={styles.sidebar}>
      <div className={styles.sidebar__top}>
        {sidebarTopItems.map(({ Icon, path }) => (
          <Link to={path} key={path}>
            <div
              className={`${styles.icon__container} ${
                location.pathname === path && styles.active
              }`}
            >
              <Icon
                fill={
                  location.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />{" "}
            </div>
          </Link>
        ))}
      </div>
      <div className={styles.sidebar__bottom}>
        {sidebarBottomItems.map(({ Icon, path }) => (
          <Link to={path} key={path}>
            <div
              className={`${styles.icon__container} ${
                location.pathname === path && styles.active
              }`}
            >
              <Icon
                fill={
                  location.pathname === path
                    ? "rgb(225, 228, 232)"
                    : "rgb(106, 115, 125)"
                }
                className={styles.icon}
              />{" "}
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
};

export default Sidebar;
