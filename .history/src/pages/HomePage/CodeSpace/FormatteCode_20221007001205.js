const FormattedCode = ()=>{
       return <div>
              <pre >
          1      -- learn more on https://docs/project.co/guides/tables
        </pre>
        <pre>
          2      --js type('table')
        </pre>
        <pre>3            </pre>
        <pre>
          4      SELECT country       as country
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
          10     WHERE country = "France"
        </pre>
        <pre>
          11     GROUP BY 1, 2
        </pre>
       </div>
}

export default FormattedCode