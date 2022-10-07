import { makeStyles } from "@material-ui/styles";
import colors_m from "../../../assets/colors";
import Code from "./Code";
import CodeOutline from "./CodeOutline";
const useStyles = makeStyles({
  codeSpace: {
    width: "100%",
    height: "50vh",
    backgroundColor: colors_m.darkBluelv_2,
    display: "flex",
    justifyContent: "space-between",
  },
});
const CodeSpace = () => {
  const classes = useStyles();
  return (
    <div className={classes.codeSpace}>
      <Code />
      <CodeOutline />
    </div>
  );
};

export default CodeSpace;
