import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  code: {
    display: "flex",
    flexDirection: "column",
  },
});
const Code = () => {
  const classes = useStyles();
  return <div className={classes.code}></div>;
};

export default Code;
