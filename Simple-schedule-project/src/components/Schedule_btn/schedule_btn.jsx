import React from "react";
import styles from "../Schedule_btn/schedule_btn.module.css";
const ScheduleBtn = ({ setScheduleVis, ScheduleVis }) => {
  const onClick = () => {
    if (ScheduleVis) {
      setScheduleVis(false);
    } else {
      setScheduleVis(true);
    }
  };
  return (
    <button className={styles.ScheduleBtn} onClick={onClick}>
      Schedule
    </button>
  );
};

export default ScheduleBtn;
