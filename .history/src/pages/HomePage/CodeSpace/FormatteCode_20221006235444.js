-- learn more on https://docs/project.co/guides/tables

--js type('table')

SELECT country              as country
       device_type          as device_type
       sum(revenue)         as revenue
       sum(sessions)        as sessions
       sum(pageviews)       as pageviews
FROM my_table
WHERE country = "France"
GROUP BY 1, 2