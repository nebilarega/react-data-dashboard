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
    backgroundColor: colors_m.darkBluelv_3,
  },
  toolBar: {
    display: "flex",
    justifyContent: "space-between",
  },
  leftSide: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginLeft: `${defaultDrawerWidth}px`,
  },
  projectName: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    color: colors_m.textDarkBlue_0,
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
        <Toolbar className={classes.toolBar}>
          <div className={classes.leftSide}>
            <div className={classes.projectName}>
              <span>Project name</span>
              <KeyboardArrowDownIcon
                style={{ width: ".7em", height: ".7em", paddingTop: ".1em" }}
              />
            </div>
          </div>
          <div className={classes.rightSide}>Hello</div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarTop;