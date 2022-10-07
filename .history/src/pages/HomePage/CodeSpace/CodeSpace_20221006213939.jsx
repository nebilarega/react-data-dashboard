import { makeStyles } from "@material-ui/styles";
import colors_m from "../../../assets/colors";
const useStyles = makeStyles({
  codeSpace: {
    width: "100%",
    height: "60vh",
    backgroundColor: colors_m.darkBluelv_2,
  },
});
const CodeSpace = () => {
  const classes = useStyles();
  return <div className={classes.codeSpace}></div>;
};

export default CodeSpace;
