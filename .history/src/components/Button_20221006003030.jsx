import { makeStyles } from "@material-ui/core";

const Button = (Props) => {
  const useStyles = makeStyles({
    root: {
      backgroundColor: `${Props?.backgroundColor}`,
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
