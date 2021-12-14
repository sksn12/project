import React from "react";
import styles from "../imageItem/imageItem.module.css";
import ItemDelete from "../itemDelete/itemDelete";

const ImageItem = ({ file, ItmeDelete, setChangeBackgourd }) => {
  const onClick = (event) => {
    setChangeBackgourd(event.target.src);
  };
  return (
    <div className={styles.container}>
      {Object.keys(file).map((id) => {
        return (
          <div className={styles.list}>
            <img
              className={styles.img}
              src={file[id].fileURL}
              onClick={onClick}
            />
            <p>{file[id].fileName}</p>
            <ItemDelete id={id} ItmeDelete={ItmeDelete} />
          </div>
        );
      })}
    </div>
  );
};

export default ImageItem;
