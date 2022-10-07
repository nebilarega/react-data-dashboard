import { makeStyles } from "@material-ui/styles";
import FileSystem from "./FlieSystem/FileSystem";
import CodeSpace from "./CodeSpace/CodeSpace";
const drawerWidth = 60;
const appBarHeight = 64;
const useStyles = makeStyles({
  mainContent: {
    height: "100vh",
    width: "100%",
    overflow: "auto",
    position: "fixed",
    top: appBarHeight,
    left: drawerWidth,
    display: "flex",
  },
  subContent: {
    height: "100vh",
    width: "100%",
    // position: "fixed",
    // top: appBarHeight,
    // left: drawerWidth,
    display: "flex",
    flexDirection: "column",
  },
});
const MainContent = () => {
  const classes = useStyles();
  return (
    <div>
      <main className={classes.mainContent}>
        <FileSystem />
        <div className={classes.subContent}>
          <CodeSpace />
        </div>
      </main>
    </div>
  );
};

export default MainContent;
