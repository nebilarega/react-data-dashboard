import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";
import colors_m from "../../../assets/colors";
import { firstList, secondList, thirdList, fourthList } from "./Lists";

const drawerWidth = 60;
const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    zIndex: 1251,
    backgroundColor: colors_m.darkBluelv_4,
  },
  divider: {
    backgroundColor: colors_m.darkBluelv_1,
    width: "40%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
const DrawerLeft = () => {
  const classes = useStyles();

  return (
    <div>
      <Drawer
        variant="permanent"
        className={classes.drawer}
        classes={{
          paper: `${classes.drawer}`,
        }}
      >
        <List style={{ marginBottom: "1rem" }}>{firstList()}</List>
        <List style={{ marginBottom: "1rem" }}>{secondList()}</List>
        <Divider className={classes.divider} style={{ marginBottom: "1rem" }} />
        <List style={{ marginBottom: "1rem" }}>{thirdList()}</List>
        <Divider className={classes.divider} style={{ marginBottom: "1rem" }} />
        <List>{fourthList()}</List>
      </Drawer>
    </div>
  );
};
export default DrawerLeft;
