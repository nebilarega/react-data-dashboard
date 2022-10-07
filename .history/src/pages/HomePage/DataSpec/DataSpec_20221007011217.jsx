import { makeStyles } from "@material-ui/core";
import colors_m from "../../../assets/colors";
import FindInPageIcon from "@material-ui/icons/FindInPage";
const useStyles = makeStyles({
  dataSpec: {
    width: "94.6%",
    height: "45vh",
    backgroundColor: colors_m.darkBluelv_3,
    display: "flex",
    justifyContent: "column",
  },
  header: {
    display: "flex",
    padding: "1rem",
    borderBottom: `1px solid ${colors_m.darkBluelv_0}`,
    alignItems: "center",
  },
  titles: {
    display: "flex",
  },
});
const DataSpec = () => {
  const classes = useStyles();
  return (
    <div className={classes.dataSpec}>
      <div className={classes.header}>
        <div className={classes.titles}>
          <FindInPageIcon />
          <div>Query Results</div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default DataSpec;
