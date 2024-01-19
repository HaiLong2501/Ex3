import React from "react";
import HotItem from "./HotItem";

export default function HotProduct(props) {
  return (
    <div className="HotTrend">
      <div className="Trend_Content">
        <div className="title">
          <h3>TOP 10 ĐIỆN THOẠI ĐƯỢC YÊU THÍCH NHẤT</h3>
        </div>
        <div className="info">
          <HotItem dataItem={props.data[0]} />
          <HotItem dataItem={props.data[1]} />
          <HotItem dataItem={props.data[2]} />
          <HotItem dataItem={props.data[3]} />
          <HotItem dataItem={props.data[4]} />
        </div>
      </div>
    </div>
  );
}
