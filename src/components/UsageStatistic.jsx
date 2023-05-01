import React from "react";
import MultiProgress from "react-multi-progress";
import classes from "./UsageStatistic.module.css";

function CustomComponent({ children, ...rest }) {
  return (
    <div {...rest} style={{}}>
      {children}
    </div>
  );
}
function UsageStatistic(props) {
  console.log(props);
  let elements = [];
  if (props.shadow > 0) {
    elements.push({
      value: props.shadow,
      color: "#213547",
    });
  }
  elements.push({
    value: props.normal,
    color: "blue",
  });
  return (
    <div className={classes.statisticwrapper}>
      <div className={classes.pokemontitle}>
        {props.chinese} {props.countnormal + props.countshadow} /
        {(props.percentage * 100).toFixed(0)}%
      </div>
      <MultiProgress
        className={classes.ProgressBarContainer}
        elements={elements}
        component={CustomComponent}
      />
    </div>
  );
}

export default UsageStatistic;
