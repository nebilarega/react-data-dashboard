import { makeStyles } from "@material-ui/core";
import colors_m from "../../../assets/colors";

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
  },
});
const Code = () => {
  const classes = useStyles();
  return (
    <div className={classes.code}>
      <div className={classes.title}></div>
    </div>
  );
};

export default Code;
