import React from "react";
import { AppBar, Toolbar, Typography, Badge } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import IconButton from "@material-ui/core/IconButton";
import "../assets/colors";
import { makeStyles } from "@material-ui/core/styles";
import colors_m from "../assets/colors";

const defaultDrawerWidth = 200;
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  appBar: {
    position: "fixed",
    left: `${defaultDrawerWidth}px`,
    backgroundColor: colors_m.darkBluelv_3,
  },
  appBar__content: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
  },
  leftSide: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexGrow: 1,
  },
  projectName: {
    display: "flex",
    alignItems: "center",
  },
  rightSide: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
const AppBarTop = () => {
  const classes = useStyles();
  return (
    <div className="root">
      <AppBar className={classes.appBar}>
        <Toolbar className={""}>
          <div className={classes.leftSide}>
            <div className={classes.projectName}>
              <div>Project name</div>
              <KeyboardArrowDownIcon />
            </div>
          </div>
          <div className={classes.rightSide}>Hello</div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarTop;
