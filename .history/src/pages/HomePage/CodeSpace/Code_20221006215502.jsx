import { makeStyles } from "@material-ui/core";
import colors_m from "../../../assets/colors";
import { Typography } from "@material-ui/core";
const useStyles = makeStyles({
  code: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  title: {
    width: "100%",
    height: 64,
    borderBottom: `1px solid ${colors_m.darkBluelv_0}`,
    borderRight: `1px solid ${colors_m.darkBluelv_0}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: "1rem",
    paddingRight: "1rem",
  },
});
const Code = () => {
  const classes = useStyles();
  return (
    <div className={classes.code}>
      <div className={classes.title}>
        <Typography component="h1" variant="h7">
          definitions/ 1_simple_examples/dataset_2_with_ref.sql
        </Typography>
      </div>
    </div>
  );
};

export default Code;
