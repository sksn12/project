import React from "react";
import stlyes from "../Text/text.module.css";
// arr 데이터가 다르게 나오는 이유
const Text = ({ path, data }) => {
  function start(e) {
    let arr = path.centroid(e);
    if (e.properties.name === "경기도") {
      arr[1] += 50;
    } else if (
      e.properties.name === "충청남도" ||
      e.properties.name === "세종특별자치시" ||
      e.properties.name === "대전광역시"
    ) {
      arr[0] -= 50;
    }
    return arr;
  }

  return (
    <>
      {data.map((areaName) => {
        let arr = start(areaName);
        const style = { transform: `translate(${arr[0]}px,${arr[1]}px)` };
        return (
          <text
            style={style}
            className={stlyes.text}
            key={areaName.properties.name_eng}
          >
            {areaName.properties.name}
          </text>
        );
      })}
    </>
  );
};

export default Text;
