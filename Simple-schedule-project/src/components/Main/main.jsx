import React, { useEffect, useState } from "react";
import LogOut from "../Logout/logout";
import ScheduleBtn from "../Schedule_btn/schedule_btn";
import styles from "../Main/main.module.css";
import Schedule from "../Schedule/schedule";
import Note from "../Note/note";
import { useHistory } from "react-router-dom";
import BackgroundBtn from "../background/background_btn/background_btn";
import BackgroundPage from "../background/background_page/background_page";

const Main = ({
  AuthService,
  NoteRepository,
  ImageUploader,
  ImageRepository,
  setChangeBackgourd,
}) => {
  const historyState = useHistory().location.state;
  const [backgroundVis, setBackgroundVis] = useState(false);
  const [ScheduleVis, setScheduleVis] = useState(false);
  const [NoteVis, setNoteVis] = useState({
    state: false,
    day: null,
    month: null,
  });
  // history에 push해준 로그인한 유저의 id 값을 가지고 데이터베이스에 저장하기위해 사용
  const [userId, setUserId] = useState(historyState && historyState.id);
  const history = useHistory();

  useEffect(() => {
    if (!userId) {
      history.push("/");
    }
  }, [userId]);

  return (
    <section className={styles.container}>
      <section className={styles.btns}>
        <BackgroundBtn
          setBackgroundVis={setBackgroundVis}
          backgroundVis={backgroundVis}
        />
        <ScheduleBtn
          setScheduleVis={setScheduleVis}
          ScheduleVis={ScheduleVis}
        ></ScheduleBtn>
        <LogOut AuthService={AuthService} />
      </section>
      <section className={styles.Schedule}>
        {ScheduleVis ? <Schedule setNoteVis={setNoteVis} /> : <></>}
        {NoteVis.state && ScheduleVis ? (
          <Note
            setNoteVis={setNoteVis}
            NoteVis={NoteVis}
            NoteRepository={NoteRepository}
            userId={userId}
          />
        ) : (
          <></>
        )}
        {backgroundVis ? (
          <BackgroundPage
            setBackgroundVis={setBackgroundVis}
            ImageUploader={ImageUploader}
            ImageRepository={ImageRepository}
            userId={userId}
            setChangeBackgourd={setChangeBackgourd}
          />
        ) : (
          <></>
        )}
      </section>
    </section>
  );
};

export default Main;
