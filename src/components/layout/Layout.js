import React, { useEffect } from "react";
import Titlebar from "../titlebar/Titlebar";
import Sidebar from "../sidebar/Sidebar";
import Explorer from "../explorer/Explorer";
import Bottombar from "../bottombar/Bottombar";

import styles from "./Layout.module.css";
import Tabsbar from "../tabsbar/Tabsbar";

import { Routes, Route, useLocation } from "react-router-dom";
import Home from "../../pages/home/Home";
import About from "../../pages/about/About";
import Contact from "../../pages/contact/Contact";
import Projects from "../../pages/projects/Projects";
import Education from "../../pages/education/Education";
import Github from "../../pages/github/Github";
import Settings from "../../pages/settings/Settings";

const MyRoutes = () => (
  <Routes>
    <Route exact path="/" element={<Home />} />
    <Route exact path="/about" element={<About />} />
    <Route exact path="/contact" element={<Contact />} />
    <Route exact path="/projects" element={<Projects />} />
    <Route exact path="/education" element={<Education />} />
    <Route exact path="/github" element={<Github />} />
    <Route exact path="/settings" element={<Settings />} />
    {/* <Route path="*" element={<NotFound />} /> */}
  </Routes>
);

const Layout = () => {
  const location = useLocation();
  useEffect(() => {
    const path = location.pathname.replace("/", "");
    if (path === "") {
      document.title = "Ansh Phirani | Home";
    } else {
      document.title = `Ansh Phirani | ${
        path.charAt(0).toUpperCase() + path.slice(1)
      }`;
    }

    const main = document.getElementById("main__editor");
    if (main) {
      main.scrollTop = 0;
    }
  }, [location.pathname]);

  return (
    <>
      <Titlebar />
      <div className={styles.main}>
        <Sidebar />
        <Explorer />
        <div style={{ width: "100%" }}>
          <Tabsbar />
          <main id="main__editor" className={styles.content}>
            <MyRoutes />
          </main>
        </div>
      </div>
      <Bottombar />
    </>
  );
};

export default Layout;
