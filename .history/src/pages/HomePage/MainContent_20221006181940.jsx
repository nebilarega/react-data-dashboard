import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import FileSystem from "./FlieSystem/FileSystem";
const drawerWidth = 60;
const appBarHeight = 64;
const useStyles = makeStyles({
  mainContent: {
    height: "100vh",
    overflow: "auto",
    position: "fixed",
    top: appBarHeight,
    left: drawerWidth,
  },
});
const MainContent = () => {
  const classes = useStyles();
  return (
    <div>
      <main className={classes.mainContent}>
        <FileSystem />
      </main>
    </div>
  );
};

export default MainContent;
