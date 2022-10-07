import { makeStyles } from "@material-ui/core";
import colors_m from "../../../assets/colors";

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
  },
});
const DataSpec = () => {
  const classes = useStyles();
  return (
    <div className={classes.dataSpec}>
      <div className={classes.header}>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default DataSpec;