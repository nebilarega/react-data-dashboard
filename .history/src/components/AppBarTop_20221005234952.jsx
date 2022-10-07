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
    padding: ".5rem",
  },
  keyboardArrowDownIcon: {
    width: ".7em",
    height: ".7em",
    paddingTop: ".1em",
  },
  enviromentType: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
  },
  enviroment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "4px",
    color: colors_m.textWhite_1,
    padding: ".5rem",
  },
  dot: {
    width: ".1em",
    height: ".1em",
    borderRadius: "50%",
    padding: ".1em",
    backgroundColor: colors_m.textDarkBlue_0,
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
                className={classes.keyboardArrowDownIcon}
              />
            </div>
            <div className={classes.enviromentType}>
              <div className={classes.enviroment}>
                <span>Developement</span>
                <KeyboardArrowDownIcon
                  className={classes.keyboardArrowDownIcon}
                />
                <div>
                  <div className={classes.dot}></div>
                  <div className={classes.dot}></div>
                </div>
              </div>
            </div>
          </div>
          <div className={classes.rightSide}>Hello</div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarTop;
