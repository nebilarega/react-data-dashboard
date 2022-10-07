import { makeStyles } from "@material-ui/core";
import colors_m from "../../../assets/colors";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import DashboardIcon from "@material-ui/icons/Dashboard";
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
    height: 64,
    width: "100%",
    borderBottom: `1px solid ${colors_m.darkBluelv_0}`,
    alignItems: "center",
    gap: "2rem",
  },
  titles: {
    display: "flex",
    alignItems: "center",
    gap: ".8rem",
    fontSize: "1.1rem",
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
        <div className={classes.titles}>
          <DashboardIcon />
          <div>Schemas</div>
        </div>
      </div>
    </div>
  );
};

export default DataSpec;
