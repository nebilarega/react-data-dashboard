import { makeStyles } from "@material-ui/styles";
import FileSystem from "./FlieSystem/FileSystem";
import CodeSpace from "./CodeSpace/CodeSpace";
import DataSpec from "./DataSpec/DataSpec";
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
        <div>
          <CodeSpace />
          <DataSpec />
        </div>
      </main>
    </div>
  );
};

export default MainContent;
