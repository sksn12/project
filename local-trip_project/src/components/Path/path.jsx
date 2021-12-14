import React, { useEffect } from "react";
import * as d3 from "d3";

const Path = ({ data, path, Render }) => {
  const Ref = React.useRef();
  useEffect(() => {
    d3.select(Ref.current)
      .selectAll("path")
      .data(data)
      .enter()
      .append("path")
      .attr("d", path)
      .attr("class", function (d) {
        return `${d.properties.name}`;
      });
  });
  const onClick = (e) => {
    const propertiesName = e.target.className.baseVal;
    console.log(propertiesName);
    Render(propertiesName);
  };
  return <g ref={Ref} onClick={onClick}></g>;
};

export default Path;
