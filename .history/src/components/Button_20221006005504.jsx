import { makeStyles } from "@material-ui/core";
import { useState } from "react";

const Button = (Props) => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover(true);
  };
  const handleMouseLeave = () => {
    setHover(false);
  };
  const useStyles = makeStyles({
    root: {
      backgroundColor: `${!hover ? Props.backgroundColor : Props.hoverColor})`,
      color: `${Props.color ? Props.color : "white"}`,
      padding: "1rem",
      outline: "none",
      border: "none",
      cursor: "pointer",
    },
  });
  return (
    <div>
      {Props.Icon ? <Props.Icon /> : null}
      <button
        className={useStyles().root}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {Props?.text}
      </button>
    </div>
  );
};

export default Button;
