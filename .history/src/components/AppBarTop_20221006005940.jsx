import React from "react";
import { AppBar, colors, Toolbar } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import IconButton from "@material-ui/core/IconButton";
import Button from "./Button";
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
    marginRight: "1rem",
  },
  keyboardArrowDownIcon: {
    width: ".7em",
    height: ".7em",
    paddingTop: ".1em",
    color: colors_m.textDarkBlue_0,
  },
  enviromentType: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
  },
  enviroment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "16px",
    color: colors_m.textWhite_1,
    padding: ".3rem",
    border: `1px solid ${colors_m.textDarkBlue_0}`,
    borderRadius: "10px",
  },
  leftEnviroment: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    padding: ".4rem",
    borderRight: `1px solid ${colors_m.textDarkBlue_0}`,
  },
  twoDots: {
    display: "flex",
    marginRight: "8px",
  },
  dot: {
    width: ".25em",
    height: ".25em",
    borderRadius: "50%",
    margin: ".15em",
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
                <div className={classes.leftEnviroment}>
                  <span>Developement</span>
                  <KeyboardArrowDownIcon
                    className={classes.keyboardArrowDownIcon}
                  />
                </div>
                <div className={classes.twoDots}>
                  <div className={classes.dot}></div>
                  <div className={classes.dot}></div>
                </div>
              </div>
            </div>
            <Button
              text="Some Text"
              backgroundColor={"blue"}
              hoverColor={colors_m.buttonBlue_light}
              color={"black"}
            />
          </div>
          <div className={classes.rightSide}>Hello</div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarTop;
