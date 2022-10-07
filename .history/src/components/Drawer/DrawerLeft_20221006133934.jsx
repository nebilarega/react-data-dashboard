import React from "react";
import Drawer from "@material-ui/core/Drawer";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { makeStyles } from "@material-ui/styles";
import { useState } from "react";

const drawerWidth = 240;
const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
  },
});
const DrawerLeft = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {};
  const handleDrawerClose = () => {};

  return (
    <div>
      <Drawer variant="permanent" className={classes.drawer}></Drawer>
    </div>
  );
};
export default DrawerLeft;
