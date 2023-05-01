import React from "react";
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";
import classes from "./UsageStatistic.module.css";

function UsageStatistic() {
  return (
    <div className={classes.ProgressBarContainer}>
      <ProgressBar percent={15} filledBackground="#213547">
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
            ></div>
          )}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
      </ProgressBar>
      <ProgressBar percent={65}>
        <Step>
          {({ accomplished, index }) => (
            <div
              className={`indexedStep ${accomplished ? "accomplished" : ""}`}
            ></div>
          )}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
        <Step>
          {() => <div className={classes.progressInterval}>&nbsp;</div>}
        </Step>
      </ProgressBar>
    </div>
  );
}

export default UsageStatistic;
