import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import colors_m from "../../../assets/colors";
import DataTypeColor from "../../../components/DataTypeColor";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import { folderTypography, fileTypography } from "../CodeSpace/FolderAndFile";
import FolderIcon from "@material-ui/icons/Folder";

const fileSystemWidth = 400;

const useStyles = makeStyles({
  fileMain: {
    width: fileSystemWidth,
    height: "100vh",
    backgroundColor: colors_m.darkBluelv_0,
    // display: "flex",
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
    marginTop: "1rem",
    height: 264,
    maxWidth: 400,
    flexGrow: 1,
  },
  treeItem: {
    marginBottom: "1rem",
  },
});

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
          label={folderTypography("models", FolderIcon)}
          className={classes.treeItem}
        >
          <TreeItem
            nodeId="2"
            label={folderTypography("1_simple_questions", FolderIcon)}
            className={classes.treeItem}
          >
            <TreeItem
              nodeId="3"
              label={fileTypography("dataset_1", "SQL")}
              className={classes.treeItem}
            ></TreeItem>
            <TreeItem
              nodeId="4"
              label={fileTypography("dataset_2_with_ref", "SQL")}
              className={classes.treeItem}
            ></TreeItem>
          </TreeItem>
          <TreeItem
            nodeId="5"
            label={folderTypography("2_advanced_examples", FolderIcon)}
            className={classes.treeItem}
          >
            <TreeItem
              nodeId="6"
              label={fileTypography("dataset_3_increase", "SQL")}
              className={classes.treeItem}
            ></TreeItem>
            <TreeItem
              nodeId="7"
              label={fileTypography("dataset_4_increase", "JS")}
              className={classes.treeItem}
            ></TreeItem>
          </TreeItem>
          <TreeItem
            nodeId="8"
            label={folderTypography("3_operations_and_as", FolderIcon)}
            className={classes.treeItem}
          >
            <TreeItem
              nodeId="9"
              label={fileTypography("grant access", "ops")}
              className={classes.treeItem}
            ></TreeItem>
            <TreeItem
              nodeId="10"
              label={fileTypography("simple_assertion", "assert")}
              className={classes.treeItem}
            ></TreeItem>
          </TreeItem>
        </TreeItem>
      </TreeView>
    </div>
  );
};

export default FileSystem;
