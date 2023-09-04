import React from "react";
import styles from "./Education.module.css";
import EducationCode from "../../components/education-code/EducationCode";

const graduationData = {
  school: "Chikara University, Rajpura",
  degree: "Bachelor of Technology",
  major: "Computer Science",
  gpa: "9.7/10",
  start: "Aug 2020",
  end: "May 2024",
};

const highSchoolData = {
  school: "Patel Public School, Rajpura",
  degree: "XII",
  major: "Science",
  percentage: "86",
  start: "Apr 2019",
  end: "Mar 2020",
};

const Education = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container__left}>
        <h3>Graduation</h3>
        <EducationCode jsonData={graduationData} />
      </div>
      <div className={styles.container__right}>
        <h3>High School</h3>
        <EducationCode jsonData={highSchoolData} />
      </div>
    </div>
  );
};

export default Education;
