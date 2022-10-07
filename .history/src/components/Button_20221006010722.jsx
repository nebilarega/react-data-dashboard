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
      backgroundColor: `${
        Props.backgroundColor ? Props.backgroundColor : "red"
      }`,
      color: `${Props.color ? Props.color : "yellow"}`,
      padding: "1rem",
      outline: "none",
      border: "none",
      cursor: "pointer",
      borderRadius: "8px",
    },
  });
  return (
    <div>
      {Props.Icon ? <Props.Icon /> : null}
      <button
        className={useStyles().root}
        style={{
          backgroundColor: !hover ? Props.backgroundColor : Props.hoverColor,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {Props?.text}
      </button>
    </div>
  );
};

export default Button;
