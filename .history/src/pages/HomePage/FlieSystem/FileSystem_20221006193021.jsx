import fileHierarchy from "./FileHierarchy";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";
import colors_m from "../../../assets/colors";
import DataTypeColor from "../../../components/DataTypeColor";
import TreeView from "@material-ui/lab/TreeView";
import StyledTreeItem from "../../../components/StyledTreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

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
    height: 264,
    maxWidth: 400,
    flexGrow: 1,
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
        defaultExpanded={["1"]}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        <StyledTreeItem nodeId="1" label="Main">
          <StyledTreeItem nodeId="2" label="Hello" />
          <StyledTreeItem nodeId="3" label="Subtree with children">
            <StyledTreeItem nodeId="6" label="Hello" />
            <StyledTreeItem nodeId="7" label="Sub-subtree with children">
              <StyledTreeItem nodeId="9" label="Child 1" />
              <StyledTreeItem nodeId="10" label="Child 2" />
              <StyledTreeItem nodeId="11" label="Child 3" />
            </StyledTreeItem>
            <StyledTreeItem nodeId="8" label="Hello" />
          </StyledTreeItem>
          <StyledTreeItem nodeId="4" label="World" />
          <StyledTreeItem nodeId="5" label="Something something" />
        </StyledTreeItem>
      </TreeView>
    </div>
  );
};

export default FileSystem;
