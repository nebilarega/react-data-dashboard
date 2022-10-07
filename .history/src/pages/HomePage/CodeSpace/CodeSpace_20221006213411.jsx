import { makeStyles } from "@material-ui/styles";
import colors_m from "../../../assets/colors";
const useStyles = makeStyles({
  root: {
    width: "100%",
    height: "50vh",
    backgroundColor: colors_m.darkBluelv_2,
  },
});
const CodeSpace = () => {
  const classes = useStyles();
  return <div className={classes.root}></div>;
};

export default CodeSpace;
