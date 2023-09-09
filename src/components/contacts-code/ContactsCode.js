import React from "react";
import styles from "./ContactsCode.module.css";

const socialsData = [
  {
    social: "website",
    link: "anshphirani.me",
    href: "https://anshphirani.me",
  },
  {
    social: "email",
    link: "anshphirani@gmail.com",
    href: "mailto:anshphirani@gmail.com",
  },
  {
    social: "github",
    link: "anshphirani",
    href: "https://github.com/anshphirani",
  },
  {
    social: "linkedin",
    link: "ansh-phirani",
    href: "https://www.linkedin.com/in/ansh-phirani/",
  },
  {
    social: "Leetcode",
    link: "anshphirani",
    href: "https://www.leetcode.com/anshphirani",
  },
  {
    social: "telegram",
    link: "anshphirani",
    href: "https://t.me/anshphirani",
  },
];

const ContactsCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {socialsData.map((socialItem, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{socialItem.social} :{" "}
          <a href={socialItem.href} target="_blank" rel="noreferrer">
            {socialItem.link}
          </a>
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactsCode;
