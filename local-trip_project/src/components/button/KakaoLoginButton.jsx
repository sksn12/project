import React from "react";
import styles from "../button/button.module.css";

const KakaoLoginButton = ({ setLogin, Login, auth }) => {
  const KakaoLogin = () => {
    auth.logIn().then((res) => {
      auth.getBearer(res).then((Bearer) => {
        // 관리자 Bearer.data.role.ROLE_ADMIN
        if (Bearer.data.role === "ROLE_ADMIN") {
          localStorage.setItem("admin", true);
        }
        setLogin({ userId: Bearer.headers.accesstoken });
        localStorage.setItem("refreshtoken", Bearer.headers.refreshtoken);
      });
    });
  };
  const KakaoLogout = async () => {
    // await auth.logOut();
    await auth.logOutPost(Login);
    localStorage.removeItem("refreshtoken");
    localStorage.removeItem("admin");
    setLogin({});
  };

  return (
    <>
      {Login.userId ? (
        <button className={styles.loginButton} onClick={KakaoLogout}>
          logOut
        </button>
      ) : (
        <button className={styles.loginButton} onClick={KakaoLogin}>
          login
        </button>
      )}
    </>
  );
};

export default KakaoLoginButton;
