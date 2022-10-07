import fileHierarchy from "./FileHierarchy";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import colors_m from "../../../assets/colors";
import DataTypeColor from "../../../components/DataTypeColor";
import TreeView from "@material-ui/lab/TreeView";
import StyledTreeItem from "../../../components/StyledTreeItem";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import FolderIcon from "@material-ui/icons/Folder";

const fileSystemWidth = 270;

const useStyles = makeStyles({
  fileMain: {
    width: fileSystemWidth,
    height: "100vh",
    backgroundColor: colors_m.darkBluelv_0,
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
  configText: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: ".5rem",
    marginBottom: ".9rem",
    color: colors_m.textWhite_light,
  },
  treeView: {
    // height: 264,
    maxWidth: 400,
    flexGrow: 1,
  },
  folderIcon: {},
});
const colors_of_filetypes = {
  javascript: colors_m.javascript,
  sql: colors_m.sql,
  ops: colors_m.ops,
  assett: colors_m.assert,
};
const folderTypography = (text) => {
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <FolderIcon style={{ marginRight: ".4rem" }} />
      <Typography
        variant="body2"
        style={{ fontWeight: "inherit", flexGrow: 1 }}
      >
        {text}
      </Typography>
    </div>
  );
};
const fileTypography = (text, type) => {
  return (
    <div>
      <div
        style={{
          padding: ".4rem",
          borderRadius: "40%",
          backgroundColor: colors_of_filetypes.type,
        }}
      >
        {type}
      </div>
      <Typography
        variant="body2"
        style={{ fontWeight: "inherit", flexGrow: 1 }}
      >
        {text}
      </Typography>
    </div>
  );
};

const FileSystem = () => {
  const classes = useStyles();
  return (
    <div className={classes.fileMain}>
      <Typography component="h1" variant="h5" className={classes.title}>
        Files
      </Typography>
      <div className={classes.configText}>
        <DataTypeColor
          text="config"
          backgroundColor={colors_m.poopGreen}
          color={colors_m.textWhite_1}
        />
        <div>dataform</div>
      </div>
      <div className={classes.configText}>
        <DataTypeColor
          text="config"
          backgroundColor={colors_m.poopGreen}
          color={colors_m.textWhite_1}
        />
        <div>package-lock</div>
      </div>
      <div className={classes.configText}>
        <DataTypeColor
          text="config"
          backgroundColor={colors_m.poopGreen}
          color={colors_m.textWhite_1}
        />
        <div>package</div>
      </div>
      <TreeView
        // className={classes.treeView}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <TreeItem nodeId="1" label={folderTypography("models")}></TreeItem>
      </TreeView>
    </div>
  );
};

export default FileSystem;