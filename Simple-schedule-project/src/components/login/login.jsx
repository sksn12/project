import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../login/login.module.css";

const Login = ({ AuthService }) => {
  const history = useHistory();
  const goToStudy = (userId) => {
    history.push({
      pathname: "/study",
      state: { id: userId },
    });
  };
  const onClick = () => {
    AuthService.login("Google").then((data) => goToStudy(data.user.uid));
  };
  return (
    <section className={styles.login}>
      <header className={styles.header}>
        <p className={styles.title}>Study Project</p>
      </header>
      <div className={styles.middle}>
        <button onClick={onClick} className={styles.button}>
          Goolge
        </button>
      </div>
      <footer className={styles.footer}></footer>
    </section>
  );
};

export default Login;
