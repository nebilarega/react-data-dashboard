import { Icon } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
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
    width: ".7em",
    height: ".7em",
    marginLeft: ".1em",
    paddingTop: ".05em",
    // paddingRight: ".2em",
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
    </div>
  );
};

export const fourthList = () => {
  return <div></div>;
};
