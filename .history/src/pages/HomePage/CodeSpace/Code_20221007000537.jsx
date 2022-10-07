import { makeStyles } from "@material-ui/core";
import colors_m from "../../../assets/colors";
import Button from "../../../components/Button";
const useStyles = makeStyles({
  code: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "1rem",
  },
  title: {
    width: "100%",
    height: 64,
    borderBottom: `1px solid ${colors_m.darkBluelv_0}`,
    borderRight: `1px solid ${colors_m.darkBluelv_0}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // paddingLeft: "1rem",
    paddingRight: "1rem",
    fontSize: "1rem",
    color: colors_m.textWhite_light,
  },
  preCode:{
    width: 100,
    height: 300
  },
  preWrap: {
    whiteSpace: "pre-wrap"
  }
});
const Code = () => {
  const classes = useStyles();
  return (
    <div className={classes.code}>
      <div className={classes.title}>
        <div>definitions/ 1_simple_examples/dataset_2_with_ref.sql</div>
        <Button
          text="Save"
          backgroundColor={colors_m.darkBluelv_1}
          hoverColor={colors_m.textWhite_1}
          color={"white"}
        />
      </div>
      <div className={classes.preCode}>
        <pre >
          -- learn more on https://docs/project.co/guides/tables
        </pre>
        <pre>
          --js type('table')
        </pre>
        <pre> </pre>
        <pre>
          SELECT country       as country
        </pre>
        <pre>
                device_type          as device_type
        </pre>
        <pre>
                sum(revenue)         as revenue
        </pre>
        <pre>
                sum(sessions)        as sessions
        </pre>
        <pre>
                sum(pageviews)       as pageviews
        </pre>
        
        <pre>
          FROM my_table
        </pre>
        <pre>
          WHERE country = "France"
        </pre>
        <pre>
          GROUP BY 1, 2
        </pre>
        
      </div>
    </div>
  );
};

export default Code;
