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

const drawerWidth = 240;
const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    // flexShrink: 0,
    // whiteSpace: "nowrap",
    zIndex: 1250,
  },
  drawerOpen: {
    width: drawerWidth,
    transition: "width ease-in-out 1s",
  },
  drawerClose: {
    overflowX: "hidden",
    width: 20,
  },
});
const DrawerLeft = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Drawer
        variant="permanent"
        className={`${classes.drawer} ${
          open ? classes.drawerOpen : classes.drawerClose
        }`}
        classes={{
          paper: `${classes.drawer} ${
            open ? classes.drawerOpen : classes.drawerClose
          }`,
        }}
      >
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};
export default DrawerLeft;
