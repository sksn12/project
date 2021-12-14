import React from "react";
import styles from "../itemDelete/itemDelete.module.css";
const ItemDelete = ({ ItmeDelete, id }) => {
  const onDelete = () => {
    ItmeDelete(id);
  };
  return (
    <button onClick={onDelete} className={styles.Delete}>
      X
    </button>
  );
};

export default ItemDelete;
