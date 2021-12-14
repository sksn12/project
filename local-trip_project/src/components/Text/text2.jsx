import React from "react";
import styles from "../Text/text.module.css";
const Text2 = ({ data, path }) => {
  function start(e) {
    let arr = path.centroid(e);
    return arr;
  }

  return (
    <>
      {data.map((areaName) => {
        let arr = start(areaName);
        const style = {
          transform: `translate(${arr[0] - 20}px,${arr[1] + 10}px)`,
        };
        return (
          <text
            style={style}
            className={styles.text}
            key={areaName.properties.SIG_KOR_NM}
          >
            {areaName.properties.SIG_KOR_NM}
          </text>
        );
      })}
    </>
  );
};

export default Text2;
