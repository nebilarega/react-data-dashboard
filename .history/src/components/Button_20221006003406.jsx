import { makeStyles } from "@material-ui/core";

const Button = (Props) => {
  const useStyles = makeStyles({
    root: {
      backgroundColor: `${
        Props.backgroundColor ? Props.backgroundColor : "blue"
      }`,
      color: `${Props.color ? Props.color : "white"}`,
    },
  });
  return (
    <div>
      {Props.Icon ? <Props.Icon></Props.Icon> : null}
      <button>{Props?.name}</button>
    </div>
  );
};

export default Button;
