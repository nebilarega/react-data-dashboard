import { makeStyles } from "@material-ui/core";
import colors_m from "../../../assets/colors";
import Button from "../../../components/Button";
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
    justifyContent: "space-evenly",
    // paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "1rem",
    color: colors_m.textWhite_light,
  },
});
const Code = () => {
  const classes = useStyles();
  return (
    <div className={classes.code}>
      <div className={classes.title}>
        <div>definitions/ 1_simple_examples/dataset_2_with_ref.sql</div>
        <Button
          text="Commit (2 files)"
          backgroundColor={colors_m.buttonBlue}
          hoverColor={colors_m.buttonBlue_light}
          color={"white"}
        />
      </div>
    </div>
  );
};

export default Code;
