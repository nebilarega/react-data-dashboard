import { Icon } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import EventNoteIcon from "@material-ui/icons/EventNote";
import StorageIcon from "@material-ui/icons/Storage";
import UpdateIcon from "@material-ui/icons/Update";

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
    color: colors_m.darkBluelv_1,
    paddingTop: ".05em",
  },
  search: {
    color: colors_m.darkBluelv_1,
    width: ".9em",
    height: ".9em",
    display: "flex",
    justifyContent: "center",
    position: "relative",
  },
  searchCircle: {
    width: "80%",
    height: "80%",
    border: `2px solid ${colors_m.darkBluelv_1}`,
    borderRadius: "50%",
  },
  searchLeg: {
    position: "absolute",
    left: "71%",
    top: "90%",
    width: ".5em",
    height: ".15em",
    backgroundColor: colors_m.darkBluelv_1,
    transform: "rotateZ(45deg)",
  },
  fidget: {
    position: "relative",
    width: "1em",
    height: "1em",
  },
  figCircle: {
    width: ".2em",
    height: ".2em",
    border: "2px solid white",
    borderRadius: "50%",
    position: "absolute",
  },
  figCircle_left: {
    top: "50%",
    left: "0",
  },
  figCircle_top: {
    top: "-2%",
    left: "50%",
    transform: "translate(-50%)",
  },
  figCircle_center: {
    top: "50%",
    left: "50%",
    width: ".28em",
    height: ".28em",
    transform: "translate(-50%, -50%)",
  },
  figCircle_right: {
    top: "53%",
    left: "60%",
  },
};

export const firstList = () => {
  return (
    <div style={{ marginBottom: "1rem" }}>
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
    <div style={{ marginBottom: "1rem" }}>
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
    <div style={{ marginBottom: "1rem" }}>
      <ListItem button>
        <ListItemIcon>
          <VisibilityOutlinedIcon style={styles.outlinedEye} />
        </ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <Icon>
            <div style={styles.search}>
              <div style={styles.searchCircle}></div>
              <div style={styles.searchLeg}></div>
            </div>
          </Icon>
        </ListItemIcon>
      </ListItem>
    </div>
  );
};

export const fourthList = () => {
  return (
    <div style={{ marginBottom: "2rem" }}>
      <ListItem button>
        <ListItemIcon>
          <Icon>
            <div style={styles.fidget}>
              <div
                style={{ ...styles.figCircle, ...styles.figCircle_left }}
              ></div>
              <div
                style={{ ...styles.figCircle, ...styles.figCircle_top }}
              ></div>
              <div
                style={{ ...styles.figCircle, ...styles.figCircle_center }}
              ></div>
              <div
                style={{ ...styles.figCircle, ...styles.figCircle_right }}
              ></div>
            </div>
          </Icon>
        </ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <UpdateIcon style={{ color: colors_m.darkBluelv_1 }} />
        </ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <EventNoteIcon style={{ color: colors_m.darkBluelv_1 }} />
        </ListItemIcon>
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <StorageIcon style={{ color: colors_m.darkBluelv_1 }} />
        </ListItemIcon>
      </ListItem>
    </div>
  );
};
