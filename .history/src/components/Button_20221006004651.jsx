import { makeStyles } from "@material-ui/core";
import { useState } from "react";

const Button = (Props) => {
  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {
    setHover((hover) => (hover = true));
  };
  const handleMouseLeave = () => {};
  const useStyles = makeStyles({
    root: {
      backgroundColor: `${
        Props.backgroundColor ? Props.backgroundColor : "blue"
      }`,
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
