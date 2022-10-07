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
  treeItem: {
    marginBottom: ".4rem",
  },
});
const colors_of_filetypes = {
  JS: colors_m.JS,
  SQL: colors_m.SQL,
  ops: colors_m.ops,
  assett: colors_m.assert,
};
const folderTypography = (text) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: ".8rem",
      }}
    >
      <FolderIcon style={{ color: colors_m.darkBluelv_1 }} />
      <div style={{ color: colors_m.darkBluelv_1 }}>{text}</div>
    </div>
  );
};
const fileTypography = (text, type) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: ".8rem",
      }}
    >
      <div
        style={{
          paddingTop: ".1rem",
          paddingBottom: ".1rem",
          paddingLeft: ".4rem",
          paddingRight: ".4rem",
          borderRadius: "1rem",
          backgroundColor: colors_of_filetypes[type],
        }}
      >
        <div
          style={{
            fontSize: ".8rem",
            display: "flex",
          }}
        >
          {type}
        </div>
      </div>
      <div
        style={{
          fontWeight: "inherit",
          color: colors_m.darkBluelv_1,
        }}
      >
        {text}
      </div>
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
        className={classes.treeView}
        defaultCollapseIcon={
          <ExpandMoreIcon style={{ color: colors_m.darkBluelv_1 }} />
        }
        defaultExpandIcon={
          <ChevronRightIcon style={{ color: colors_m.darkBluelv_1 }} />
        }
      >
        <TreeItem
          nodeId="1"
          label={folderTypography("models")}
          className={classes.treeItem}
        >
          <TreeItem
            nodeId="2"
            label={folderTypography("1_simple_questions")}
            className={classes.treeItem}
          >
            <TreeItem
              nodeId="3"
              label={fileTypography("dataset_1", "JS")}
              className={classes.treeItem}
            ></TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeView>
    </div>
  );
};

export default FileSystem;
