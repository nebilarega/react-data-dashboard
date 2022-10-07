import { Icon } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import SearchIcon from "@material-ui/icons/Search";
import colors_m from "../../assets/colors";

const styles = {
  outerCircle: {
    width: "1rem",
    height: "1rem",
    border: "4px solid white",
    borderRadius: "50%",
    position: "relative",
  },
  innerCircle: {
    width: ".4rem",
    height: ".4rem",
    border: "4px solid white",
    borderRadius: "50%",
    position: "absolute",
    top: "30%",
    left: "50%",
    transform: "translate(-50%)",
  },
  playArrow: {
    borderRadius: "5px",
    backgroundColor: colors_m.buttonBlue,
    color: colors_m.textWhite_1,
    width: ".7em",
    // height: ".7em",
    paddingLeft: ".2em",
    paddingRight: ".2em",
  },
  outlinedEye: {
    borderRadius: "50%",
    border: `2px solid ${colors_m.darkBluelv_1}`,
    color: colors_m.darkBluelv_1,
    paddingTop: ".05em",
  },
  search: {
    color: colors_m.darkBluelv_1,
    width: "1.2em",
    height: "1em",
    display: "flex",
    justifyContent: "center",
    border: "1px solid white",
    // position: "relative",
  },
  searchCircle: {
    width: "1em",
    height: "1em",
    border: `2px solid ${colors_m.darkBluelv_1}`,
    borderRadius: "50%",
  },
  searchLeg: {
    position: "absolute",
    width: ".4rem",
    height: ".1em",
    backgroundColor: colors_m.darkBluelv_1,
    transform: "rotateZ(-45deg)",
  },
};

export const firstList = () => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <Icon>
            <div style={styles.outerCircle}>
              <div style={styles.innerCircle}></div>
            </div>
          </Icon>
        </ListItemIcon>
      </ListItem>
    </div>
  );
};

export const secondList = () => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <PlayArrowIcon style={styles.playArrow} />
        </ListItemIcon>
      </ListItem>
    </div>
  );
};
export const thirdList = () => {
  return (
    <div>
      <ListItem button>
        <ListItemIcon>
          <VisibilityOutlinedIcon style={styles.outlinedEye} />
        </ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <div style={styles.search}>
            <div style={styles.searchCircle}></div>
            {/* <div style={styles.searchLeg}></div> */}
          </div>
        </ListItemIcon>
      </ListItem>
    </div>
  );
};

export const fourthList = () => {
  return <div></div>;
};
