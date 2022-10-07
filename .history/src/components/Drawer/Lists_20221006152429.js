import { Icon } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

const styles = {
  outerCircle: {
    width: "1.2rem",
    height: "1.2rem",
    border: "3px solid white",
    borderRadius: "50%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  innerCircle: {
    width: ".7rem",
    height: ".7rem",
    order: "3px solid white",
    borderRadius: "50%",
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
