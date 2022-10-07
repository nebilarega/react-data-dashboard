import React from "react";
import { alpha, withStyles } from "@material-ui/core/styles";
import TreeItem from "@material-ui/lab/TreeItem";

const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    "& .close": {
      opacity: 0.3,
    },
  },
  group: {
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}))((props) => <TreeItem {...props} />);

export default StyledTreeItem;
