import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
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
    cursor: "pointer",
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
    marginRight: "1rem",
    cursor: "pointer",
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
  boxContainer: {
    width: "1.5rem",
    height: "1.1rem",
    border: `3px solid ${colors_m.darkBluelv_1}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: ".1rem",
  },
  leftBorder: {
    width: "100%",
    height: "80%",
    marginLeft: ".1rem",
    borderLeft: `3px solid ${colors_m.darkBluelv_1}`,
  },
  middleBorder: {
    width: "80%",
    height: "100%",
    marginBottom: ".14rem",
    borderBottom: `3px solid ${colors_m.darkBluelv_1}`,
  },
  rightBorder: {
    width: "100%",
    height: "80%",
    marginRight: ".1rem",
    borderRight: `3px solid ${colors_m.darkBluelv_1}`,
  },
});
const IconGit = () => {
  return (
    <>
      <img src="/git-commit.svg" alt="git commit" width={24} height={24} />
    </>
  );
};
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
              Icon={IconGit}
              text="Commit (2 files)"
              backgroundColor={colors_m.buttonBlue}
              hoverColor={colors_m.buttonBlue_light}
              color={"white"}
            />
          </div>
          <div className={classes.rightSide}>
            <div
              style={{
                gap: 10,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className={classes.boxContainer}>
                <div className={classes.leftBorder}></div>
              </div>
              <div className={classes.boxContainer}>
                <div className={classes.middleBorder}></div>
              </div>
              <div className={classes.boxContainer}>
                <div className={classes.rightBorder}></div>
              </div>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarTop;
