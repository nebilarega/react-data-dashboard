import React from "react";
import { AppBar, Toolbar, Typography, Badge } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import "../assets/colors";
import { makeStyles } from "@material-ui/core/styles";
import colors_m from "../assets/colors_m";

const defaultDrawerWidth = 200;
const useStyles = makeStyles({
  root: {},
  appBar: {
    position: "fixed",
    left: `${defaultDrawerWidth}px`,
    backgroundColor: colors_m.darkBluelv_3,
  },
});
const AppBarTop = () => {
  const classes = useStyles();
  return (
    <div className="root">
      <AppBar className={classes.appBar}>
        <Toolbar className={""}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={""}
          >
            Dashboard
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarTop;
