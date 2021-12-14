import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import styles from "../adminPage/admin.module.css";
import AddMessage from "./message/addMessage";
import DeleteMessage from "./message/deleteMessage";
import Message from "./message/message";
import SideBox from "./sideBox/sideBox";
import Cartegorytable from "./table/cartegorytable";
import UserTable from "./table/usertable";

const Admin = ({ admin_service, Login }) => {
  const [memberInfo, setMemberInfo] = useState(false);
  const [cartegory, setCartegory] = useState(false);
  const [page, setPage] = useState(0);
  const [message, setMessage] = useState(false);
  const [cartegoryAddMessage, setCartegoryAddMessage] = useState(false);
  const [cartegoryDeleteMessage, setCartegoryDeleteMessage] = useState(false);

  //로그인이 처음에 빈값으로 들어와 에러가 한번 나고 useEffect로 Login값이 변경되면 그때 제대로된 data가 들어옴
  useEffect(() => {
    const firstData = async () => {
      const result = await admin_service.MemeberInquire(Login, page);
      setMemberInfo(result);
    };
    firstData();
  }, [Login, admin_service, page]);

  return (
    <div className={styles.totalPage}>
      {message ? (
        <Message
          setMessage={setMessage}
          message={message}
          admin_service={admin_service}
          Login={Login}
        />
      ) : (
        <></>
      )}
      {cartegoryAddMessage ? (
        <AddMessage
          setCartegoryAddMessage={setCartegoryAddMessage}
          admin_service={admin_service}
          Login={Login}
          setCartegory={setCartegory}
        />
      ) : (
        <></>
      )}
      {cartegoryDeleteMessage ? (
        <DeleteMessage
          cartegoryDeleteMessage={cartegoryDeleteMessage}
          admin_service={admin_service}
          Login={Login}
          setCartegory={setCartegory}
          setCartegoryDeleteMessage={setCartegoryDeleteMessage}
        />
      ) : (
        <></>
      )}
      <div className={styles.sideDiv}>
        <SideBox
          admin_service={admin_service}
          Login={Login}
          memberInfo={memberInfo}
          setMemberInfo={setMemberInfo}
          setCartegory={setCartegory}
        />
      </div>
      <div className={styles.mainDiv}>
        {(function () {
          if (memberInfo) {
            return (
              <UserTable
                admin_service={admin_service}
                Login={Login}
                memberInfo={memberInfo}
                setMemberInfo={setMemberInfo}
                setPage={setPage}
                page={page}
                setMessage={setMessage}
                message={message}
              />
            );
          } else if (cartegory) {
            return (
              <Cartegorytable
                cartegory={cartegory}
                setPage={setPage}
                page={page}
                setCartegoryAddMessage={setCartegoryAddMessage}
                setCartegoryDeleteMessage={setCartegoryDeleteMessage}
              />
            );
          } else {
            return <></>;
          }
        })()}
      </div>
    </div>
  );
};

export default Admin;
