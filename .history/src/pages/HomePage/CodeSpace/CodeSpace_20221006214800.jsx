import { makeStyles } from "@material-ui/styles";
import colors_m from "../../../assets/colors";
import Code from "./Code";
const useStyles = makeStyles({
  codeSpace: {
    width: "100%",
    height: "50vh",
    backgroundColor: colors_m.darkBluelv_2,
    display: "flex",
  },
});
const CodeSpace = () => {
  const classes = useStyles();
  return (
    <div className={classes.codeSpace}>
      <Code />
    </div>
  );
};

export default CodeSpace;
