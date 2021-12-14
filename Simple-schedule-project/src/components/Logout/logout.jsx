import React from "react";
import { useHistory } from "react-router-dom";
import styles from "../Logout/logout.module.css";
const LogOut = ({ AuthService }) => {
  const history = useHistory();
  const Logout = () => {
    AuthService.logOut();
    history.push("/");
  };
  return (
    <button className={styles.LogOut} onClick={Logout}>
      LogOut
    </button>
  );
};

export default LogOut;
