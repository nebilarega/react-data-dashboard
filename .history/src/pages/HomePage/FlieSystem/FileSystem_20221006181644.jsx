import fileHierarchy from "./FileHierarchy";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const fileSystemWidth = 270;
const drawerWidth = 60;
const appBarHeight = 64;
const useStyles = makeStyles({
  root: {
    width: fileSystemWidth,
    height: "100vh",
    backgroundColor: "blue",
    position: "fixed",
    top: `calc(100vh-${appBarHeight})`,
    left: `calc(100vw-${drawerWidth})`,
  },
});

const FileSystem = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography component="h1" variant="h6">
        Files
      </Typography>
    </div>
  );
};

export default FileSystem;
