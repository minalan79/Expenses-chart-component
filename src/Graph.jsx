import React from "react";
import { BarChart, Bar, Tooltip, XAxis, ResponsiveContainer } from "recharts";
import jsondata from "./assets/data.json";
import "./Graph.css";

const getMaxValueIndex = (data) => {
  let maxIndex = 0;
  for (let i = 1; i < data.length; i++) {
    if (data[i].amount > data[maxIndex].amount) {
      maxIndex = i;
    }
  }
  return maxIndex;
};

const CustomBar = (props) => {
  const { x, y, width, height, fill } = props;

  return (
    <g>
      <rect x={x} y={y} width={width} height={height} fill={fill} rx="5" />
    </g>
  );
};

function CustomTooltip({ payload, active }) {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{`$${payload[0].value}`}</p>
      </div>
    );
  }

  return null;
}

export default function Graph() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart data={jsondata}>
        <Tooltip
          cursor={{ fill: "none", cursor: "pointer" }}
          content={<CustomTooltip />}
          wrapperStyle={{
            backgroundColor: "var(--clr-darkbrow)",
            borderRadius: "5px",
            borderWidth: "0",
            outline: "none",
            padding: "0.5rem",
            color: "var(--clr-verypale-orange)",
          }}
        />
        <XAxis
          dataKey="day"
          axisLine={{ display: "none" }}
          tickLine={{ display: "none" }}
        />
        <Bar dataKey="amount" fill="var(--clr-softred)" shape={<CustomBar />} />
      </BarChart>
    </ResponsiveContainer>
  );
}
