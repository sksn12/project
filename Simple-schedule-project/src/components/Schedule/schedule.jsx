import React from "react";
import styles from "../Schedule/schedule.module.css";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

const Schedule = ({ setNoteVis }) => {
  const renderEeventContent = (e) => {
    const date = String(e.date); //Thu Jun 10 2021 00:00:00 GMT+0900 (대한민국 표준시)
    const day = date.split(" ").slice(2, 3);
    const month = date.split(" ").slice(1, 2);
    setNoteVis({
      state: true,
      day: day,
      month: month,
    });
  };

  return (
    <div className={styles.container}>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        dateClick={renderEeventContent}
      />
    </div>
  );
};

export default Schedule;
