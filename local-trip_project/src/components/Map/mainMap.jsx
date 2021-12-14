import React, { memo } from "react";
import * as d3 from "d3";
import Text from "../Text/text";
import Path from "../Path/path";

const MainMap = memo(({ Change, Render }) => {
  const koreaGeoMap = require("../../json/data.json");
  const data = koreaGeoMap.features;

  const projection = d3.geoMercator().scale(1).translate([0, 0]);
  const path = d3.geoPath().projection(projection);
  const bounds = path.bounds(koreaGeoMap);

  const width = window.screen.width;
  const height = window.screen.height - 100; //제주도가 안보여서 조금 올림

  const widthScale = (bounds[1][0] - bounds[0][0]) / width;
  const heightScale = (bounds[1][1] - bounds[0][1]) / height;
  const scale = 1 / Math.max(widthScale, heightScale);
  const xoffset = width / 2 - (scale * (bounds[1][0] + bounds[0][0])) / 2 + 10;
  const yoffset = height / 2 - (scale * (bounds[1][1] + bounds[0][1])) / 2 + 80;
  const offset = [xoffset, yoffset];

  projection.scale(scale).translate(offset);
  return (
    <>
      <Path data={data} path={path} Render={Render} Change={Change}></Path>
      <Text path={path} data={data} />
    </>
  );
});

export default MainMap;
