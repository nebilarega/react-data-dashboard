import React from "react";
import { AppBar, Toolbar, Typography, Badge } from "@material-ui/core";
import { NotificationsIcon } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({});
const AppBarTop = () => {
  return (
    <div className="root">
      <AppBar>
        <Toolbar className={""}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={() => {}}
            className={""}
          ></IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={""}
          >
            Dashboard
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default AppBarTop;
