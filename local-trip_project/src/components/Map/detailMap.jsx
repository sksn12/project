import React from "react";
import * as d3 from "d3";
import DetailPath from "../Path/detailPath";
import Text2 from "../Text/text2";

const DetailMap = ({ Change, detailRender, setOtherPostWrite, Render }) => {
  const detailData = require("../../json/detail.json");
  let data = detailData.features;

  data = data.filter((e) => e.properties.name === Change);

  // bounds에 필요한 값이 geojson형태여서 새로운 배열인 data를 features에 저장하고 type형태도 새로운 객체에 추가해줌!!!
  const requireData = { type: "FeatureCollection", features: data };
  // console.log(data.map((e) => e.properties.SIG_KOR_NM));
  let projection = d3.geoMercator().scale(1).translate([0, 0]);

  // 페이지를 새로고침해야지 사이즈가 변경이 되지만 다른 디바이스에서 각각 접속하는 거니깐 괜찮을거같음!
  const width = window.screen.width;

  const height = window.screen.height - 200;

  const path = d3.geoPath().projection(projection);
  const bounds = path.bounds(requireData);

  const widthScale = (bounds[1][0] - bounds[0][0]) / width;
  const heightScale = (bounds[1][1] - bounds[0][1]) / height;
  const scale = 1 / Math.max(widthScale, heightScale);
  const xoffset = width / 2 - (scale * (bounds[1][0] + bounds[0][0])) / 2 + 10;
  const yoffset = height / 2 - (scale * (bounds[1][1] + bounds[0][1])) / 2 + 80;
  const offset = [xoffset, yoffset];

  projection.scale(scale).translate(offset);

  return (
    <>
      {/* 우선순위 : 동일한 태그순서면 뒤에나올수록 우선순위 up! */}
      <DetailPath
        path={path}
        data={data}
        detailRender={detailRender}
        setOtherPostWrite={setOtherPostWrite}
      />
      <Text2 path={path} data={data} />
    </>
  );
};

export default DetailMap;
