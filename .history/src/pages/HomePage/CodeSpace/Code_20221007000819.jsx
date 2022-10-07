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
          1       -- learn more on https://docs/project.co/guides/tables
        </pre>
        <pre>
          2       --js type('table')
        </pre>
        <pre>3            </pre>
        <pre>
          4       SELECT country       as country
        </pre>
        <pre>
          5      device_type          as device_type
        </pre>
        <pre>
          6      sum(revenue)         as revenue
        </pre>
        <pre>
          7      sum(sessions)        as sessions
        </pre>
        <pre>
          8      sum(pageviews)       as pageviews
        </pre>
        
        <pre>
          9      FROM my_table
        </pre>
        <pre>
          10      WHERE country = "France"
        </pre>
        <pre>
          11      GROUP BY 1, 2
        </pre>
        
      </div>
    </div>
  );
};

export default Code;
