import React from "react";
import PropTypes from "prop-types";
import { alpha, withStyles } from "@material-ui/core/styles";
import TreeItem from "@material-ui/lab/TreeItem";
import Collapse from "@material-ui/core/Collapse";

// function TransitionComponent(props) {
//   const style = useSpring({
//     from: { opacity: 0, transform: "translate3d(20px,0,0)" },
//     to: {
//       opacity: props.in ? 1 : 0,
//       transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
//     },
//   });

//   return (
//     <animated.div style={style}>
//       <Collapse {...props} />
//     </animated.div>
//   );
// }

// TransitionComponent.propTypes = {
//   /**
//    * Show the component; triggers the enter or exit states
//    */
//   in: PropTypes.bool,
// };

const StyledTreeItem = withStyles((theme) => ({
  iconContainer: {
    "& .close": {
      opacity: 0.3,
    },
  },
  group: {
    // marginLeft: 7,
    // paddingLeft: 18,
    borderLeft: `1px dashed ${alpha(theme.palette.text.primary, 0.4)}`,
  },
}))((props) => <TreeItem {...props} />);

export default StyledTreeItem;
