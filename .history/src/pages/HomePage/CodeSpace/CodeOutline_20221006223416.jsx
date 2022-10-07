import { makeStyles } from "@material-ui/core";
import colors_m from "../../../assets/colors";

const useStyles = makeStyles({
  codeOutline: {
    width: "50%",
    height: "100%",
  },
  title: {
    width: "100%",
    height: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "1rem",
    color: colors_m.textWhite_light,
  },
});

const CodeOutline = () => {
  const classes = useStyles();
  return (
    <div className={classes.codeOutline}>
      <div className={classes.title}></div>
    </div>
  );
};

export default CodeOutline;
