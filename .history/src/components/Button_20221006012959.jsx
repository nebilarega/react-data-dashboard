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
      padding: ".8rem",
      outline: "none",
      border: "none",
      cursor: "pointer",
      borderRadius: "8px",
      display: "flex",
      alignItems: "center",
      fontWeight: "700",
      fontSize: ".8rem",
    },
  });
  return (
    <div>
      <button
        className={useStyles().root}
        style={{
          backgroundColor: !hover ? Props.backgroundColor : Props.hoverColor,
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {Props.Icon ? <Props.Icon /> : null}
        {Props?.text}
      </button>
    </div>
  );
};

export default Button;
