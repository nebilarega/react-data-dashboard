import { makeStyles } from "@material-ui/core";
import colors_m from "../../../assets/colors";

const useStyles = makeStyles({
  dataSpec: {
    width: "76%",
    height: "50vh",
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
    <div>
      <div className={classes.header}></div>
    </div>
  );
};

export default DataSpec;
