import { useState, useEffect } from "react";
import * as d3 from "d3";

interface Data {
  day: string;
  value: number;
}

interface BarChartPlainProps {
  data: Data[];
  height: number;
  width: number;
}

interface Bars {
  id: number;
  y: number;
  height: number;
  width: number;
}

const BarChartPlain = (props: BarChartPlainProps) => {
  const [bars, setBars] = useState<Bars[]>([]);

  useEffect(() => {
    let bandScale = d3
      .scaleBand()
      .domain(["Mon", "Tue", "Wed", "Thu", "Fri"])
      .range([0, props.height])
      .paddingInner(0.05);

    let widthMax = d3.max(props.data, (d) => d.value) as number;
    let widthScale = d3
      .scaleLinear()
      .domain([0, widthMax])
      .range([0, props.width - 50]);
    widthScale.clamp(true);

    let _bars = props.data.map(
      (d, i): Bars => {
        return {
          id: i,
          y: bandScale(d.day) as number,
          height: bandScale.bandwidth(),
          width: widthScale(d.value)
        };
      }
    );
    setBars(_bars);
  }, [props.data, props.height, props.width]);

  return (
    <svg width={props.width} height={props.height}>
      <g id="wrapper">
        {bars.map((bar) => (
          <rect key={bar.id} y={bar.y} height={bar.height} width={bar.width} />
        ))}
      </g>
    </svg>
  );
};

export default BarChartPlain;
