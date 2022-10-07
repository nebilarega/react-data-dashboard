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
    borderBottom: `1px solid ${colors_m.darkBluelv_0}`,
    borderRight: `1px solid ${colors_m.darkBluelv_0}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    // paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "1rem",
    color: colors_m.textWhite_light,
    fontWeight: 700,
    cursor: "pointer",
  },
  outline: {
    color: "white",
    fontWeight: 700,
  },
  bottomBorder: {
    marginLeft: "2rem",
    width: "35%",
    height: "2px",
    backgroundColor: "white",
  },
  list: {
    width: "100%",
    fontSize: "1rem",
    color: colors_m.textWhite_light,
    fontWeight: 700,
    cursor: "pointer",
    padding: ".5rem",
    borderBottom: `1px solid ${colors_m.darkBluelv_0}`,
  },
});

const CodeOutline = () => {
  const classes = useStyles();
  return (
    <div className={classes.codeOutline}>
      <div className={classes.title}>
        <div className={classes.outline}>Outline</div>
        <div>Documentation</div>
      </div>
      <div className={classes.bottomBorder}></div>
      <div className={classes.list}></div>
      <div className={classes.list}></div>
      <div className={classes.list}></div>
      <div className={classes.list}></div>
      <div className={classes.list}></div>
    </div>
  );
};

export default CodeOutline;
