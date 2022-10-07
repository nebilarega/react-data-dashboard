import React from "react";
import { AppBar, Toolbar, Typography, Badge } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/Notifications";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});
const AppBarTop = () => {
  return (
    <div className="root">
      <AppBar>
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
