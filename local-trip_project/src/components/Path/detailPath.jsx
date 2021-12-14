import React, { useEffect } from "react";
import * as d3 from "d3";

const DetailPath = ({ data, path, detailRender, setOtherPostWrite }) => {
  const Ref = React.useRef();

  useEffect(() => {
    d3.select(Ref.current)
      .selectAll("path")
      .data(data)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("class", function (d) {
        return `${d.properties.SIG_KOR_NM}`;
      });
  });

  const onClick = (e) => {
    // console.log(e.target.className.baseVal);
    //선택지역 한국네임 이것으로 서버에 통신해서 해당 지역의 데이터가 있는지 확인하여 있으면 데이터 받아오기!
    setOtherPostWrite(e.target.className.baseVal);
  };
  return <g ref={Ref} onClick={onClick}></g>;
};

export default DetailPath;
