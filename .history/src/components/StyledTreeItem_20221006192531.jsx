import React from "react";
import { alpha, withStyles } from "@material-ui/core/styles";
import TreeItem from "@material-ui/lab/TreeItem";
import colors_m from "../assets/colors";

const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    "& .close": {
      opacity: 0.3,
    },
  },
  group: {
    borderLeft: `1px dashed ${colors_m.darkBluelv_0}}`,
  },
}))((props) => <TreeItem {...props} />);

export default StyledTreeItem;
