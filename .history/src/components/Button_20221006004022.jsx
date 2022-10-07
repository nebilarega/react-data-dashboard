import { makeStyles } from "@material-ui/core";

const Button = (Props) => {
  const useStyles = makeStyles({
    root: {
      backgroundColor: `${
        Props.backgroundColor ? Props.backgroundColor : "blue"
      }`,
      color: `${Props.color ? Props.color : "white"}`,
      padding: "1rem",
      outline: "none",
      border: "none",
    },
  });
  return (
    <div>
      {Props.Icon ? <Props.Icon></Props.Icon> : null}
      <button className={useStyles().root}>{Props?.text}</button>
    </div>
  );
};

export default Button;
