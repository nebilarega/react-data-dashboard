import { Icon } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const styles = {
  outerCircle: {
    width: "1rem",
    height: "1rem",
    border: "4px solid white",
    borderRadius: "50%",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "flex-end",
    // alignItems: "center",
    position: "relative",
  },
  innerCircle: {
    width: ".4rem",
    height: ".4rem",
    border: "4px solid white",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%)",
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
          <PlayArrowIcon />
        </ListItemIcon>
      </ListItem>
    </div>
  );
};
export const thirdList = () => {
  return <div></div>;
};

export const fourthList = () => {
  return <div></div>;
};
