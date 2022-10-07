import { makeStyles } from "@material-ui/core";
import colors_m from "../../../assets/colors";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "../../../components/Button";
import { fileTypography } from "./FolderAndFile";

const useStyles = makeStyles({
  codeOutline: {
    width: "50%",
    height: "100%",
    borderLeft: `1px solid ${colors_m.darkBluelv_0}`,
    marginLeft: "1rem",
  },
  title: {
    width: "100%",
    height: 64,
    borderBottom: `1px solid ${colors_m.darkBluelv_0}`,

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
    fontSize: ".9rem",
    color: colors_m.textWhite_light,
    fontWeight: 600,
    // marginLeft: "1rem",
    cursor: "pointer",
    padding: ".8rem",
    borderBottom: `1px solid ${colors_m.darkBluelv_0}`,
    display: "flex",
    alignItems: "center",
    gap: ".4rem",
  },
  help: {
    fontSize: ".6rem",
    fontWeight: 400,
  },
  moreHorizIcon: {
    flexGrow: 1,
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
      <div className={classes.list}>
        <HelpOutlineIcon />
        <div>No Compilation issue</div>
      </div>
      <div className={classes.list}>
        <div className={classes.moreHorizIcon}>
          {fileTypography("dataset_2_with_ref", "table")}
        </div>
        <MoreHorizIcon style={{ marginRight: "4rem" }} />
      </div>
      <div className={classes.list}>
        <div className={classes.moreHorizIcon} style={{ marginRight: "8rem" }}>
          Query
        </div>
        <ExpandMoreIcon style={{ marginRight: "4rem" }} />
      </div>
      <div className={classes.list}>
        <div className={classes.moreHorizIcon} style={{ marginRight: "8rem" }}>
          Compiled
        </div>
        <ExpandMoreIcon style={{ marginRight: "4rem" }} />
      </div>
      <div className={classes.list}>
        <div className={classes.moreHorizIcon} style={{ marginRight: "8rem" }}>
          Query
        </div>
        <ExpandMoreIcon style={{ marginRight: "4rem" }} />
      </div>
      <div className={classes.list} style={{ justifyContent: "center" }}>
        <Button
          text="Execute Query"
          backgroundColor={colors_m.darkBluelv_1}
          hoverColor={colors_m.textWhite_1}
          color={"white"}
        />
        <Button
          text="Run this node"
          backgroundColor={colors_m.buttonBlue}
          hoverColor={colors_m.buttonBlue_light}
          color={"white"}
        />
      </div>
    </div>
  );
};

export default CodeOutline;
