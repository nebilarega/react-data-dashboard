import { makeStyles } from "@material-ui/core";
import colors_m from "../../../assets/colors";
import FindInPageIcon from "@material-ui/icons/FindInPage";
import DashboardIcon from "@material-ui/icons/Dashboard";
import {
  folderTypography,
  fileTypography,
} from "../../../components/FolderAndFile";
import TreeView from "@material-ui/lab/TreeView";
import TreeItem from "@material-ui/lab/TreeItem";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import RemoveRedEyeOutlinedIcon from "@material-ui/icons/RemoveRedEyeOutlined";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  dataSpec: {
    width: "94.6%",
    height: "45vh",
    backgroundColor: colors_m.darkBluelv_3,
    display: "flex",
    justifyContent: "flex-satrt",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    padding: "1rem",
    height: 30,
    width: "100%",
    borderBottom: `1px solid ${colors_m.darkBluelv_0}`,
    alignItems: "center",
    gap: "2rem",
  },
  titles: {
    display: "flex",
    alignItems: "center",
    gap: ".8rem",
    fontSize: "1.1rem",
    color: colors_m.textWhite_1,
  },
  mainBody: {
    display: "flex",
    justifyContent: "flex-start",
    width: "100%",
    height: "100%",
  },
  treeView: {
    padding: "1rem",
    marginBottom: ".5rem",
    height: 264,
    maxWidth: 400,
    flexGrow: 1,
    color: colors_m.textWhite_1,
    borderRight: `1px solid ${colors_m.darkBluelv_0}`,
  },
  treeItem: {
    marginBottom: ".5rem",
  },
  table: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
  },
  table_m: {
    // minWidth: 500,
    backgroundColor: colors_m.darkBluelv_3,
    color: colors_m.textWhite_light,
    borderBottom: `1px solid ${colors_m.darkBluelv_0} !important`,
  },
  tableTitle: {
    display: "flex",
    padding: "1rem",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottom: `1px solid ${colors_m.darkBluelv_0}`,
    width: "94%",
  },
  tableBorder: {
    borderBottom: `1px solid ${colors_m.darkBluelv_1} !important`,
  },
  closeOutlinedIcon: {
    color: colors_m.textWhite_1,
  },
});
function createData(name, type) {
  return { name, type };
}

const rows = [
  createData("date", "date"),
  createData("device type", "character varying"),
  createData("country", "character varying"),
  createData("sessions", "integer"),
  createData("revenue", "integer"),
];
const DataSpec = () => {
  const classes = useStyles();
  return (
    <div className={classes.dataSpec}>
      <div className={classes.header}>
        <div className={classes.titles}>
          <FindInPageIcon />
          <div>Query Results</div>
        </div>
        <div className={classes.titles}>
          <DashboardIcon />
          <div>Schemas</div>
        </div>
      </div>
      <div className={classes.mainBody}>
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
            nodeId="2"
            label={folderTypography("dataform_demo", null)}
            className={classes.treeItem}
          >
            <TreeItem
              nodeId="2"
              label={folderTypography("dataset_1", RemoveRedEyeOutlinedIcon)}
              className={classes.treeItem}
            ></TreeItem>
            <TreeItem
              nodeId="3"
              label={folderTypography(
                "dataset_5_from_script_builder",
                RemoveRedEyeOutlinedIcon
              )}
              className={classes.treeItem}
            ></TreeItem>
            <TreeItem
              nodeId="4"
              label={folderTypography(
                "dataet_4_incremental_snapshot",
                RemoveRedEyeOutlinedIcon
              )}
              className={classes.treeItem}
            ></TreeItem>
            <TreeItem
              nodeId="5"
              label={folderTypography("reporting_gb", RemoveRedEyeOutlinedIcon)}
              className={classes.treeItem}
            ></TreeItem>
            <TreeItem
              nodeId="6"
              label={folderTypography("models", RemoveRedEyeOutlinedIcon)}
              className={classes.treeItem}
            ></TreeItem>
          </TreeItem>
          <TreeItem
            nodeId="2"
            label={folderTypography("dataform_set_2", null)}
            className={classes.treeItem}
          ></TreeItem>
        </TreeView>
        <div className={classes.table}>
          <div className={classes.tableTitle}>
            <div>{fileTypography("dataform_demo.dataset_1", "table")}</div>
            <div>
              <CloseOutlinedIcon className={classes.closeOutlinedIcon} />
            </div>
          </div>
          <TableContainer className={classes.table_m} component={Paper}>
            <Table className={classes.table_m} size="small">
              <TableHead>
                <TableRow>
                  <TableCell className={classes.table_m} align="left">
                    Field&nbsp;
                  </TableCell>
                  <TableCell className={classes.table_m} align="left">
                    Type
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow key={row.name} className={classes.tableBorder}>
                    <TableCell
                      className={classes.table_m}
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell className={classes.table_m} align="left">
                      {row.type}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default DataSpec;
