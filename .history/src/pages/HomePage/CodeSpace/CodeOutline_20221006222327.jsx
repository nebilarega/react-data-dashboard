import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  codeOutline: {
    width: "30%",
    height: "100%",
  },
});

const CodeOutline = () => {
  const classes = useStyles();
  return <div className={classes.codeOutline}></div>;
};

export default CodeOutline;
