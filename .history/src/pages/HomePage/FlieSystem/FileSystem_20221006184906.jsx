import fileHierarchy from "./FileHierarchy";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import colors_m from "../../../assets/colors";
import DataTypeColor from "../../../components/DataTypeColor";

const fileSystemWidth = 270;

const useStyles = makeStyles({
  fileMain: {
    width: fileSystemWidth,
    height: "100vh",
    backgroundColor: colors_m.darkBluelv_1,
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    paddingTop: "1rem",
    paddingLeft: "1.5rem",
  },
  title: {
    marginBottom: "1rem",
    color: "white",
    fontWeight: 700,
  },
});

const FileSystem = () => {
  const classes = useStyles();
  return (
    <div className={classes.fileMain}>
      <Typography component="h1" variant="h5" className={classes.title}>
        Files
      </Typography>
      <div style={{ display: "inline-block" }}>
        <DataTypeColor
          text="config"
          backgroundColor={colors_m.poopGreen}
          color={colors_m.textWhite_1}
        />
        <div>dataform</div>
      </div>
    </div>
  );
};

export default FileSystem;
