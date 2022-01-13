import React from "react";
import styles from "../GNB/Gnb.module.css";
import {
  faBars,
  faSearch,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";
import { faBell } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Img from "../../assets/img/img.jpg";

const Gnb = () => {
  return (
    <div className={styles.Header}>
      <div className={styles.MainBar}>
        <nav className={styles.MainBar_nav}>
          <div className={styles.MainBar_nav_top}>
            <div className={styles.MainBar_nav_top_logo}>
              <button className={styles.LogoBtn}>
                <FontAwesomeIcon icon={faBars} size="lg" />
              </button>
              <a href="#!" className={styles.Title}>
                wanted
              </a>
            </div>
          </div>

          <ul className={styles.Menu}>
            <li className={styles.Menu_li_home}>
              <a href="#!" className={styles.Menu_label}>
                홈
              </a>
            </li>
            <li className={styles.Menu_li}>
              <a href="#!" className={styles.Menu_label}>
                채용
              </a>
            </li>
            <li className={styles.Menu_li}>
              <a href="#!" className={styles.Menu_label}>
                이벤트
              </a>
            </li>
            <li className={`${styles.Menu_li} ${styles.Menu_li_hidden}`}>
              <a href="#!" className={styles.Menu_label}>
                직군별 연봉
              </a>
            </li>
            <li className={`${styles.Menu_li} ${styles.Menu_li_hidden}`}>
              <a href="#!" className={styles.Menu_label}>
                이력서
              </a>
            </li>
            <li className={`${styles.Menu_li} ${styles.Menu_li_hidden}`}>
              <a href="#!" className={styles.Menu_label}>
                커뮤니티
                <em className={styles.Menu_em}>New</em>
              </a>
            </li>
            <li className={`${styles.Menu_li} ${styles.Menu_li_hidden}`}>
              <a href="#!" className={styles.Menu_label}>
                프리랜서
              </a>
            </li>
            <li className={`${styles.Menu_li} ${styles.Menu_li_hidden}`}>
              <a href="#!" className={styles.Menu_label}>
                AI 합격예측
                <em className={styles.Menu_em}>Beta</em>
              </a>
            </li>
          </ul>

          <aside className={styles.Aside}>
            <ul className={styles.Aside_ul}>
              <li className={styles.Aside_li}>
                <button className={styles.Aside_btn}>
                  <FontAwesomeIcon icon={faSearch} size="lg" />
                </button>
              </li>
              <li className={styles.Aside_li}>
                <button className={styles.Aside_btn}>
                  <FontAwesomeIcon icon={faBell} size="lg" />
                  <em className={styles.Aside_em}>N</em>
                </button>
              </li>
              <li className={styles.Aside_li_Ellip}>
                <button className={styles.Aside_btn}>
                  <FontAwesomeIcon icon={faEllipsisH} size="lg" />
                </button>
              </li>
              <li className={styles.Aside_li_img}>
                <button className={styles.Aside_btn}>
                  <img src={Img} alt="img" className={styles.Aside_img} />
                  <em className={styles.Aside_em}>N</em>
                </button>
              </li>
              <li className={styles.Aside_left}>
                <div className={styles.Aside_line}></div>
                <button className={styles.Aside_left_btn}>기업 서비스</button>
              </li>
            </ul>
          </aside>
        </nav>
      </div>
    </div>
  );
};

export default Gnb;
