import React from "react";
import styles from "../sideBox/sideBox.module.css";
import Icon from "../../../images/icon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiceD20,
  faAddressCard,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons";

const SideBox = ({ admin_service, Login, setMemberInfo, setCartegory }) => {
  const onMember = async () => {
    const result = await admin_service.MemeberInquire(Login, 0);
    setCartegory(false);
    setMemberInfo(result);
  };
  const onCategory = async () => {
    const result = await admin_service.CategroyInquire(Login);
    setMemberInfo(false);
    setCartegory(result);
  };

  return (
    <div className={styles.SideBox}>
      <div className={styles.Header}>
        <div className={styles.Header_container}>
          <img src={Icon} alt="아이콘" className={styles.img} />
          <p className={styles.title}>Admin Page</p>
          <FontAwesomeIcon icon={faDiceD20} size="2x" color="white" />
        </div>
      </div>
      <div className={styles.middle}>
        <div className={styles.member} onClick={onMember}>
          <FontAwesomeIcon icon={faAddressCard} size="2x" color="white" />
          <p className={styles.nameTag}>Member</p>
        </div>
        {/* <div className={styles.bell}>
          <FontAwesomeIcon icon={faBell} size="2x" color="white" />
          <p className={styles.nameTag}>notification</p>
        </div> */}
        <div className={styles.category} onClick={onCategory}>
          <FontAwesomeIcon icon={faFolderOpen} size="2x" color="white" />
          <p className={styles.nameTag}>category</p>
        </div>
      </div>
    </div>
  );
};

export default SideBox;
