import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import FileSystem from "./FlieSystem/FileSystem";

const useStyles = makeStyles({
  mainContent: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
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
